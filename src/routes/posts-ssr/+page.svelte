<script lang="ts">
	import { invalidate /* invalidateAll */ } from '$app/navigation';
	import type { PageData } from './$types';

	export let data: PageData;

	$: ({ posts } = data);

	function rerunLoadFunction() {
		// a)
		invalidate('app:posts');

		// b)
		// invalidate('/api/posts')

		// c)
		// invalidate(url => url.href.includes('posts'))

		// d)
		// invalidateAll()
	}
</script>

<h1>Posts on SSR</h1>

<div class="my-4">
	<button type="button" on:click={rerunLoadFunction}>Reload</button>
</div>

<ul class="mt-10">
	Showing {posts.length} posts.

	{#each posts as post}
		<li class="mt-2"><a href={`/posts-ssr/${post.slug}`}>{post.title}</a></li>
	{/each}
</ul>

<style lang="postcss">
	ul li a {
		@apply underline underline-offset-2 text-blue-400;
	}
</style>
