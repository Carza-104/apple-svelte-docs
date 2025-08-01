<script>
	import { onMount } from 'svelte';
	import {
		Version26Button,
		Version26SegmentedControl,
		Version26SegmentedControlButton
	} from 'apple-svelte';
	import Code from '$lib/Code.svelte';
	import { code } from './code';

	let elementClass = 'default';

	onMount(() => {
		if (navigator.userAgent.includes('Win')) {
			elementClass = 'windows';
		}
	});

	let props = [
		{
			name: 'size',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: '"small"\n"medium"\n"large"'
		},
		{
			name: 'state',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: '"enabled"\n"disabled"'
		},
		{
			name: 'labelType',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: '"symbol-and-text"\n"symbol"\n"text"'
		},
		{
			name: 'symbol',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: '"play_arrow"'
		},
		{
			name: 'label',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: '"Play"'
		},
		{
			name: 'id',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: 'undefined'
		},
		{
			name: 'onPress',
			description: 'Insert description here.',
			type: 'Object',
			defaultValues: 'undefined'
		},
		{
			name: 'style',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: 'undefined'
		}
	];

	let panel = 'preview';
</script>

<p>
	Button components are very straightforward: you can declare a function and have the button call it
	when pressed.
</p>
<p>
	Button components have a prop called <code>state</code>, which disables the button entirely when
	set to
	<code>"disabled"</code>.
</p>
<Version26SegmentedControl>
	<Version26SegmentedControlButton
		state="selected"
		label="Preview"
		onPress={() => (panel = 'preview')}
	/>
	<Version26SegmentedControlButton label="Code" onPress={() => (panel = 'code')} />
	<Version26SegmentedControlButton label="Props" onPress={() => (panel = 'props')} />
</Version26SegmentedControl>
{#if panel === 'preview'}
	<hr />
	<div class="horizontal">
		<div class="vertical">
			<Version26Button symbol="stack" label="Button" />
		</div>
		<div class="vertical">
			<Version26Button size="medium" symbol="stack" label="Button" />
		</div>
		<div class="vertical">
			<Version26Button size="large" symbol="stack" label="Button" />
		</div>
	</div>
	<div class="horizontal">
		<div class="vertical">
			<Version26Button labelType="text" label="Button" />
		</div>
		<div class="vertical">
			<Version26Button labelType="text" size="medium" label="Button" />
		</div>
		<div class="vertical">
			<Version26Button labelType="text" size="large" label="Button" />
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
{:else if panel === 'code'}
	<Code {code} />
{:else}
	<div class="table {elementClass}">
		<table>
			<tr class="headline">
				<td>Name</td>
				<td>Type</td>
				<td>Default values</td>
			</tr>
			{#each props as prop}
				<tr>
					<td><code>{prop.name}</code></td>
					<td>{prop.type}</td>
					<td><code>{prop.defaultValues}</code></td>
				</tr>
			{/each}
		</table>
	</div>
{/if}

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
