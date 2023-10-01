<script>
	import { Button, SegmentedControl, SegmentedControlButton } from 'apple-svelte';
	import Code from '$lib/Code.svelte';
	import { code } from './code';

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
<SegmentedControl>
	<SegmentedControlButton state="selected" label="Preview" onPress={() => (panel = 'preview')} />
	<SegmentedControlButton label="Code" onPress={() => (panel = 'code')} />
	<SegmentedControlButton label="Props" onPress={() => (panel = 'props')} />
</SegmentedControl>
{#if panel === 'preview'}
	<Button type="filled" />
{:else if panel === 'code'}
	<Code {code} />
{:else}
	<div class="table">
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
	.table {
		background: var(--bg-grouped-secondary);
		border-radius: 10px;
		overflow: scroll;
	}

	table {
		border-collapse: collapse;
		white-space: pre;
		width: 100%;
	}

	td {
		border: 0.5px solid var(--separators-opaque);
		padding: 11px 16px;
	}

	td:first-child {
		border-left: unset;
	}

	td:last-child {
		border-right: unset;
	}

	tr:first-child td {
		border-top: unset;
	}

	tr:last-child td {
		border-bottom: unset;
	}
</style>
