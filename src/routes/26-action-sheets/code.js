export let code = `<script>
	import { IOS26ActionSheet, IOS26ActionSheetButton, Button } from 'apple-svelte';
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

<IOS26ActionSheet bind:state showHeader showDescription showCancelButton>
	<IOS26ActionSheetButton state="primary" />
	<IOS26ActionSheetButton state="secondary" />
	<IOS26ActionSheetButton state="destructive" />
</IOS26ActionSheet>
`;
