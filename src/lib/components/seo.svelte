<script>
	import * as custom from "../../../user/blogger-config.json"

	export let title=custom.blog.title;
	export let description=custom.blog.description;
</script>

<svelte:head>
	<!-- Primary Meta Tags -->
	<title>{title}</title>
	<meta name="title" content={title} />
	<meta name="description" content={description} />
</svelte:head>