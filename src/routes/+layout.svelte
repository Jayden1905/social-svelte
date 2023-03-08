<script lang="ts">
	import { authState } from '../store';
</script>

<svelte:head>
	<title>Social</title>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name="description" content="Social app built with SvelteKit" />
</svelte:head>

<div>
	{#if $authState?.loading}
		<p>loading</p>
	{:else}
		<slot />
	{/if}
</div>
