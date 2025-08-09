<script>
	import { onMount } from 'svelte';
	import {
		Version26SegmentedControl,
		Version26SegmentedControlButton,
		Version26Toolbar,
		Version26ToolbarButton
	} from 'apple-svelte';
	import Code from '$lib/Code.svelte';
	import { code } from './code';

	let elementClass = 'default';

	onMount(() => {
		if (navigator.userAgent.includes('Win')) {
			elementClass = 'windows';
		}
	});

	let toolbarProps = [
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

	let toolbarButtonProps = [
		{
			name: 'type',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: '"symbol"\n"label"'
		},
		{
			name: 'symbol',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: '"select"'
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
			description: '',
			type: 'String',
			defaultValues: 'undefined'
		}
	];

	let panel = 'preview';
</script>

<p>If you can, avoid using toolbars on larger screens.</p>
<p>
	Toolbar buttons are very straightforward: you can declare a function and have them call it when
	pressed.
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
	<div class="preview">
		<Version26Toolbar style="border-radius: 10px; position: unset; width: 100%">
			<Version26ToolbarButton />
			<Version26ToolbarButton />
			<Version26ToolbarButton />
		</Version26Toolbar>
	</div>
{:else if panel === 'code'}
	<Code {code} />
{:else}
	<div class="table-container">
		<code class="title3-emphasized">Version26Toolbar</code>
		<div class="table {elementClass}">
			<table>
				<tbody>
					<tr class="headline">
						<td>Name</td>
						<td>Type</td>
						<td>Default values</td>
					</tr>
					{#each toolbarProps as prop}
						<tr>
							<td><code>{prop.name}</code></td>
							<td>{prop.type}</td>
							<td><code>{prop.defaultValues}</code></td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
		<code class="title3-emphasized">Version26ToolbarButton</code>
		<div class="table {elementClass}">
			<table>
				<tbody>
					<tr class="headline">
						<td>Name</td>
						<td>Type</td>
						<td>Default values</td>
					</tr>
					{#each toolbarButtonProps as prop}
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

<style>
	.preview {
		background-image: url('https://i.imgur.com/IZXdb9Z.jpeg');
		background-size: cover;
		border-radius: 26px;
		display: flex;
		padding: 16px;
		min-width: 50%;
	}
</style>
