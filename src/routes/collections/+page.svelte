<script>
	import { SegmentedControl, SegmentedControlButton } from 'apple-svelte';
	import Code from '$lib/Code.svelte';
	import { code } from './code';

	let props = [
		{
			name: 'id',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: 'undefined'
		},
		{
			name: 'style',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: 'undefined'
		}
	];

	let panel = 'code';
</script>

<p>Collections are simple layout components that work best when wrapped around multiple lists.</p>
<p>On smaller screens, collections automatically switch from a grid layout to a row one.</p>
<SegmentedControl>
	<SegmentedControlButton state="selected" label="Code" onPress={() => (panel = 'code')} />
	<SegmentedControlButton label="Props" onPress={() => (panel = 'props')} />
</SegmentedControl>
{#if panel === 'code'}
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
		overflow-x: auto;
	}

	.table::-webkit-scrollbar {
		display: none;
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
