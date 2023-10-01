<script>
	import { SegmentedControl, SegmentedControlButton } from 'apple-svelte';
	import Code from '$lib/Code.svelte';
	import { code } from './code';

	let segmentedControlProps = [
		{
			name: 'id',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: 'undefined'
		},
		{
			name: 'style',
			description: '',
			type: 'String',
			defaultValues: 'undefined'
		}
	];

	let segmentedControlButtonProps = [
		{
			name: 'inputGroup',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: '"segmented-control-button"'
		},
		{
			name: 'state',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: '"default"\n"selected"'
		},
		{
			name: 'label',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: '"Label"'
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
			description: '',
			type: 'String',
			defaultValues: 'undefined'
		}
	];

	let panel = 'preview';
</script>

<p>Segmented controls provide mutually exclusive buttons to switch between views.</p>
<p>
	You can have segmented control buttons call any function when pressed, but it's recommended you
	use this to conditionally render content.
</p>
<SegmentedControl>
	<SegmentedControlButton state="selected" label="Preview" onPress={() => (panel = 'preview')} />
	<SegmentedControlButton label="Code" onPress={() => (panel = 'code')} />
	<SegmentedControlButton label="Props" onPress={() => (panel = 'props')} />
</SegmentedControl>
{#if panel === 'preview'}
	<SegmentedControl>
		<SegmentedControlButton inputGroup="preview-segmented-control" />
		<SegmentedControlButton inputGroup="preview-segmented-control" />
		<SegmentedControlButton inputGroup="preview-segmented-control" />
	</SegmentedControl>
{:else if panel === 'code'}
	<Code {code} />
{:else}
	<div class="table-container">
		<div class="table">
			<table>
				<tr class="title3-emphasized">
					<td><code>SegmentedControl</code> props</td>
				</tr>
				<tr class="headline">
					<td>Name</td>
					<td>Type</td>
					<td>Default values</td>
				</tr>
				{#each segmentedControlProps as prop}
					<tr>
						<td><code>{prop.name}</code></td>
						<td>{prop.type}</td>
						<td><code>{prop.defaultValues}</code></td>
					</tr>
				{/each}
			</table>
		</div>
		<div class="table">
			<table>
				<tr class="title3-emphasized">
					<td><code>SegmentedControlButton</code> props</td>
				</tr>
				<tr class="headline">
					<td>Name</td>
					<td>Type</td>
					<td>Default values</td>
				</tr>
				{#each segmentedControlButtonProps as prop}
					<tr>
						<td><code>{prop.name}</code></td>
						<td>{prop.type}</td>
						<td><code>{prop.defaultValues}</code></td>
					</tr>
				{/each}
			</table>
		</div>
	</div>
{/if}

<style>
	.table-container {
		display: flex;
		flex-direction: column;
		gap: 24px;
	}

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
