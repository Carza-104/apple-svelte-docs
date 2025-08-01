export let code = `<script>
	import { Version26ActionSheet, Version26ActionSheetButton, Button } from 'apple-svelte';
	let state = 'hidden';
</script>

<svelte:head>
	<link rel="stylesheet" href="node_modules/apple-svelte/dist/styles.css" />
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
	/>
</svelte:head>

<Button
	type="bezeled"
	symbol="visibility"
	label="Show action sheet"
	onPress={() => (state = 'default')}
/>

<Version26ActionSheet bind:state showHeader showDescription showCancelButton>
	<Version26ActionSheetButton state="primary" />
	<Version26ActionSheetButton state="secondary" />
	<Version26ActionSheetButton state="destructive" />
</Version26ActionSheet>
`;
