<script>
	import Code from '$lib/Code.svelte';
	import { code } from './code';
</script>

<p>
	apple-svelte is a component library for Svelte based on Apple's Human Interface design language.
</p>
<p>
	To get started with apple-svelte, create a new <a
		href="https://kit.svelte.dev/docs/creating-a-project">Svelte project</a
	> (or open an existing one) and enter the following command into your terminal.
</p>
<Code title="Terminal" code="npm i apple-svelte" />
<p>You can now import and use apple-svelte components into your project.</p>
<p>
	Don't forget to include <a href="https://fonts.google.com/icons?icon.style=Rounded"
		>Material Symbols</a
	> or whatever symbol library you're using into your HTML head. You'll also need to import apple-svelte's
	stylesheet, as well as the components you're going to be using in your project.
</p>
<Code {code} />
<p>If the above syntax doesn't work, you can copy the stylesheet and paste it into your project.</p>
<p>
	Learn how to <a href="/colors">customize apple-svelte</a>.
</p>
