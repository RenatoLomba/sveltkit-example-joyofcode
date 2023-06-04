<script lang="ts">
	import { formatDate } from '$lib/formatDate';
	import type { PageData } from './$types';

	export let data: PageData;

	$: ({ message, post, posts } = data);

	$: pageIndex = posts.findIndex((p) => p.id === post.id);
	$: previousPost = posts[pageIndex - 1];
	$: nextPost = posts[pageIndex + 1];
</script>

<a href="/posts-layout-load">Back</a>

<h1 class="mt-6">This was fetched by Page: {post.title}</h1>
<h2 class="text-slate-500 font-medium">{formatDate(post.createdAt)}</h2>

<p class="mt-4">{message}</p>

<p class="mt-8">{post.content}</p>

<div class="mt-16 flex gap-4 justify-between">
	{#if !!previousPost}
		<a href={`/posts-layout-load/${previousPost.slug}`}
			>Previous: {previousPost.title}</a
		>
	{:else}
		<div />
	{/if}

	{#if !!nextPost}
		<a href={`/posts-layout-load/${nextPost.slug}`}>Next: {nextPost.title}</a>
	{/if}
</div>

<style lang="postcss">
	a {
		@apply text-blue-500 underline underline-offset-2;
	}

	div a {
		@apply max-w-[200px];
	}
</style>
