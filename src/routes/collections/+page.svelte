<script>
	import { onMount } from 'svelte';
	import {
		Collection,
		List,
		ListRow,
		ListRowImage,
		ListRowToggleTrailing,
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
