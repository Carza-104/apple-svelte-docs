<script>
	import { onMount } from 'svelte';
	import {
		ActionSheet,
		ActionSheetButton,
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

	let state = 'hidden';
</script>

<p>Action sheets are modal views that offer multiple choices.</p>
<p>
	You can bind the action sheet's <code>state</code> prop to a variable to better control when the component
	is shown.
</p>
<p>As all modal views, action sheets can be hidden by pressing outside them or with the Esc key.</p>
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
	<Version26Button
		symbol="visibility"
		label="Show action sheet"
		onPress={() => (state = 'default')}
	/>

	<ActionSheet bind:state showHeader showDescription showCancelButton>
		<ActionSheetButton />
		<ActionSheetButton />
		<ActionSheetButton />
	</ActionSheet>
{:else if panel === 'code'}
	<Code {code} />
{:else}
	<div class="table-container">
		<code class="title3-emphasized">ActionSheet</code>
		<div class="table {elementClass}">
			<table>
				<tbody>
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
				</tbody>
			</table>
		</div>
		<code class="title3-emphasized">ActionSheetButton</code>
		<div class="table {elementClass}">
			<table>
				<tbody>
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
				</tbody>
			</table>
		</div>
	</div>
{/if}
