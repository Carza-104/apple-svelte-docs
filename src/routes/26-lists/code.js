export let code = `<script>
	import {
		Collection,
		Version26List,
		Version26ListButtonRow,
		Version26ListRow,
		Version26ListRowButtonTrailing,
		Version26ListRowDefaultTrailing,
		Version26ListRowDisclosureTrailing,
		Version26ListRowImage,
		Version26ListRowStepperTrailing,
		Version26ListRowToggleTrailing,
		Version26ListSliderRow,
		Version26ListTextFieldRow
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
	<Version26List showHeader showFooter>
		<Version26ListRow>
			<Version26ListRowImage slot="image" type="symbol" />
			<Version26ListRowButtonTrailing slot="trailing" />
		</Version26ListRow>
		<Version26ListRow>
			<Version26ListRowImage slot="image" type="symbol" />
			<Version26ListRowDefaultTrailing slot="trailing" showDetail showDisclosure />
		</Version26ListRow>
		<Version26ListRow>
			<Version26ListRowImage slot="image" type="symbol" />
			<Version26ListRowDisclosureTrailing slot="trailing" />
		</Version26ListRow>
		<Version26ListRow>
			<Version26ListRowImage slot="image" type="symbol" />
			<Version26ListRowStepperTrailing slot="trailing" />
		</Version26ListRow>
		<Version26ListRow>
			<Version26ListRowImage slot="image" type="symbol" />
			<Version26ListRowToggleTrailing slot="trailing" />
		</Version26ListRow>
	</Version26List>
	<Version26List showHeader showFooter>
		<Version26ListButtonRow />
		<Version26ListRow title="Slider value: {sliderValue}" />
		<Version26ListSliderRow bind:value={sliderValue} showSymbols />
		<Version26ListRow title="Text field value: {textFieldValue}" />
		<Version26ListTextFieldRow bind:value={textFieldValue} />
	</Version26List>
</Collection>
`;
