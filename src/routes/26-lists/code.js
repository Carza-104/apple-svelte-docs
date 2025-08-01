export let code = `<script>
	import {
		Collection,
		IOS26List,
		IOS26ListButtonRow,
		IOS26ListRow,
		IOS26ListRowButtonTrailing,
		IOS26ListRowDefaultTrailing,
		IOS26ListRowDisclosureTrailing,
		IOS26ListRowImage,
		IOS26ListRowStepperTrailing,
		IOS26ListRowToggleTrailing,
		IOS26ListSliderRow,
		IOS26ListTextFieldRow
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
	<IOS26List showHeader showFooter>
		<IOS26ListRow>
			<IOS26ListRowImage slot="image" type="symbol" />
			<IOS26ListRowButtonTrailing slot="trailing" />
		</IOS26ListRow>
		<IOS26ListRow>
			<IOS26ListRowImage slot="image" type="symbol" />
			<IOS26ListRowDefaultTrailing slot="trailing" showDetail showDisclosure />
		</IOS26ListRow>
		<IOS26ListRow>
			<IOS26ListRowImage slot="image" type="symbol" />
			<IOS26ListRowDisclosureTrailing slot="trailing" />
		</IOS26ListRow>
		<IOS26ListRow>
			<IOS26ListRowImage slot="image" type="symbol" />
			<IOS26ListRowStepperTrailing slot="trailing" />
		</IOS26ListRow>
		<IOS26ListRow>
			<IOS26ListRowImage slot="image" type="symbol" />
			<IOS26ListRowToggleTrailing slot="trailing" />
		</IOS26ListRow>
	</IOS26List>
	<IOS26List showHeader showFooter>
		<IOS26ListButtonRow />
		<IOS26ListRow title="Slider value: {sliderValue}" />
		<IOS26ListSliderRow bind:value={sliderValue} showSymbols />
		<IOS26ListRow title="Text field value: {textFieldValue}" />
		<IOS26ListTextFieldRow bind:value={textFieldValue} />
	</IOS26List>
</Collection>
`;
