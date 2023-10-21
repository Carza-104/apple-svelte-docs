export let code = `<script>
    import {
        List,
        ListRow,
        ListRowButtonTrailing,
        ListRowDefaultTrailing,
        ListRowDisclosureTrailing,
        ListRowImage,
        ListRowStepperTrailing,
        ListRowToggleTrailing
    } from 'apple-svelte';
</script>

<svelte:head>
    <link rel="stylesheet" href="node_modules/apple-svelte/dist/styles.css" />
    <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
    />
</svelte:head>

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
    <ListButtonRow />
    <ListSliderRow />
    <ListTextFieldRow />
</List>`;
