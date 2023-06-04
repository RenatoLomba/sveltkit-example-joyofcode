<script lang="ts">
	import { page } from '$app/stores';
	import type { LayoutData } from './$types';

	export let data: LayoutData;

	$: ({ posts } = data);
	$: ({
		params: { slug },
	} = $page);
</script>

<div class="flex gap-4">
	<aside class="flex flex-col max-w-[200px] w-full">
		<h1>Layout</h1>

		<ul class="mt-4">
			<p>{data.message}</p>

			{#each posts as post}
				<li class="mt-2">
					<a
						class={slug === post.slug ? 'active' : ''}
						href={`/posts-layout-load/${post.slug}`}>{post.title}</a
					>
				</li>
			{/each}
		</ul>
	</aside>

	<main class="flex-1">
		<slot />
	</main>
</div>

<style lang="postcss">
	ul li a {
		@apply text-blue-500;
	}

	ul li a.active {
		@apply text-blue-300 underline;
	}
</style>
