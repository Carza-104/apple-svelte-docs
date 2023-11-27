<script>
	import { onMount } from 'svelte';
	import { SegmentedControl, SegmentedControlButton, TabBar, TabBarButton } from 'apple-svelte';
	import Code from '$lib/Code.svelte';
	import { code } from './code';

	let elementClass = 'default';

	onMount(() => {
		if (navigator.userAgent.includes('Win')) {
			elementClass = 'windows';
		}
	});

	let tabBarProps = [
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

	let tabBarButtonProps = [
		{
			name: 'behavior',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: '"default"\n"hyperlink"'
		},
		{
			name: 'href',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: '"/"'
		},
		{
			name: 'inputGroup',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: '"tab-bar-button"'
		},
		{
			name: 'state',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: '"default"\n"selected"'
		},
		{
			name: 'symbol',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: '"star"'
		},
		{
			name: 'label',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: '"Tab"'
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

<p>If you can, avoid using tab bars on larger screens.</p>
<p>
	To actually make tab bar buttons work, you can either have them redirect the user to a separate
	page and set each tab bar button's <code>state</code> prop to <code>selected</code> for every page
	or you can use a similar approach as the one used in the sidebar example.
</p>
<SegmentedControl>
	<SegmentedControlButton state="selected" label="Preview" onPress={() => (panel = 'preview')} />
	<SegmentedControlButton label="Code" onPress={() => (panel = 'code')} />
	<SegmentedControlButton label="Props" onPress={() => (panel = 'props')} />
</SegmentedControl>
{#if panel === 'preview'}
	<hr />
	<TabBar style="border-radius: 10px; position: unset">
		<TabBarButton />
		<TabBarButton />
		<TabBarButton />
	</TabBar>
{:else if panel === 'code'}
	<Code {code} />
{:else}
	<div class="table-container">
		<code class="title3-emphasized">TabBar</code>
		<div class="table {elementClass}">
			<table>
				<tr class="headline">
					<td>Name</td>
					<td>Type</td>
					<td>Default values</td>
				</tr>
				{#each tabBarProps as prop}
					<tr>
						<td><code>{prop.name}</code></td>
						<td>{prop.type}</td>
						<td><code>{prop.defaultValues}</code></td>
					</tr>
				{/each}
			</table>
		</div>
		<code class="title3-emphasized">TabBarButton</code>
		<div class="table {elementClass}">
			<table>
				<tr class="headline">
					<td>Name</td>
					<td>Type</td>
					<td>Default values</td>
				</tr>
				{#each tabBarButtonProps as prop}
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
