<script>
	import { onMount } from 'svelte';
	import {
		RegularProgressIndicator,
		SmallProgressIndicator,
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

	let regularProgressIndicatorProps = [
		{
			name: 'showLabel',
			description: 'Insert description here.',
			type: 'Boolean',
			defaultValues: 'false\ntrue'
		},
		{
			name: 'label',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: '"Status…"'
		},
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

	let smallProgressIndicatorProps = [
		{
			name: 'showLabel',
			description: 'Insert description here.',
			type: 'Boolean',
			defaultValues: 'false\ntrue'
		},
		{
			name: 'label',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: '"Status…"'
		},
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

<p>Progress indicators let users know that your project is loading content.</p>
<SegmentedControl>
	<SegmentedControlButton state="selected" label="Preview" onPress={() => (panel = 'preview')} />
	<SegmentedControlButton label="Code" onPress={() => (panel = 'code')} />
	<SegmentedControlButton label="Props" onPress={() => (panel = 'props')} />
</SegmentedControl>
{#if panel === 'preview'}
	<RegularProgressIndicator showLabel />
{:else if panel === 'code'}
	<Code {code} />
{:else}
	<div class="table-container">
		<code class="title3-emphasized">RegularProgressIndicator</code>
		<div class="table {elementClass}">
			<table>
				<tr class="headline">
					<td>Name</td>
					<td>Type</td>
					<td>Default values</td>
				</tr>
				{#each regularProgressIndicatorProps as prop}
					<tr>
						<td><code>{prop.name}</code></td>
						<td>{prop.type}</td>
						<td><code>{prop.defaultValues}</code></td>
					</tr>
				{/each}
			</table>
		</div>
		<code class="title3-emphasized">SmallProgressIndicator</code>
		<div class="table {elementClass}">
			<table>
				<tr class="headline">
					<td>Name</td>
					<td>Type</td>
					<td>Default values</td>
				</tr>
				{#each smallProgressIndicatorProps as prop}
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
