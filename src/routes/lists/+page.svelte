<script>
	import { onMount } from 'svelte';
	import {
		List,
		ListRow,
		ListRowButtonTrailing,
		ListRowDefaultTrailing,
		ListRowDisclosureTrailing,
		ListRowImage,
		ListRowStepperTrailing,
		ListRowToggleTrailing,
		SegmentedControl,
		SegmentedControlButton
	} from 'apple-svelte';
	import Code from '$lib/Code.svelte';
	import { code } from './code';

	let elementClass = 'default';

	onMount(() => {
		if (navigator.userAgent.includes('Win')) {
			elementClass = 'windows';
		}
	});

	let listProps = [
		{
			name: 'showHeader',
			description: 'Insert description here.',
			type: 'Boolean',
			defaultValues: 'false\ntrue'
		},
		{
			name: 'headerType',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: '"default"\n"plain"\n"prominent"'
		},
		{
			name: 'header',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: '"Header text"'
		},
		{
			name: 'disclosure',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: '"arrow_forward_ios"'
		},
		{
			name: 'showFooter',
			description: 'Insert description here.',
			type: 'Boolean',
			defaultValues: 'false\ntrue'
		},
		{
			name: 'footer',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: '"Footer text"'
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

	let listButtonRowProps = [
		{
			name: 'type',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: '"enabled"\n"destrustive"\n"disabled"'
		},
		{
			name: 'label',
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

	let listRowProps = [
		{
			name: 'height',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: '"regular"\n"tall"'
		},
		{
			name: 'showEditButton',
			description: 'Insert description here.',
			type: 'Boolean',
			defaultValues: 'false\ntrue'
		},
		{
			name: 'editButtonType',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: '"checkmark"\n"plus"\n"minus"'
		},
		{
			name: 'checkmarkEditButtonState',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: '"default"\n"selected"'
		},
		{
			name: 'checkmarkSymbol',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: '"done"'
		},
		{
			name: 'plusSymbol',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: '"add"'
		},
		{
			name: 'minusSymbol',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: '"remove"'
		},
		{
			name: 'title',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: '"Title"'
		},
		{
			name: 'showSubtitle',
			description: 'Insert description here.',
			type: 'Boolean',
			defaultValues: 'false\ntrue'
		},
		{
			name: 'subtitle',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: '"Subtitle"'
		},
		{
			name: 'id',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: 'undefined'
		},
		{
			name: 'checkmarkEditButtonId',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: 'undefined'
		},
		{
			name: 'onPlusPress',
			description: 'Insert description here.',
			type: 'Object',
			defaultValues: 'undefined'
		},
		{
			name: 'onMinusPress',
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

	let listRowButtonTrailingProps = [
		{
			name: 'slot',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: '"trailing"'
		},
		{
			name: 'label',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: '"Button"'
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

	let listRowDefaultTrailingProps = [
		{
			name: 'slot',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: '"trailing"'
		},
		{
			name: 'showDetail',
			description: 'Insert description here.',
			type: 'Boolean',
			defaultValues: 'false\ntrue'
		},
		{
			name: 'detail',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: '"Detail"'
		},
		{
			name: 'showSymbol',
			description: 'Insert description here.',
			type: 'Boolean',
			defaultValues: 'false\ntrue'
		},
		{
			name: 'symbol',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: '"star"'
		},
		{
			name: 'showInfo',
			description: 'Insert description here.',
			type: 'Boolean',
			defaultValues: 'false\ntrue'
		},
		{
			name: 'info',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: '"info"'
		},
		{
			name: 'showCheckmark',
			description: 'Insert description here.',
			type: 'Boolean',
			defaultValues: 'false\ntrue'
		},
		{
			name: 'checkmark',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: '"done"'
		},
		{
			name: 'showDisclosure',
			description: 'Insert description here.',
			type: 'Boolean',
			defaultValues: 'false\ntrue'
		},
		{
			name: 'disclosure',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: '"arrow_forward_ios"'
		},
		{
			name: 'id',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: 'undefined'
		},
		{
			name: 'onDetailPress',
			description: 'Insert description here.',
			type: 'Object',
			defaultValues: 'undefined'
		},
		{
			name: 'onSymbolPress',
			description: 'Insert description here.',
			type: 'Object',
			defaultValues: 'undefined'
		},
		{
			name: 'onInfoPress',
			description: 'Insert description here.',
			type: 'Object',
			defaultValues: 'undefined'
		},
		{
			name: 'onCheckmarkPress',
			description: 'Insert description here.',
			type: 'Object',
			defaultValues: 'undefined'
		},
		{
			name: 'onDisclosurePress',
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

	let listRowDisclosureTrailingProps = [
		{
			name: 'slot',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: '"trailing"'
		},
		{
			name: 'showDetail',
			description: 'Insert description here.',
			type: 'Boolean',
			defaultValues: 'false\ntrue'
		},
		{
			name: 'detail',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: '"Detail"'
		},
		{
			name: 'disclosure',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: '"arrow_forward_ios"'
		},
		{
			name: 'id',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: 'undefined'
		},
		{
			name: 'onDetailPress',
			description: 'Insert description here.',
			type: 'Object',
			defaultValues: 'undefined'
		},
		{
			name: 'onDisclosurePress',
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

	let listRowImageProps = [
		{
			name: 'slot',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: '"image"'
		},
		{
			name: 'type',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: '"fill"\n"circular"\n"rounded"\n"symbol"'
		},
		{
			name: 'image',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: 'undefined'
		},
		{
			name: 'imageAlt',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: '""'
		},
		{
			name: 'symbol',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: '"star"'
		},
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

	let listRowStepperTrailingProps = [
		{
			name: 'slot',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: '"trailing"'
		},
		{
			name: 'decrement',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: '"remove"'
		},
		{
			name: 'increment',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: '"add"'
		},
		{
			name: 'id',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: 'undefined'
		},
		{
			name: 'onDecrementPress',
			description: 'Insert description here.',
			type: 'Object',
			defaultValues: 'undefined'
		},
		{
			name: 'onIncrementPress',
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

	let listRowToggleTrailingProps = [
		{
			name: 'slot',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: '"trailing"'
		},
		{
			name: 'showAccentColor',
			description: 'Insert description here.',
			type: 'Boolean',
			defaultValues: 'false\ntrue'
		},
		{
			name: 'state',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: '"on"\n"off"'
		},
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

	let listTextFieldRowProps = [
		{
			name: 'value',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: 'undefined'
		},
		{
			name: 'title',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: '"Title"'
		},
		{
			name: 'placeholder',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: '"Value"'
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
</script>

<p>
	Lists are supposed to be wrapped around list rows and other components. For a better responsive
	layout, you can put lists inside a collection.
</p>
<SegmentedControl>
	<SegmentedControlButton state="selected" label="Preview" onPress={() => (panel = 'preview')} />
	<SegmentedControlButton label="Code" onPress={() => (panel = 'code')} />
	<SegmentedControlButton label="Props" onPress={() => (panel = 'props')} />
</SegmentedControl>
{#if panel === 'preview'}
	<List showHeader showFooter>
		<ListRow>
			<ListRowImage slot="image" type="symbol" />
			<ListRowButtonTrailing slot="trailing" />
		</ListRow>
		<ListRow>
			<ListRowImage slot="image" type="symbol" />
			<ListRowDefaultTrailing slot="trailing" showDetail showDisclosure />
		</ListRow>
		<ListRow>
			<ListRowImage slot="image" type="symbol" />
			<ListRowDisclosureTrailing slot="trailing" />
		</ListRow>
		<ListRow>
			<ListRowImage slot="image" type="symbol" />
			<ListRowStepperTrailing slot="trailing" />
		</ListRow>
		<ListRow>
			<ListRowImage slot="image" type="symbol" />
			<ListRowToggleTrailing slot="trailing" />
		</ListRow>
	</List>
{:else if panel === 'code'}
	<Code {code} />
{:else}
	<div class="table-container">
		<code class="title3-emphasized">List</code>
		<div class="table {elementClass}">
			<table>
				<tr class="headline">
					<td>Name</td>
					<td>Type</td>
					<td>Default values</td>
				</tr>
				{#each listProps as prop}
					<tr>
						<td><code>{prop.name}</code></td>
						<td>{prop.type}</td>
						<td><code>{prop.defaultValues}</code></td>
					</tr>
				{/each}
			</table>
		</div>
		<code class="title3-emphasized">ListButtonRow</code>
		<div class="table {elementClass}">
			<table>
				<tr class="headline">
					<td>Name</td>
					<td>Type</td>
					<td>Default values</td>
				</tr>
				{#each listButtonRowProps as prop}
					<tr>
						<td><code>{prop.name}</code></td>
						<td>{prop.type}</td>
						<td><code>{prop.defaultValues}</code></td>
					</tr>
				{/each}
			</table>
		</div>
		<code class="title3-emphasized">ListRow</code>
		<div class="table {elementClass}">
			<table>
				<tr class="headline">
					<td>Name</td>
					<td>Type</td>
					<td>Default values</td>
				</tr>
				{#each listRowProps as prop}
					<tr>
						<td><code>{prop.name}</code></td>
						<td>{prop.type}</td>
						<td><code>{prop.defaultValues}</code></td>
					</tr>
				{/each}
			</table>
		</div>
		<code class="title3-emphasized">ListRowButtonTrailing</code>
		<div class="table {elementClass}">
			<table>
				<tr class="headline">
					<td>Name</td>
					<td>Type</td>
					<td>Default values</td>
				</tr>
				{#each listRowButtonTrailingProps as prop}
					<tr>
						<td><code>{prop.name}</code></td>
						<td>{prop.type}</td>
						<td><code>{prop.defaultValues}</code></td>
					</tr>
				{/each}
			</table>
		</div>
		<code class="title3-emphasized">ListRowDefaultTrailing</code>
		<div class="table {elementClass}">
			<table>
				<tr class="headline">
					<td>Name</td>
					<td>Type</td>
					<td>Default values</td>
				</tr>
				{#each listRowDefaultTrailingProps as prop}
					<tr>
						<td><code>{prop.name}</code></td>
						<td>{prop.type}</td>
						<td><code>{prop.defaultValues}</code></td>
					</tr>
				{/each}
			</table>
		</div>
		<code class="title3-emphasized">ListRowDisclosureTrailing</code>
		<div class="table {elementClass}">
			<table>
				<tr class="headline">
					<td>Name</td>
					<td>Type</td>
					<td>Default values</td>
				</tr>
				{#each listRowDisclosureTrailingProps as prop}
					<tr>
						<td><code>{prop.name}</code></td>
						<td>{prop.type}</td>
						<td><code>{prop.defaultValues}</code></td>
					</tr>
				{/each}
			</table>
		</div>
		<code class="title3-emphasized">ListRowImage</code>
		<div class="table {elementClass}">
			<table>
				<tr class="headline">
					<td>Name</td>
					<td>Type</td>
					<td>Default values</td>
				</tr>
				{#each listRowImageProps as prop}
					<tr>
						<td><code>{prop.name}</code></td>
						<td>{prop.type}</td>
						<td><code>{prop.defaultValues}</code></td>
					</tr>
				{/each}
			</table>
		</div>
		<code class="title3-emphasized">ListRowStepperTrailing</code>
		<div class="table {elementClass}">
			<table>
				<tr class="headline">
					<td>Name</td>
					<td>Type</td>
					<td>Default values</td>
				</tr>
				{#each listRowStepperTrailingProps as prop}
					<tr>
						<td><code>{prop.name}</code></td>
						<td>{prop.type}</td>
						<td><code>{prop.defaultValues}</code></td>
					</tr>
				{/each}
			</table>
		</div>
		<code class="title3-emphasized">ListRowToggleTrailing</code>
		<div class="table {elementClass}">
			<table>
				<tr class="headline">
					<td>Name</td>
					<td>Type</td>
					<td>Default values</td>
				</tr>
				{#each listRowToggleTrailingProps as prop}
					<tr>
						<td><code>{prop.name}</code></td>
						<td>{prop.type}</td>
						<td><code>{prop.defaultValues}</code></td>
					</tr>
				{/each}
			</table>
		</div>
		<code class="title3-emphasized">ListTextFieldRow</code>
		<div class="table {elementClass}">
			<table>
				<tr class="headline">
					<td>Name</td>
					<td>Type</td>
					<td>Default values</td>
				</tr>
				{#each listTextFieldRowProps as prop}
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
		overflow-x: auto;
	}

	.windows::-webkit-scrollbar {
		display: none;
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
