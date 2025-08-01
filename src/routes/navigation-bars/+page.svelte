<script>
	import { onMount } from 'svelte';
	import {
		List,
		ListRow,
		NavigationBar,
		NavigationBarLeading,
		NavigationBarSearchField,
		NavigationBarTrailing,
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

	let navigationBarProps = [
		{
			name: 'showBackground',
			description: 'Insert description here.',
			type: 'Boolean',
			defaultValues: 'false\ntrue'
		},
		{
			name: 'size',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: '"default"\n"large"'
		},
		{
			name: 'title',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: '"Title"'
		},
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

	let navigationBarLeadingProps = [
		{
			name: 'slot',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: '"leading"'
		},
		{
			name: 'state',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: '"enabled"\n"disabled"'
		},
		{
			name: 'symbol',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: '"arrow_back_ios"'
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

	let navigationBarSearchFieldProps = [
		{
			name: 'value',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: 'undefined'
		},
		{
			name: 'slot',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: '"search_field"'
		},
		{
			name: 'searchSymbol',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: '"search"'
		},
		{
			name: 'showPlaceholder',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: 'false\ntrue'
		},
		{
			name: 'placeholder',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: '"Search"'
		},
		{
			name: 'dictationSymbol',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: '"mic"'
		},
		{
			name: 'cancelSymbol',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: '"cancel"'
		},
		{
			name: 'cancelLabel',
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
			description: '',
			type: 'String',
			defaultValues: 'undefined'
		}
	];

	let navigationBarTrailingProps = [
		{
			name: 'slot',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: '"trailing-1"\n"trailing-2"\n"trailing-3"'
		},
		{
			name: 'state',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: '"enabled"\n"disabled"'
		},
		{
			name: 'type',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: '"symbol"\n"text"\n"text-emphasized"'
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

	let value = undefined;
</script>

<p>
	If you want your navigation bar component to stick to the top of the screen, you can set its <code
		>style</code
	>
	prop to <code>"position: sticky; top: 0px"</code>.
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
	<NavigationBar showBackground size="large" style="border-radius: 10px">
		<NavigationBarLeading slot="leading" />
		<NavigationBarTrailing slot="trailing-1" />
		<NavigationBarTrailing slot="trailing-2" />
		<NavigationBarTrailing slot="trailing-3" />
		<NavigationBarSearchField slot="search-field" bind:value />
	</NavigationBar>

	<List>
		<ListRow title="Search field value: {value}" />
	</List>
{:else if panel === 'code'}
	<Code {code} />
{:else}
	<div class="table-container">
		<code class="title3-emphasized">NavigationBar</code>
		<div class="table {elementClass}">
			<table>
				<tr class="headline">
					<td>Name</td>
					<td>Type</td>
					<td>Default values</td>
				</tr>
				{#each navigationBarProps as prop}
					<tr>
						<td><code>{prop.name}</code></td>
						<td>{prop.type}</td>
						<td><code>{prop.defaultValues}</code></td>
					</tr>
				{/each}
			</table>
		</div>
		<code class="title3-emphasized">NavigationBarLeading</code>
		<div class="table {elementClass}">
			<table>
				<tr class="headline">
					<td>Name</td>
					<td>Type</td>
					<td>Default values</td>
				</tr>
				{#each navigationBarLeadingProps as prop}
					<tr>
						<td><code>{prop.name}</code></td>
						<td>{prop.type}</td>
						<td><code>{prop.defaultValues}</code></td>
					</tr>
				{/each}
			</table>
		</div>
		<code class="title3-emphasized">NavigationBarSearchField</code>
		<div class="table {elementClass}">
			<table>
				<tr class="headline">
					<td>Name</td>
					<td>Type</td>
					<td>Default values</td>
				</tr>
				{#each navigationBarSearchFieldProps as prop}
					<tr>
						<td><code>{prop.name}</code></td>
						<td>{prop.type}</td>
						<td><code>{prop.defaultValues}</code></td>
					</tr>
				{/each}
			</table>
		</div>
		<code class="title3-emphasized">NavigationBarTrailing</code>
		<div class="table {elementClass}">
			<table>
				<tr class="headline">
					<td>Name</td>
					<td>Type</td>
					<td>Default values</td>
				</tr>
				{#each navigationBarTrailingProps as prop}
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
