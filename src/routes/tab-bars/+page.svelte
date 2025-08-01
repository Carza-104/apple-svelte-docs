<script>
	import { onMount } from 'svelte';
	import {
		Version26SegmentedControl,
		Version26SegmentedControlButton,
		TabBar,
		TabBarButton
	} from 'apple-svelte';
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
	To actually make tab bar buttons work you can have them redirect the user to a separate page with
	the <code>behavior</code> prop set to <code>"hyperlink"</code>.
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
				<tbody>
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
				</tbody>
			</table>
		</div>
		<code class="title3-emphasized">TabBarButton</code>
		<div class="table {elementClass}">
			<table>
				<tbody>
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
				</tbody>
			</table>
		</div>
	</div>
{/if}
