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
Learn how to customize apple-svelte or check out the layout example.

# Color

apple-svelte comes with the default color palette for iOS and iPadOS. Further down in this page is a list of supported color variables.
You can customize your project's accent color by editing the `--colors-accent` and `--colors-accent-2` variables. For best results, `--colors-accent-2` should be the same color as `--colors-accent` but with lower (15%) opacity.

```
<style>
	:root {
		--colors-accent: var(--colors-indigo);
		--colors-accent-2: var(--colors-indigo-2);
	}
</style>
```

# Text

apple-svelte's font stack supports system fonts on most platforms. If you wish to change this, you can edit the `--sans-serif-font-family` and `--monospace-font-family` variables.

```
<style>
	:root {
		--sans-serif-font-family: ui-sans-serif, 'SF Pro', Roboto, 'Fira Sans', Oxygen, Ubuntu,
			'Segoe UI', 'Helvetica Neue', 'Noto Sans', Arial, sans-serif;
		--monospace-font-family: ui-monospace, 'SF Mono', 'Roboto Mono', 'Fira Mono', 'Oxygen Mono',
			'Ubuntu Mono', 'Cascadia Code', Menlo, 'Noto Sans Mono', Consolas, monospace;
	}
</style>
```

If you're using a third-party font, make sure to include it in your HTML head. Below is a list of classes you can set text in your project to.

# Symbols

apple-svelte uses Material Symbols by default, but it also supports third-party symbol libraries. If you wish to use SF Symbols, you can use Apple's SF Pro Icons font but it's not recommended as it's against Apple's license agreement. You could also copy and paste glyphs from the SF Symbols app but it doesn't work well across all platforms.
If you use a third-party symbol library, don't forget to load the font into your HTML head.

```
<svelte:head>
	<link rel="stylesheet" href="node_modules/apple-svelte/dist/styles.css" />
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
	/>
</svelte:head>

<style>
	:root {
		--symbol-font-family: 'Material Symbols Rounded';
		--small-symbol-font-size-multiplier: 1.01680672269;
		--medium-symbol-font-size-multiplier: 1.2840336134;
		--large-symbol-font-size-multiplier: 1.6394957983;
	}
</style>
```

Since not all libraries provide consistently sized symbols, you can edit the `--small-symbol-font-size-multiplier`, `--medium-symbol-font-size-multiplier`, and `--large-symbol-font-size-multiplier` variables to fix this.

# Example

This sample code teaches you how to use responsive sidebars and tab bars in your layout. This example also includes a fix to a WebKit bug that causes the sidebar's backdrop filter not to show up when it's being resized.

## Components

# Buttons

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

<Button type="filled" />
```

Button components are very straightforward: you can declare a function and have the button call it when pressed.

## Components

# Collections

```
<script>
	import { Collection } from 'apple-svelte';
</script>

<svelte:head>
	<link rel="stylesheet" href="node_modules/apple-svelte/dist/styles.css" />
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
	/>
</svelte:head>

<Collection>
	<!-- Collections look best when wrapped around lists. -->
</Collection>
```

Collections are simple layout components that work best when wrapped around multiple lists.

On smaller screens, collections automatically switch from a grid layout to a row one.

## Components

# Lists

```
<script>
	import {
		List,
		ListRow,
		ListRowButtonTrailing,
		ListRowDefaultTrailing,
		ListRowDisclosureTrailing,
		ListRowImage,
		ListRowStepperTrailing,
		ListRowToggleTrailing
	} from 'apple-svelte';
</script>

<svelte:head>
	<link rel="stylesheet" href="node_modules/apple-svelte/dist/styles.css" />
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
	/>
</svelte:head>

<List>
	<ListRow>
		<ListRowImage slot="image" type="symbol" />
		<ListRowButtonTrailing slot="trailing" />
	</ListRow>
	<ListRow>
		<ListRowImage slot="image" type="symbol" />
		<ListRowDefaultTrailing slot="trailing" showDetail showDisclosure />
	</ListRow>
	<ListRow>
		<ListRowImage slot="image" type="symbol" />
		<ListRowDisclosureTrailing slot="trailing" />
	</ListRow>
	<ListRow>
		<ListRowImage slot="image" type="symbol" />
		<ListRowStepperTrailing slot="trailing" />
	</ListRow>
	<ListRow>
		<ListRowImage slot="image" type="symbol" />
		<ListRowToggleTrailing slot="trailing" />
	</ListRow>
</List>
```

Lists are supposed to be wrapped around list rows and other components. For a better responsive layout, you can put lists inside a collection.

## Components

# Navigation Bars

```
<script>
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
</NavigationBar>
```

If you want your navigation bar component to stick to the top of the screen, you can set its `style` prop to `"position: sticky; top: 0px"`.

## Components

# Segmented Controls

```
<script>
	import { SegmentedControl, SegmentedControlButton } from 'apple-svelte';
</script>

<svelte:head>
	<link rel="stylesheet" href="node_modules/apple-svelte/dist/styles.css" />
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
	/>
</svelte:head>

<SegmentedControl>
	<SegmentedControlButton />
	<SegmentedControlButton />
	<SegmentedControlButton />
</SegmentedControl>
```

Segmented controls provide mutually exclusive buttons to switch between views.

You can have segmented control buttons call any function when pressed, but it's recommended you use this to conditionally render content.

## Components

# Sidebars

```
<script>
	import {
		Sidebar,
		SidebarNavigationBar,
		SidebarNavigationBarLeading,
		SidebarNavigationBarTrailing,
		SidebarSection,
		SidebarSectionAddItemButton,
		SidebarSectionItem
	} from 'apple-svelte';
</script>

<svelte:head>
	<link rel="stylesheet" href="node_modules/apple-svelte/dist/styles.css" />
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
	/>
</svelte:head>

<Sidebar>
	<SidebarNavigationBar>
		<SidebarNavigationBarLeading slot="leading" />
		<SidebarNavigationBarTrailing slot="trailing" />
	</SidebarNavigationBar>
	<SidebarSection>
		<SidebarSectionItem showImage showTrailingSymbol />
		<SidebarSectionItem showImage showTrailingSymbol />
		<SidebarSectionItem showImage showTrailingSymbol />
		<SidebarSectionAddItemButton />
	</SidebarSection>
</Sidebar>
```

If you can, avoid using sidebars on mobile devices.

If you use a sidebar component, you'll also need to include logic to hide or show it dynamically.

To actually make sidebar section items work you can have them redirect the user to a separate page and set each sidebar section item's `state` prop to `selected` manually or you can conditionally render each view.

It's recommended that you put your sidebar code outside the main div where your content lives. You should also set said div's `display` property to `flex`.

You can nest sidebar section items inside each other as long as their `showDisclosure` prop is set to `true`.

## Components

# Tab Bars

```
<script>
	import { TabBar, TabBarButton } from 'apple-svelte';
</script>

<svelte:head>
	<link rel="stylesheet" href="node_modules/apple-svelte/dist/styles.css" />
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
	/>
</svelte:head>

<TabBar>
	<TabBarButton slot="button-1" />
	<TabBarButton slot="button-2" />
	<TabBarButton slot="button-3" />
</TabBar>
```

If you can, avoid using tab bars on larger screens.

To actually make tab bar buttons work, you can either have them redirect the user to a separate page and set each tab bar button's `state` prop to `selected` for every page or you can use a similar approach as the one used in the layout example.

## Components

# Toolbars

```
<script>
	import { Toolbar, ToolbarButton } from 'apple-svelte';
</script>

<svelte:head>
	<link rel="stylesheet" href="node_modules/apple-svelte/dist/styles.css" />
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
	/>
</svelte:head>

<Toolbar>
	<ToolbarButton />
	<ToolbarButton />
	<ToolbarButton />
</Toolbar>
```

If you can, avoid using toolbars on larger screens.

Toolbar buttons are very straightforward: you can declare a function and have them call it when pressed.
