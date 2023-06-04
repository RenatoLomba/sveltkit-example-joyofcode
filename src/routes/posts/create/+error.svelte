<script lang="ts">
	import { page } from '$app/stores';
</script>

<h1>{$page.error?.message}</h1>

<p class="mt-6">
	Something went horribly wrong but the blast radius has been contained to this
	route.
</p>

<pre>
  {JSON.stringify($page, null, 2)}
</pre>

<style lang="postcss">
	pre {
		@apply bg-slate-800 rounded-md p-4 block mt-4;
	}
</style>
