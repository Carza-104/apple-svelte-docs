export let code = `<script>
	import { IOS26Alert, IOS26AlertButton, Button } from 'apple-svelte';
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

<IOS26Alert bind:state showDescription>
	<IOS26AlertTextField slot="text-field" />
	<IOS26AlertButton slot="button-1" state="primary" />
	<IOS26AlertButton slot="button-2" state="secondary" />
	<IOS26AlertButton slot="button-3" state="destructive" />
</IOS26Alert>
`;
