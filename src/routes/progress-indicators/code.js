export let code = `<script>
	import { Button, RegularProgressIndicator, SmallProgressIndicator } from 'apple-svelte';
	let displayStyle = 'none';
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
	label="Show progress indicators"
	onPress={() => (displayStyle = 'flex')}
/>

<RegularProgressIndicator showLabel style="display: {displayStyle}" />
<SmallProgressIndicator showLabel style="display: {displayStyle}" />
`;
