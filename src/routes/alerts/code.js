export let code = `<script>
	import { Alert, AlertButton, Button } from 'apple-svelte';
	let state = 'hidden';
</script>

<svelte:head>
	<link rel="stylesheet" href="node_modules/apple-svelte/dist/styles.css" />
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
	/>
</svelte:head>

<Button type="bezeled" symbol="visibility" label="Show alert" onPress={() => (state = 'default')} />

<Alert bind:state showDescription>
	<AlertTextField slot="text-field" />
	<AlertButton slot="button-1" state="preferred" />
	<AlertButton slot="button-2" />
	<AlertButton slot="button-3" />
</Alert>
`;
