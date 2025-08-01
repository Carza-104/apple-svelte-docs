<script>
	import { onMount } from 'svelte';
	import {
		Version26Button,
		Version26SegmentedControl,
		Version26SegmentedControlButton,
		Version26Sidebar,
		Version26SidebarNavigationBar,
		Version26SidebarNavigationBarLeading,
		Version26SidebarNavigationBarTrailing,
		Version26SidebarSection,
		Version26SidebarSectionAddItemButton,
		Version26SidebarSectionItem
	} from 'apple-svelte';
	import Code from '$lib/Code.svelte';
	import { code } from './code';

	let elementClass = 'default';

	onMount(() => {
		if (navigator.userAgent.includes('Win')) {
			elementClass = 'windows';
		}
	});

	let sidebarProps = [
		{
			name: 'state',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: '"default"\n"hidden"'
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

	let sidebarNavigationBarProps = [
		{
			name: 'scrollPosition',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: '"top"\n"lower"'
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

	let sidebarNavigationBarLeadingProps = [
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
			name: 'type',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: '"symbol"\n"label"\n"label-emphasized"'
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

	let sidebarNavigationBarTrailingProps = [
		{
			name: 'slot',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: '"trailing"'
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
			defaultValues: '"symbol"\n"label"\n"label-emphasized"'
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

	let sidebarSectionProps = [
		{
			name: 'showHeading',
			description: 'Insert description here.',
			type: 'Boolean',
			defaultValues: 'false\ntrue'
		},
		{
			name: 'heading',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: '"Section 1"'
		},
		{
			name: 'state',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: '"open"\n"closed"'
		},
		{
			name: 'symbol',
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
			name: 'style',
			description: '',
			type: 'String',
			defaultValues: 'undefined'
		}
	];

	let sidebarSectionAddItemButtonProps = [
		{
			name: 'symbol',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: '"add"'
		},
		{
			name: 'title',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: '"Add Item"'
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

	let sidebarSectionItemProps = [
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
			defaultValues: '"sidebar-section-item"'
		},
		{
			name: 'state',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: '"default"\n"selected"\n"selected-secondary"'
		},
		{
			name: 'indentLevel',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: '"0"\n"1"\n"2"\n"3"\n"4"'
		},
		{
			name: 'showImage',
			description: 'Insert description here.',
			type: 'Boolean',
			defaultValues: 'false\ntrue'
		},
		{
			name: 'imageType',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: '"symbol"\n"bitmap"\n"collection"'
		},
		{
			name: 'symbol',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: '"star"'
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
			name: 'showTrailingSymbol',
			description: 'Insert description here.',
			type: 'Boolean',
			defaultValues: 'false\ntrue'
		},
		{
			name: 'trailingSymbol',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: '"select"'
		},
		{
			name: 'showDisclosure',
			description: 'Insert description here.',
			type: 'Boolean',
			defaultValues: 'false\ntrue'
		},
		{
			name: 'disclosureState',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: '"open"\n"closed"'
		},
		{
			name: 'openDisclosure',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: '"keyboard_arrow_down"'
		},
		{
			name: 'closedDisclosure',
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
			name: 'onPress',
			description: 'Insert description here.',
			type: 'Object',
			defaultValues: 'undefined'
		},
		{
			name: 'onTrailingSymbolPress',
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

	let state = undefined;

	function handlePress() {
		if (state === 'default') {
			state = 'hidden';
		} else {
			state = 'default';
		}
	}
</script>

<p>If you can, avoid using sidebars on mobile devices.</p>
<p>
	If you use a sidebar component, you'll also need to include logic to hide or show it dynamically.
	You can simply bind the <code>state</code> prop to a variable to better control when the sidebar
	is shown. Check out
	<a href="https://github.com/Carza-104/apple-svelte-docs/blob/main/src/routes/+layout.svelte"
		>GitHub</a
	> to see how this is implemented.
</p>
<p>
	To actually make sidebar section items work you can have them redirect the user to a separate page
	with the <code>behavior</code> prop set to <code>"hyperlink"</code>.
</p>
<p>
	It's recommended that you put your sidebar code outside the main div where your content lives. You
	should also set said div's <code>display</code> property to <code>flex</code>.
</p>
<p>
	You can nest sidebar section items inside each other as long as their <code>showDisclosure</code>
	prop is set to <code>true</code>.
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
	{#if state === 'default'}
		<Version26Button symbol="visibility" label="Hide sidebar" onPress={handlePress} />
	{:else}
		<Version26Button symbol="visibility" label="Show sidebar" onPress={handlePress} />
	{/if}

	<Version26Sidebar
		bind:state
		style="position: unset; background: var(--materials-regular); border-radius: 10px; z-index: 0"
	>
		<Version26SidebarNavigationBar>
			<Version26SidebarNavigationBarLeading slot="leading" />
			<Version26SidebarNavigationBarTrailing slot="trailing" />
		</Version26SidebarNavigationBar>
		<Version26SidebarSection showHeading heading="Home">
			<Version26SidebarSectionItem inputGroup="preview" showImage showTrailingSymbol />
			<Version26SidebarSectionItem showImage showDisclosure>
				<Version26SidebarSectionItem indentLevel="1" showImage showDisclosure>
					<Version26SidebarSectionItem indentLevel="2" showImage showDisclosure>
						<Version26SidebarSectionItem indentLevel="3" showImage showDisclosure>
							<Version26SidebarSectionItem
								inputGroup="preview"
								indentLevel="4"
								showImage
								showTrailingSymbol
							/>
						</Version26SidebarSectionItem>
					</Version26SidebarSectionItem>
				</Version26SidebarSectionItem>
			</Version26SidebarSectionItem>
			<Version26SidebarSectionAddItemButton />
		</Version26SidebarSection>
	</Version26Sidebar>
{:else if panel === 'code'}
	<Code {code} />
{:else}
	<div class="table-container">
		<code class="title3-emphasized">Version26Sidebar</code>
		<div class="table {elementClass}">
			<table>
				<tr class="headline">
					<td>Name</td>
					<td>Type</td>
					<td>Default values</td>
				</tr>
				{#each sidebarProps as prop}
					<tr>
						<td><code>{prop.name}</code></td>
						<td>{prop.type}</td>
						<td><code>{prop.defaultValues}</code></td>
					</tr>
				{/each}
			</table>
		</div>
		<code class="title3-emphasized">Version26SidebarNavigationBar</code>
		<div class="table {elementClass}">
			<table>
				<tr class="headline">
					<td>Name</td>
					<td>Type</td>
					<td>Default values</td>
				</tr>
				{#each sidebarNavigationBarProps as prop}
					<tr>
						<td><code>{prop.name}</code></td>
						<td>{prop.type}</td>
						<td><code>{prop.defaultValues}</code></td>
					</tr>
				{/each}
			</table>
		</div>
		<code class="title3-emphasized">Version26SidebarNavigationBarLeading</code>
		<div class="table {elementClass}">
			<table>
				<tr class="headline">
					<td>Name</td>
					<td>Type</td>
					<td>Default values</td>
				</tr>
				{#each sidebarNavigationBarLeadingProps as prop}
					<tr>
						<td><code>{prop.name}</code></td>
						<td>{prop.type}</td>
						<td><code>{prop.defaultValues}</code></td>
					</tr>
				{/each}
			</table>
		</div>
		<code class="title3-emphasized">Version26SidebarNavigationBarTrailing</code>
		<div class="table {elementClass}">
			<table>
				<tr class="headline">
					<td>Name</td>
					<td>Type</td>
					<td>Default values</td>
				</tr>
				{#each sidebarNavigationBarTrailingProps as prop}
					<tr>
						<td><code>{prop.name}</code></td>
						<td>{prop.type}</td>
						<td><code>{prop.defaultValues}</code></td>
					</tr>
				{/each}
			</table>
		</div>
		<code class="title3-emphasized">Version26SidebarSection</code>
		<div class="table {elementClass}">
			<table>
				<tr class="headline">
					<td>Name</td>
					<td>Type</td>
					<td>Default values</td>
				</tr>
				{#each sidebarSectionProps as prop}
					<tr>
						<td><code>{prop.name}</code></td>
						<td>{prop.type}</td>
						<td><code>{prop.defaultValues}</code></td>
					</tr>
				{/each}
			</table>
		</div>
		<code class="title3-emphasized">Version26SidebarSectionAddItemButton</code>
		<div class="table {elementClass}">
			<table>
				<tr class="headline">
					<td>Name</td>
					<td>Type</td>
					<td>Default values</td>
				</tr>
				{#each sidebarSectionAddItemButtonProps as prop}
					<tr>
						<td><code>{prop.name}</code></td>
						<td>{prop.type}</td>
						<td><code>{prop.defaultValues}</code></td>
					</tr>
				{/each}
			</table>
		</div>
		<code class="title3-emphasized">Version26SidebarSectionItem</code>
		<div class="table {elementClass}">
			<table>
				<tr class="headline">
					<td>Name</td>
					<td>Type</td>
					<td>Default values</td>
				</tr>
				{#each sidebarSectionItemProps as prop}
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
