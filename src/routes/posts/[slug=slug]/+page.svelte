<script lang="ts">
	import { page } from '$app/stores';
</script>

<h1>{$page.params.slug}</h1>

<p class="mt-6">This is the content of {$page.params.slug}.</p>
