import type { PageLoad } from './$types';
import { slugFromPath } from '$lib/slugFromPath';
import { error } from '@sveltejs/kit';

import { query, where, getDocs, DocumentData, QuerySnapshot } from 'Firebase/firestore/lite';
import { commentCollection } from '$lib/Firebase.js';

export const load: PageLoad = async ({ params }) => {
	const modules = import.meta.glob(`/user/posts/*.{md,svx,svelte.md}`);

	let match: { path?: string; resolver?: App.MdsvexResolver } = {};
	for (const [path, resolver] of Object.entries(modules)) {
		if (slugFromPath(path) === params.slug) {
			match = { path, resolver: resolver as unknown as App.MdsvexResolver };
			break;
		}
	}

	const post = await match?.resolver?.();

	if (!post || !post.metadata.published) {
		throw error(404); // Couldn't resolve the post
	}

	// TODO write the getcomments function and return as comments
	const q: query = query(commentCollection, where("slug", "==", params.slug));
	const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(q);
	let comments: Array<DocumentData & { id: string }> = [];
	// Use es6 spread operator to add the blogs and their id
	querySnapshot.forEach((comment) => {
		comments.push({ ...comment.data(), id: comment.id });
	});

	return {
		component: post.default,
		frontmatter: post.metadata,
		comments: comments
	};
};
