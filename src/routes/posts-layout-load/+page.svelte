<script lang="ts">
	import type { LayoutData } from './$types';

	export let data: LayoutData;

	$: ({ message, posts } = data);
	$: firstPost = posts[0];
</script>

<h1 class="mt-6">Page itself</h1>

<p class="mt-4">{message}</p>

{#if !!firstPost}
	<a class="mt-8 block" href={`/posts-layout-load/${firstPost.slug}`}
		>Begin with: {firstPost.title}</a
	>
{/if}

<style lang="postcss">
	a {
		@apply text-blue-500 underline underline-offset-2;
	}
</style>
