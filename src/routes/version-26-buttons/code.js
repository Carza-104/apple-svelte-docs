export let code = `<script>
	import { Version26Button } from 'apple-svelte';
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
		<Version26Button symbol="stack" label="Version26Button" />
	</div>
	<div class="vertical">
		<Version26Button size="medium" symbol="stack" label="Version26Button" />
	</div>
	<div class="vertical">
		<Version26Button size="large" symbol="stack" label="Version26Button" />
	</div>
</div>
<div class="horizontal">
	<div class="vertical">
		<Version26Button labelType="text" label="Version26Button" />
	</div>
	<div class="vertical">
		<Version26Button labelType="text" size="medium" label="Version26Button" />
	</div>
	<div class="vertical">
		<Version26Button labelType="text" size="large" label="Version26Button" />
	</div>
</div>
<div class="horizontal">
	<div class="vertical">
		<Version26Button labelType="symbol" symbol="stack" />
	</div>
	<div class="vertical">
		<Version26Button labelType="symbol" size="medium" symbol="stack" />
	</div>
	<div class="vertical">
		<Version26Button labelType="symbol" size="large" symbol="stack" />
	</div>
</div>

<style>
	.horizontal {
		background-image: url('https://i.imgur.com/IZXdb9Z.jpeg');
		background-size: cover;
		border-radius: 26px;
		display: flex;
		gap: 16px;
		padding: 16px;
		width: min-content;
	}

	.vertical {
		display: flex;
		flex-direction: column;
		gap: 24px;
	}
</style>
`;
