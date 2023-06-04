<script lang="ts">
	import { queryParam } from 'sveltekit-search-params';
	import type { PageData } from './$types';

	export let data: PageData;

	$: ({ posts } = data);

	const search = queryParam('search');

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
	{#each posts as post}
		<strong class="block mt-4">{post.title}</strong>
	{:else}
		<p>No posts found.</p>
	{/each}
</div>

<style lang="postcss">
	form button[type='button'] {
		@apply bg-red-500;
	}
</style>
