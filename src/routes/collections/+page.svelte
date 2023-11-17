<script>
	import { onMount } from 'svelte';
	import {
		Collection,
		List,
		ListRow,
		ListRowImage,
		ListRowToggleTrailing,
		SegmentedControl,
		SegmentedControlButton
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

	let panel = 'preview';
</script>

<p>Collections are simple layout components that work best when wrapped around multiple lists.</p>
<p>On smaller screens, collections automatically switch from a grid layout to a row one.</p>
<SegmentedControl>
	<SegmentedControlButton state="selected" label="Preview" onPress={() => (panel = 'preview')} />
	<SegmentedControlButton label="Code" onPress={() => (panel = 'code')} />
	<SegmentedControlButton label="Props" onPress={() => (panel = 'props')} />
</SegmentedControl>
{#if panel === 'preview'}
	<hr />
	<Collection>
		<List showHeader showFooter>
			<ListRow>
				<ListRowImage slot="image" type="symbol" />
				<ListRowToggleTrailing slot="trailing" showAccentColor state="default" />
			</ListRow>
			<ListRow>
				<ListRowImage slot="image" type="symbol" />
				<ListRowToggleTrailing slot="trailing" showAccentColor />
			</ListRow>
		</List>
		<List showHeader showFooter>
			<ListRow>
				<ListRowImage slot="image" type="symbol" />
				<ListRowToggleTrailing slot="trailing" state="default" />
			</ListRow>
			<ListRow>
				<ListRowImage slot="image" type="symbol" />
				<ListRowToggleTrailing slot="trailing" />
			</ListRow>
		</List>
	</Collection>
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
	hr {
		background: var(--separators-non-opaque);
		border: unset;
		height: 0.5px;
		margin: 0px -16px;
	}

	.table {
		background: var(--bg-grouped-secondary);
		border-radius: 10px;
		overflow-x: auto;
	}

	.windows::-webkit-scrollbar {
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
