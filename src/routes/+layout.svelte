<script>
	import { page } from '$app/stores';
	import '../app.css';
</script>

<svelte:head>
	<title>{$page.data.post?.title || 'Home'} | Post</title>
</svelte:head>

<nav class="flex gap-4">
	<a href="/">Home</a>
	<a href="/posts">Posts</a>
	<a href="/posts-ssr">Posts SSR</a>
	<a href="/posts-layout-load">Posts Load Data on Layout</a>
	<a href="/posts-with-params">Posts with Params</a>
</nav>

<div class="mt-4">
	<slot />
</div>

<style lang="postcss">
	nav a {
		@apply text-blue-500;
	}
</style>
