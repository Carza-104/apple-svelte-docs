<script>
	import { onMount } from 'svelte';
	import { List, ListRow, SegmentedControl, SegmentedControlButton } from 'apple-svelte';
	import Code from '$lib/Code.svelte';
	import { code } from './code';

	let elementClass = 'default';

	onMount(() => {
		if (navigator.userAgent.includes('Win')) {
			elementClass = 'windows';
		}
	});

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

	let state = 1;
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
	<hr />
	<SegmentedControl>
		<SegmentedControlButton inputGroup="preview" state="selected" onPress={() => (state = 1)} />
		<SegmentedControlButton inputGroup="preview" onPress={() => (state = 2)} />
		<SegmentedControlButton inputGroup="preview" onPress={() => (state = 3)} />
	</SegmentedControl>

	{#if state === 1}
		<List>
			<ListRow title="First page" />
		</List>
	{:else if state === 2}
		<List>
			<ListRow title="Second page" />
		</List>
	{:else}
		<List>
			<ListRow title="Third page" />
		</List>
	{/if}
{:else if panel === 'code'}
	<Code {code} />
{:else}
	<div class="table-container">
		<code class="title3-emphasized">SegmentedControl</code>
		<div class="table {elementClass}">
			<table>
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
		<code class="title3-emphasized">SegmentedControlButton</code>
		<div class="table {elementClass}">
			<table>
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
