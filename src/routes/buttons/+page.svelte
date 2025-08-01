<script>
	import { onMount } from 'svelte';
	import { Button, Version26SegmentedControl, Version26SegmentedControlButton } from 'apple-svelte';
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
			name: 'onMaterial',
			description: 'Insert description here.',
			type: 'Boolean',
			defaultValues: 'false\ntrue'
		},
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
			name: 'type',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: '"borderless"\n"bezeled-gray"\n"bezeled"\n"filled"'
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
{:else if panel === 'code'}
	<Code {code} />
{:else}
	<div class="table {elementClass}">
		<table>
			<tbody>
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
			</tbody>
		</table>
	</div>
{/if}

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
