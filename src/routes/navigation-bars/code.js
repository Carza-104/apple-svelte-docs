export let code = `<script>
    import {
        NavigationBar,
        NavigationBarLeading,
        NavigationBarSearchField,
        NavigationBarTrailing
    } from 'apple-svelte';
</script>

<svelte:head>
    <link rel="stylesheet" href="node_modules/apple-svelte/dist/styles.css" />
    <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
    />
</svelte:head>

<NavigationBar showBackground size="large">
    <NavigationBarLeading slot="leading" />
    <NavigationBarTrailing slot="trailing-1" />
    <NavigationBarTrailing slot="trailing-2" />
    <NavigationBarTrailing slot="trailing-3" />
    <NavigationBarSearchField slot="search-field" />
</NavigationBar>`;
