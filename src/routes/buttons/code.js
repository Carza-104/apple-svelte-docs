export let code = `<script>
	import { Button } from 'apple-svelte';
</script>

<svelte:head>
	<link rel="stylesheet" href="node_modules/apple-svelte/dist/styles.css" />
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
	/>
</svelte:head>

<div class="horizontal">
	<div class="vertical">
		<Button symbol="stack" label="Button" />
		<Button type="bezeled-gray" symbol="stack" label="Button" />
		<Button type="bezeled" symbol="stack" label="Button" />
		<Button type="filled" symbol="stack" label="Button" />
	</div>
	<div class="vertical">
		<Button size="medium" symbol="stack" label="Button" />
		<Button type="bezeled-gray" size="medium" symbol="stack" label="Button" />
		<Button type="bezeled" size="medium" symbol="stack" label="Button" />
		<Button type="filled" size="medium" symbol="stack" label="Button" />
	</div>
	<div class="vertical">
		<Button size="large" symbol="stack" label="Button" />
		<Button type="bezeled-gray" size="large" symbol="stack" label="Button" />
		<Button type="bezeled" size="large" symbol="stack" label="Button" />
		<Button type="filled" size="large" symbol="stack" label="Button" />
	</div>
</div>
<div class="horizontal">
	<div class="vertical">
		<Button labelType="text" label="Button" />
		<Button labelType="text" type="bezeled-gray" label="Button" />
		<Button labelType="text" type="bezeled" label="Button" />
		<Button labelType="text" type="filled" label="Button" />
	</div>
	<div class="vertical">
		<Button labelType="text" size="medium" label="Button" />
		<Button labelType="text" type="bezeled-gray" size="medium" label="Button" />
		<Button labelType="text" type="bezeled" size="medium" label="Button" />
		<Button labelType="text" type="filled" size="medium" label="Button" />
	</div>
	<div class="vertical">
		<Button labelType="text" size="large" label="Button" />
		<Button labelType="text" type="bezeled-gray" size="large" label="Button" />
		<Button labelType="text" type="bezeled" size="large" label="Button" />
		<Button labelType="text" type="filled" size="large" label="Button" />
	</div>
</div>
<div class="horizontal">
	<div class="vertical">
		<Button labelType="symbol" symbol="stack" />
		<Button labelType="symbol" type="bezeled-gray" symbol="stack" />
		<Button labelType="symbol" type="bezeled" symbol="stack" />
		<Button labelType="symbol" type="filled" symbol="stack" />
	</div>
	<div class="vertical">
		<Button labelType="symbol" size="medium" symbol="stack" />
		<Button labelType="symbol" type="bezeled-gray" size="medium" symbol="stack" />
		<Button labelType="symbol" type="bezeled" size="medium" symbol="stack" />
		<Button labelType="symbol" type="filled" size="medium" symbol="stack" />
	</div>
	<div class="vertical">
		<Button labelType="symbol" size="large" symbol="stack" />
		<Button labelType="symbol" type="bezeled-gray" size="large" symbol="stack" />
		<Button labelType="symbol" type="bezeled" size="large" symbol="stack" />
		<Button labelType="symbol" type="filled" size="large" symbol="stack" />
	</div>
</div>

<style>
	.horizontal {
		display: flex;
		gap: 16px;
	}

	.vertical {
		display: flex;
		flex-direction: column;
		gap: 24px;
	}
</style>
`;
