<script>
	import Code from '$lib/Code.svelte';
	import { code } from './code';

	let text = [
		{ name: 'Large title', code: 'large-title' },
		{ name: 'Large title emphasized', code: 'large-title-emphasized' },
		{ name: 'Title 1', code: 'title1' },
		{ name: 'Title 1 emphasized', code: 'title1-emphasized' },
		{ name: 'Title 2', code: 'title2' },
		{ name: 'Title 2 emphasized', code: 'title2-emphasized' },
		{ name: 'Title 3', code: 'title3' },
		{ name: 'Title 3 emphasized', code: 'title3-emphasized' },
		{ name: 'Headline', code: 'headline' },
		{ name: 'Headline italic', code: 'headline-italic' },
		{ name: 'Body', code: 'body' },
		{ name: 'Body emphasized', code: 'body-emphasized' },
		{ name: 'Body italic', code: 'body-italic' },
		{ name: 'Body emphasized italic', code: 'body-emphasized-italic' },
		{ name: 'Callout', code: 'callout' },
		{ name: 'Callout emphasized', code: 'callout-emphasized' },
		{ name: 'Callout italic', code: 'callout-italic' },
		{ name: 'Callout emphasized italic', code: 'callout-emphasized-italic' },
		{ name: 'Subheadline', code: 'subheadline' },
		{ name: 'Subheadline emphasized', code: 'subheadline-emphasized' },
		{ name: 'Subheadline italic', code: 'subheadline-italic' },
		{ name: 'Subheadline emphasized italic', code: 'subheadline-emphasized-italic' },
		{ name: 'Footnote', code: 'footnote' },
		{ name: 'Footnote emphasized', code: 'footnote-emphasized' },
		{ name: 'Footnote italic', code: 'footnote-italic' },
		{ name: 'Footnote emphasized italic', code: 'footnote-emphasized-italic' },
		{ name: 'Caption 1', code: 'caption1' },
		{ name: 'Caption 1 emphasized', code: 'caption1-emphasized' },
		{ name: 'Caption 1 italic', code: 'caption1-italic' },
		{ name: 'Caption 1 emphasized italic', code: 'caption1-emphasized-italic' },
		{ name: 'Caption 2', code: 'caption2' },
		{ name: 'Caption 2 emphasized', code: 'caption2-emphasized' },
		{ name: 'Caption 2 italic', code: 'caption2-italic' },
		{ name: 'Caption 2 emphasized italic', code: 'caption2-emphasized-italic' }
	];
</script>

<p>
	apple-svelte's font stack supports system fonts on most platforms. If you wish to change this, you
	can edit the <code>--sans-serif-font-family</code> and <code>--monospace-font-family</code> variables.
</p>
<Code {code} />
<p>
	If you're using a third-party font, make sure to include it in your HTML head. Below is a list of
	classes you can set text in your project to.
</p>
<div class="table">
	<table>
		<tr class="headline">
			<td>Name</td>
			<td>Class</td>
		</tr>
		{#each text as text}
			<tr>
				<td class={text.code}>{text.name}</td>
				<td><code>{text.code}</code></td>
			</tr>
		{/each}
	</table>
</div>

<style>
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
