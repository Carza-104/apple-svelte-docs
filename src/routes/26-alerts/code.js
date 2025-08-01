export let code = `<script>
	import { Version26Alert, Version26AlertButton, Button } from 'apple-svelte';
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

<Version26Alert bind:state showDescription>
	<Version26AlertTextField slot="text-field" />
	<Version26AlertButton slot="button-1" state="primary" />
	<Version26AlertButton slot="button-2" state="secondary" />
	<Version26AlertButton slot="button-3" state="destructive" />
</Version26Alert>
`;
