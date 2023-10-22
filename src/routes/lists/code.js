export let code = `<script>
	import {
		Collection,
		List,
		ListButtonRow,
		ListRow,
		ListRowButtonTrailing,
		ListRowDefaultTrailing,
		ListRowDisclosureTrailing,
		ListRowImage,
		ListRowStepperTrailing,
		ListRowToggleTrailing,
		ListSliderRow,
		ListTextFieldRow
	} from 'apple-svelte';
	let sliderValue = undefined;
	let textFieldValue = undefined;
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
			<ListRowButtonTrailing slot="trailing" />
		</ListRow>
		<ListRow>
			<ListRowImage slot="image" type="symbol" />
			<ListRowDefaultTrailing slot="trailing" showDetail showDisclosure />
		</ListRow>
		<ListRow>
			<ListRowImage slot="image" type="symbol" />
			<ListRowDisclosureTrailing slot="trailing" />
		</ListRow>
		<ListRow>
			<ListRowImage slot="image" type="symbol" />
			<ListRowStepperTrailing slot="trailing" />
		</ListRow>
		<ListRow>
			<ListRowImage slot="image" type="symbol" />
			<ListRowToggleTrailing slot="trailing" />
		</ListRow>
	</List>
	<List showHeader showFooter>
		<ListButtonRow />
		<ListRow title="Slider value: {sliderValue}" />
		<ListSliderRow bind:value={sliderValue} showSymbols />
		<ListRow title="Text field value: {textFieldValue}" />
		<ListTextFieldRow bind:value={textFieldValue} />
	</List>
</Collection>
`;
