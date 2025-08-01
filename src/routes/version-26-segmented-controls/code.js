export let code = `<script>
	import { List, ListRow, Version26SegmentedControl, Version26SegmentedControlButton } from 'apple-svelte';
	let state = 1;
</script>

<svelte:head>
	<link rel="stylesheet" href="node_modules/apple-svelte/dist/styles.css" />
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
	/>
</svelte:head>

<Version26SegmentedControl>
	<Version26SegmentedControlButton state="selected" onPress={() => (state = 1)} />
	<Version26SegmentedControlButton onPress={() => (state = 2)} />
	<Version26SegmentedControlButton onPress={() => (state = 3)} />
</Version26SegmentedControl>

{#if state === 1}
	<List>
		<ListRow title="First page" />
	</List>
{:else if state === 2}
	<List>
		<ListRow title="Second page" />
	</List>
{:else}
	<List>
		<ListRow title="Third page" />
	</List>
{/if}
`;
