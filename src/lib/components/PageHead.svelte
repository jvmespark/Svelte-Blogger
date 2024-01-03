<script lang="ts">
	import * as custom from "../../../user/blogger-config.json";
	
	export let title=custom.blog.title;
	export let description=custom.blog.description;

	const siteTitle = custom.blog.title;
	const formattedTitle = title ? `${title} | ${siteTitle}` : siteTitle;
</script>

<svelte:head>
	<title>{formattedTitle}</title>

	<meta property="og:site_name" content={siteTitle} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
</svelte:head>
