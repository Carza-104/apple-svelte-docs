<script>
	import { onMount } from 'svelte';
	import {
		Version26Alert,
		Version26AlertButton,
		Version26AlertTextField,
		Version26Button,
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

	let alertProps = [
		{
			name: 'state',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: '"default"\n"hidden"'
		},
		{
			name: 'title',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: '"Title"'
		},
		{
			name: 'showDescription',
			description: 'Insert description here.',
			type: 'Boolean',
			defaultValues: 'false\ntrue'
		},
		{
			name: 'description',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: '"A message should be a short, complete sentence."'
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

	let alertButtonProps = [
		{
			name: 'slot',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: '"button-1"\n"button-2"\n"button-3"'
		},
		{
			name: 'state',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: '"primary"\n"secondary"\n"destructive"'
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
			description: 'Insert description here.',
			type: 'String',
			defaultValues: 'undefined'
		}
	];

	let alertTextFieldProps = [
		{
			name: 'slot',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: '"text-field"'
		},
		{
			name: 'value',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: 'undefined'
		},
		{
			name: 'placeholder',
			description: 'Insert description here.',
			type: 'String',
			defaultValues: '"Placeholder"'
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

	export let state = 'hidden';
</script>

<p>
	Alert components give users critical information (for example, warning them about their action)
	right away.
</p>
<p>
	You can bind the alert's <code>state</code> prop to a variable to better control when the component
	is shown.
</p>
<p>As all modal views, action sheets can be hidden by pressing outside them or with the Esc key.</p>
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
	<Version26Button symbol="visibility" label="Show alert" onPress={() => (state = 'default')} />

	<Version26Alert bind:state showDescription>
		<Version26AlertTextField slot="text-field" />
		<Version26AlertButton slot="button-1" state="primary" />
		<Version26AlertButton slot="button-2" state="secondary" />
		<Version26AlertButton slot="button-3" state="destructive" />
	</Version26Alert>
{:else if panel === 'code'}
	<Code {code} />
{:else}
	<div class="table-container">
		<code class="title3-emphasized">Version26Alert</code>
		<div class="table {elementClass}">
			<table>
				<tr class="headline">
					<td>Name</td>
					<td>Type</td>
					<td>Default values</td>
				</tr>
				{#each alertProps as prop}
					<tr>
						<td><code>{prop.name}</code></td>
						<td>{prop.type}</td>
						<td><code>{prop.defaultValues}</code></td>
					</tr>
				{/each}
			</table>
		</div>
		<code class="title3-emphasized">Version26AlertButton</code>
		<div class="table {elementClass}">
			<table>
				<tr class="headline">
					<td>Name</td>
					<td>Type</td>
					<td>Default values</td>
				</tr>
				{#each alertButtonProps as prop}
					<tr>
						<td><code>{prop.name}</code></td>
						<td>{prop.type}</td>
						<td><code>{prop.defaultValues}</code></td>
					</tr>
				{/each}
			</table>
		</div>
		<code class="title3-emphasized">Version26AlertTextField</code>
		<div class="table {elementClass}">
			<table>
				<tr class="headline">
					<td>Name</td>
					<td>Type</td>
					<td>Default values</td>
				</tr>
				{#each alertTextFieldProps as prop}
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
