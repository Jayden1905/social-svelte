<script lang="ts">
	import { auth } from '$lib/utils/firebase'

	const user = auth.currentUser
</script>

<main>
	<h1>Welcome to SvelteKit</h1>
	<p>
		{user?.displayName}
	</p>
</main>

<style></style>
