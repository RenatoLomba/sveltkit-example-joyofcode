<div class="w-full flex mt-14">
	<aside class="max-w-[200px] w-full">
		<h4 class="text-2xl font-medium">Posts</h4>

		<nav>
			<ul class="mt-4">
				<li><a href="/posts/post-1">Post 1</a></li>
				<li><a href="/posts/post-2">Post 2</a></li>
				<li><a href="/posts/post-3">Post 3</a></li>
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
