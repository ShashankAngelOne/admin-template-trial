<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	onMount(async () => {
		goto(`/holding`, { replaceState: false });
	});
</script>
