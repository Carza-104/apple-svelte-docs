export let code = `<script>
	import { Version26Toolbar, Version26ToolbarButton } from 'apple-svelte';
</script>

<svelte:head>
	<link rel="stylesheet" href="node_modules/apple-svelte/dist/styles.css" />
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
	/>
</svelte:head>

<Version26Toolbar>
	<Version26ToolbarButton />
	<Version26ToolbarButton />
	<Version26ToolbarButton />
</Version26Toolbar>
`;
