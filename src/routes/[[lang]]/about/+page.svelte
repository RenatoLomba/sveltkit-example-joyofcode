<script lang="ts">
	import { page } from '$app/stores';
</script>

<h1>About</h1>
<p class="mt-6"><strong>Lang is: </strong>{$page.params.lang || 'default'}</p>
