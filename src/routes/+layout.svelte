<script>
	import '../app.css';
</script>

<nav class="flex gap-4">
	<a href="/">Home</a>
	<a href="/posts">Posts</a>
</nav>

<div class="mt-4">
	<slot />
</div>

<style lang="postcss">
	nav a {
		@apply text-blue-500;
	}
</style>
