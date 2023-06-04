<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	$: ({ posts } = data);
</script>

<h1>Posts on SSR</h1>

<ul class="mt-4">
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
