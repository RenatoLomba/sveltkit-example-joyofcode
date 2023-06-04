<script lang="ts">
	import type { Post } from '@prisma/client';

	async function getPosts() {
		const response = await fetch('/api/posts');
		const posts: Post[] = await response.json();
		return posts;
	}
</script>

<div class="w-full flex mt-14">
	<aside class="max-w-[200px] w-full">
		<h4 class="text-2xl font-medium">Posts</h4>

		<nav>
			<ul class="mt-4">
				{#await getPosts()}
					<p>Loading...</p>
				{:then posts}
					<p>Showing {posts.length} posts.</p>
					{#each posts as post}
						<li class="mt-2">
							<a href={`/posts/${post.slug}`}>{post.title}</a>
						</li>
					{:else}
						<p>No post found.</p>
					{/each}
				{:catch error}
					<p>Something went wrong: {error.message}.</p>
				{/await}
			</ul>
		</nav>
	</aside>

	<main class="flex-1">
		<slot />
	</main>
</div>

<style lang="postcss">
	nav ul li a {
		@apply underline underline-offset-2 text-blue-400;
	}
</style>
