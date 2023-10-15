<script>
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
</script>

<div class="code" {id} {style}>
	<ListRow {title} style="color: var(--labels-secondary)">
		<ListRowDefaultTrailing slot="trailing" showSymbol {symbol} onSymbolPress={copy} />
	</ListRow>
	<div class="field">
		<code class="body">{@html Prism.highlight(code, Prism.languages.markup, 'markup')}</code>
	</div>
</div>

<style>
	.code {
		background: var(--bg-grouped-secondary);
		border-radius: 10px;
		overflow: hidden;
	}

	.field {
		overflow-x: auto;
		padding: 11px 16px;
	}

	.field::-webkit-scrollbar {
		display: none;
	}

	code {
		white-space: pre;
	}
</style>
