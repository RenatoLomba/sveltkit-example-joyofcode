<script lang="ts">
	import type { Post } from '@prisma/client';
	import { queryParam } from 'sveltekit-search-params';

	const search = queryParam('search');

	async function getPosts(searchParam?: string | null) {
		let url = '/api/posts-with-params?page=1&limit=10&order=asc';

		if (searchParam) {
			url = url.concat(`&search=${searchParam}`);
		}

		const response = await fetch(url);
		const posts: Post[] = await response.json();
		return posts;
	}

	function handleSubmitSearchForm(e: Event) {
		const form = e.target as HTMLFormElement;

		const data = new FormData(form);
		const searchValue = data.get('search');

		if (searchValue !== null) {
			$search = searchValue as string;
		}
	}

	function clearSearch() {
		$search = '';
	}
</script>

<h1>Posts With Params Client Side</h1>

<form on:submit|preventDefault={handleSubmitSearchForm} class="block mt-10">
	<label>
		<span class="mr-2">Search: </span>
		<input type="text" name="search" value={$search} />
	</label>
	<button type="submit">Search</button>
	<button type="button" on:click={clearSearch}>Clear</button>
</form>

<div class="mt-6">
	{#await getPosts($search)}
		<p>Loading...</p>
	{:then posts}
		{#each posts as post}
			<strong class="block mt-4">{post.title}</strong>
		{:else}
			<p>No posts found.</p>
		{/each}
	{/await}
</div>

<style lang="postcss">
	form button[type='button'] {
		@apply bg-red-500;
	}
</style>
