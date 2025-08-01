<script>
	import { onMount } from 'svelte';
	import {
		IOS26SegmentedControl,
		IOS26SegmentedControlButton,
		IOS26Toolbar,
		IOS26ToolbarButton
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
<IOS26SegmentedControl>
	<IOS26SegmentedControlButton
		state="selected"
		label="Preview"
		onPress={() => (panel = 'preview')}
	/>
	<IOS26SegmentedControlButton label="Code" onPress={() => (panel = 'code')} />
	<IOS26SegmentedControlButton label="Props" onPress={() => (panel = 'props')} />
</IOS26SegmentedControl>
{#if panel === 'preview'}
	<hr />
	<div>
		<IOS26Toolbar style="border-radius: 10px; position: unset; width: 100%">
			<IOS26ToolbarButton />
			<IOS26ToolbarButton />
			<IOS26ToolbarButton />
		</IOS26Toolbar>
	</div>
{:else if panel === 'code'}
	<Code {code} />
{:else}
	<div class="table-container">
		<code class="title3-emphasized">IOS26Toolbar</code>
		<div class="table {elementClass}">
			<table>
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
			</table>
		</div>
		<code class="title3-emphasized">IOS26ToolbarButton</code>
		<div class="table {elementClass}">
			<table>
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
			</table>
		</div>
	</div>
{/if}

<style>
	div {
		background-image: url('https://i.imgur.com/IZXdb9Z.jpeg');
		background-size: cover;
		border-radius: 26px;
		display: flex;
		padding: 16px;
		min-width: 50%;
	}
</style>
