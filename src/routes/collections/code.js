export let code = `<script>
	import { Collection, List, ListRow, ListRowImage, ListRowToggleTrailing } from 'apple-svelte';
</script>

<svelte:head>
	<link rel="stylesheet" href="node_modules/apple-svelte/dist/styles.css" />
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
	/>
</svelte:head>

<Collection>
	<List showHeader showFooter>
		<ListRow>
			<ListRowImage slot="image" type="symbol" />
			<ListRowToggleTrailing slot="trailing" showAccentColor state="default" />
		</ListRow>
		<ListRow>
			<ListRowImage slot="image" type="symbol" />
			<ListRowToggleTrailing slot="trailing" showAccentColor />
		</ListRow>
	</List>
	<List showHeader showFooter>
		<ListRow>
			<ListRowImage slot="image" type="symbol" />
			<ListRowToggleTrailing slot="trailing" state="default" />
		</ListRow>
		<ListRow>
			<ListRowImage slot="image" type="symbol" />
			<ListRowToggleTrailing slot="trailing" />
		</ListRow>
	</List>
</Collection>
`;
