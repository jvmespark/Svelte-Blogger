<script lang="ts">
	import { page } from '$app/stores';
	import Header from '$lib/header/header.svelte'; 
	export const prerender = true
</script>

<div class="app">
	<Header></Header>
	<main>
		<slot />
	</main>
</div>