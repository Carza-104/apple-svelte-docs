<script>
	import { onMount } from 'svelte';
	import { ListRow, ListRowDefaultTrailing } from 'apple-svelte';
	import Prism from 'prismjs';

	export let title = '+page.svelte';
	export let code = 'npm i apple-svelte';

	export let id = undefined;
	export let style = undefined;

	let symbol = 'stack';
	function copy() {
		navigator.clipboard.writeText(code);
		symbol = 'done';
		setTimeout(() => {
			symbol = 'stack';
		}, 1000);
	}

	let elementClass = 'default';

	onMount(() => {
		if (navigator.userAgent.includes('Win')) {
			elementClass = 'windows';
		}
	});
</script>

<div class="code" {id} {style}>
	<ListRow {title} style="color: var(--labels-secondary)">
		<ListRowDefaultTrailing slot="trailing" showSymbol {symbol} onSymbolPress={copy} />
	</ListRow>
	<div class="field {elementClass}">
		<code class="body">{@html Prism.highlight(code, Prism.languages.markup, 'markup')}</code>
	</div>
</div>

<style>
	.code {
		background: var(--bg-grouped-secondary);
		border-radius: 10px;
		overflow: hidden;
		tab-size: 4;
	}

	.field {
		overflow-x: auto;
		padding: 11px 16px;
	}

	.windows::-webkit-scrollbar {
		display: none;
	}

	code {
		user-select: text;
		-webkit-user-select: text;
		white-space: pre;
	}
</style>
