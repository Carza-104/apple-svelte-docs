<script>
	import { page } from '$app/stores';
</script>

<div>
	<h1 class="large-title-emphasized">Something went wrong!</h1>
	<h4 class="title3-emphasized">{$page.status} error: {$page.error.message.toLowerCase()}.</h4>
</div>
