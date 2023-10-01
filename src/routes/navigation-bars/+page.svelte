<script>
	import {
		NavigationBar,
		NavigationBarLeading,
		NavigationBarSearchField,
		NavigationBarTrailing,
		SegmentedControl,
		SegmentedControlButton
	} from 'apple-svelte';
	import Code from '$lib/Code.svelte';
	import { code } from './code';

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
</script>

<p>
	If you want your navigation bar component to stick to the top of the screen, you can set its <code
		>style</code
	>
	prop to <code>"position: sticky; top: 0px"</code>.
</p>
<SegmentedControl>
	<SegmentedControlButton state="selected" label="Preview" onPress={() => (panel = 'preview')} />
	<SegmentedControlButton label="Code" onPress={() => (panel = 'code')} />
	<SegmentedControlButton label="Props" onPress={() => (panel = 'props')} />
</SegmentedControl>
{#if panel === 'preview'}
	<NavigationBar showBackground size="large" style="border-radius: 10px">
		<NavigationBarLeading slot="leading" />
		<NavigationBarTrailing slot="trailing-1" />
		<NavigationBarTrailing slot="trailing-2" />
		<NavigationBarTrailing slot="trailing-3" />
		<NavigationBarSearchField slot="search-field" />
	</NavigationBar>
{:else if panel === 'code'}
	<Code {code} />
{:else}
	<div class="table-container">
		<code class="title3-emphasized">NavigationBar</code>
		<div class="table">
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
		<div class="table">
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
		<div class="table">
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
		<div class="table">
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

<style>
	.table-container {
		display: flex;
		flex-direction: column;
		gap: 24px;
	}

	.table {
		background: var(--bg-grouped-secondary);
		border-radius: 10px;
		overflow: scroll;
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
