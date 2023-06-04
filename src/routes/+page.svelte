<script lang="ts">
	let subscribed = false;

	async function subscribe(event: Event): Promise<void> {
		const form = event.target as HTMLFormElement;
		const data = new FormData(form);

		const response = await fetch('/api/newsletter', {
			method: 'POST',
			body: data,
		});

		if (response.ok) {
			const { success } = await response.json();

			if (success) {
				subscribed = true;
			}
		}
	}
</script>

<h1>Newsletter</h1>

{#if subscribed}
	<div class="mt-2 text-green-400">Congrats! You're now subscribed!</div>
{/if}

<form
	on:submit|preventDefault={subscribe}
	class="max-w-[300px] flex flex-col mt-6 gap-8"
>
	<label>
		<span>E-mail: </span>
		<input type="email" name="email" />
	</label>

	<button type="submit">Subscribe</button>
</form>

<style lang="postcss">
	form label {
		@apply flex flex-col text-xl font-medium gap-4;
	}
</style>
