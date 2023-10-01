<script>
	import Code from '$lib/Code.svelte';
	import { code } from './code';
</script>

<p>
	apple-svelte uses <a href="https://fonts.google.com/icons?icon.style=Rounded">Material Symbols</a>
	by default, but it also supports third-party symbol libraries. If you wish to use
	<a href="https://developer.apple.com/sf-symbols/">SF Symbols</a>, you can use Apple's SF Pro Icons
	font but it's not recommended as it's against Apple's license agreement. You could also copy and
	paste glyphs from the SF Symbols app but it doesn't work well across all platforms.
</p>
<p>If you use a third-party symbol library, don't forget to load the font into your HTML head.</p>
<Code {code} />
<p>
	Since not all libraries provide consistently sized symbols, you can edit the <code
		>--small-symbol-font-size-multiplier</code
	>, <code>--medium-symbol-font-size-multiplier</code>, and
	<code>--large-symbol-font-size-multiplier</code> variables to fix this.
</p>
