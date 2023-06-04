<script lang="ts">
	import { formatDate } from '$lib/formatDate';
	import type { PageServerData } from './$types';

	export let data: PageServerData;

	$: ({ post } = data);
</script>

<hgroup>
	<h1>{post.title}</h1>
	<h2 class="block text-slate-500 font-medium">
		{formatDate(post.createdAt)}
	</h2>

	<p class="mt-6">{post.content}</p>
</hgroup>
