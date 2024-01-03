<script lang="ts">
	import type { PageData } from './$types';
	import { page } from '$app/stores';  
	import type { SvelteComponentTyped } from 'svelte/internal';

	import PageHead from '$lib/components/PageHead.svelte';
	import ArticleTitle from '$lib/components/ArticleTitle.svelte';
	import ArticleMeta from '$lib/components/ArticleMeta.svelte';
	import Comments from '$lib/components/Comments.svelte';

	export let data: PageData;

	let slug = $page.url.pathname.split('/').pop();

	type C = $$Generic<typeof SvelteComponentTyped<any, any, any>>;
	$: component = data.component as unknown as C;
</script>


<main>
	<PageHead title={data.frontmatter.title} description={data.frontmatter.description} />
	<ArticleTitle title={data.frontmatter.title} />
	<ArticleMeta author={data.frontmatter.author} date={data.frontmatter.date} />
	<svelte:component this={component} />
	<Comments slug={slug}></Comments>
</main>

<style>
	main {
		margin: 0 auto; 	
		text-align: center;
		width: 60%;
	}
</style>