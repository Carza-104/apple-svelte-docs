export let code = `<script>
	import { IOS26TabBar, IOS26TabBarButton } from 'apple-svelte';
</script>

<svelte:head>
	<link rel="stylesheet" href="node_modules/apple-svelte/dist/styles.css" />
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
	/>
</svelte:head>

<IOS26TabBar>
	<IOS26TabBarButton />
	<IOS26TabBarButton />
	<IOS26TabBarButton />
</IOS26TabBar>
`;
