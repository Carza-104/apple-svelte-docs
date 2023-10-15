<script>
	import { ActionSheetButton, SegmentedControl, SegmentedControlButton } from 'apple-svelte';
	import Code from '$lib/Code.svelte';
	import { code } from './code';

	let actionSheetProps = [
		{
			name: 'state',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: '"default"\n"hidden"'
		},
		{
			name: 'showHeader',
			description: 'Insert description here.',
			type: 'Boolean',
			defaultValues: 'false\ntrue'
		},
		{
			name: 'headerTitle',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: '"Header Title"'
		},
		{
			name: 'showDescription',
			description: 'Insert description here.',
			type: 'Boolean',
			defaultValues: 'false\ntrue'
		},
		{
			name: 'headerDescription',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: '"A message should be a short, complete sentence."'
		},
		{
			name: 'showCancelButton',
			description: 'Insert description here.',
			type: 'Boolean',
			defaultValues: 'false\ntrue'
		},
		{
			name: 'cancelButtonLabel',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: '"Cancel"'
		},
		{
			name: 'id',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: 'undefined'
		},
		{
			name: 'onCancelPress',
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

	let actionSheetButtonProps = [
		{
			name: 'state',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: '"default"\n"destructive"\n"disabled"'
		},
		{
			name: 'label',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: '"Action"'
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

	let inputElement = undefined;

	function handlePress() {
		inputElement.blur();
	}
</script>

<p>Action sheets are modal views that offer multiple choices.</p>
<p>
	You can bind the action sheet's <code>state</code> prop to a variable to better control when the component
	is shown.
</p>
<SegmentedControl>
	<SegmentedControlButton state="selected" label="Preview" onPress={() => (panel = 'preview')} />
	<SegmentedControlButton label="Code" onPress={() => (panel = 'code')} />
	<SegmentedControlButton label="Props" onPress={() => (panel = 'props')} />
</SegmentedControl>
{#if panel === 'preview'}
	<div class="action-sheet">
		<div class="buttons">
			<div class="header">
				<p class="footnote-emphasized">Header Title</p>
				<p class="footnote">A message should be a short, complete sentence.</p>
			</div>
			<ActionSheetButton />
			<ActionSheetButton state="destructive" />
			<ActionSheetButton state="disabled" />
		</div>
		<button bind:this={inputElement} class="cancel" on:click={handlePress}>
			<p class="body-emphasized">Cancel</p>
		</button>
	</div>
{:else if panel === 'code'}
	<Code {code} />
{:else}
	<div class="table-container">
		<code class="title3-emphasized">ActionSheet</code>
		<div class="table">
			<table>
				<tr class="headline">
					<td>Name</td>
					<td>Type</td>
					<td>Default values</td>
				</tr>
				{#each actionSheetProps as prop}
					<tr>
						<td><code>{prop.name}</code></td>
						<td>{prop.type}</td>
						<td><code>{prop.defaultValues}</code></td>
					</tr>
				{/each}
			</table>
		</div>
		<code class="title3-emphasized">ActionSheetButton</code>
		<div class="table">
			<table>
				<tr class="headline">
					<td>Name</td>
					<td>Type</td>
					<td>Default values</td>
				</tr>
				{#each actionSheetButtonProps as prop}
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
	.action-sheet {
		display: flex;
		flex: 1;
		flex-direction: column;
		gap: 8px;
		max-width: 377px;
	}

	.buttons {
		border-radius: 14px;
		overflow: hidden;
	}

	.buttons :first-child {
		border-top: unset;
	}

	.header {
		align-items: center;
		backdrop-filter: blur(40px);
		background: var(--materials-regular);
		display: flex;
		flex-direction: column;
		gap: 4px;
		padding: 12px 16px 12.5px;
		-webkit-backdrop-filter: blur(40px);
	}

	.footnote-emphasized {
		color: var(--labels-secondary);
	}

	.footnote {
		color: var(--labels-secondary);
	}

	.cancel {
		align-items: center;
		border-radius: 14px;
		backdrop-filter: blur(40px);
		background: var(--materials-regular);
		display: flex;
		height: 56px;
		justify-content: center;
		-webkit-backdrop-filter: blur(40px);
	}

	.body-emphasized {
		color: var(--colors-accent);
		width: 56px;
	}

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

	button:active,
	button:focus {
		background: linear-gradient(var(--press-overlay) 0%, var(--press-overlay)),
			var(--materials-regular);
	}
</style>
