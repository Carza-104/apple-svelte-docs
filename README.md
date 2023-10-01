# apple-svelte

apple-svelte is a component library for Svelte based on Apple's Human Interface design language.
To get started with apple-svelte, create a new Svelte project (or open an existing one) and enter the following command into your terminal.

```
npm i apple-svelte
```

You can now import and use apple-svelte components into your project.
Don't forget to include Material Symbols or whatever symbol library you're using into your HTML head. You'll also need to import apple-svelte's stylesheet, as well as the components you're going to be using in your project.

```
<script>
    import { Button } from 'apple-svelte';
</script>

<svelte:head>
    <link rel="stylesheet" href="node_modules/apple-svelte/dist/styles.css" />
    <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
    />
</svelte:head>
```

If the above syntax doesn't work, you can copy the stylesheet and paste it into your project.
