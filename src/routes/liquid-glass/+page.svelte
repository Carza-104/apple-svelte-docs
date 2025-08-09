<script>
	import {
		Collection,
		Version26List,
		Version26ListRow,
		Version26ListRowDefaultTrailing
	} from 'apple-svelte';
	import Code from '$lib/Code.svelte';
	import { code } from './code';
</script>

<p>
	To simulate Liquid Glass, apple-svelte applies background distortion on Blink browsers. To use
	this in your SvelteKit project, you have to include the following code in your app.html file:
</p>
<Code title="app.html" {code} />
