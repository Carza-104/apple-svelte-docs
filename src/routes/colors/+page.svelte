<script>
	import { Collection, IOS26List, IOS26ListRow, IOS26ListRowDefaultTrailing } from 'apple-svelte';
	import Code from '$lib/Code.svelte';
	import { code } from './code';

	let colors = [
		{ name: 'Red', code: 'var(--colors-red)' },
		{ name: 'Orange', code: 'var(--colors-orange)' },
		{ name: 'Yellow', code: 'var(--colors-yellow)' },
		{ name: 'Green', code: 'var(--colors-green)' },
		{ name: 'Mint', code: 'var(--colors-mint)' },
		{ name: 'Teal', code: 'var(--colors-teal)' },
		{ name: 'Cyan', code: 'var(--colors-cyan)' },
		{ name: 'Blue', code: 'var(--colors-blue)' },
		{ name: 'Indigo', code: 'var(--colors-indigo)' },
		{ name: 'Purple', code: 'var(--colors-purple)' },
		{ name: 'Pink', code: 'var(--colors-pink)' },
		{ name: 'Brown', code: 'var(--colors-brown)' }
	];

	let colorsSecondary = [
		{ name: 'Red 2', code: 'var(--colors-red-2)' },
		{ name: 'Orange 2', code: 'var(--colors-orange-2)' },
		{ name: 'Yellow 2', code: 'var(--colors-yellow-2)' },
		{ name: 'Green 2', code: 'var(--colors-green-2)' },
		{ name: 'Mint 2', code: 'var(--colors-mint-2)' },
		{ name: 'Teal 2', code: 'var(--colors-teal-2)' },
		{ name: 'Cyan 2', code: 'var(--colors-cyan-2)' },
		{ name: 'Blue 2', code: 'var(--colors-blue-2)' },
		{ name: 'Indigo 2', code: 'var(--colors-indigo-2)' },
		{ name: 'Purple 2', code: 'var(--colors-purple-2)' },
		{ name: 'Pink 2', code: 'var(--colors-pink-2)' },
		{ name: 'Brown 2', code: 'var(--colors-brown-2)' }
	];

	let grays = [
		{ name: 'Black', code: 'var(--grays-black)' },
		{ name: 'Gray', code: 'var(--grays-gray)' },
		{ name: 'Gray 2', code: 'var(--grays-gray-2)' },
		{ name: 'Gray 3', code: 'var(--grays-gray-3)' },
		{ name: 'Gray 4', code: 'var(--grays-gray-4)' },
		{ name: 'Gray 5', code: 'var(--grays-gray-5)' },
		{ name: 'Gray 6', code: 'var(--grays-gray-6)' },
		{ name: 'White', code: 'var(--grays-white)' }
	];

	let backgrounds = [
		{ name: 'Background primary', code: 'var(--bg-primary)' },
		{ name: 'Background secondary', code: 'var(--bg-secondary)' },
		{ name: 'Background tertiary', code: 'var(--bg-tertiary)' }
	];

	let labels = [
		{ name: 'Label primary', code: 'var(--labels-primary)' },
		{ name: 'Label secondary', code: 'var(--labels-secondary)' },
		{ name: 'Label tertiary', code: 'var(--labels-tertiary)' },
		{ name: 'Label quaternary', code: 'var(--labels-quaternary)' }
	];

	let separators = [
		{ name: 'Separators opaque', code: 'var(--separators-opaque)' },
		{ name: 'Separators non-opaque', code: 'var(--separators-non-opaque)' }
	];

	let groupedBackgrounds = [
		{ name: 'Grouped background primary', code: 'var(--bg-grouped-primary)' },
		{ name: 'Grouped background secondary', code: 'var(--bg-grouped-secondary)' },
		{ name: 'Grouped background tertiary', code: 'var(--bg-grouped-tertiary)' }
	];

	let fills = [
		{ name: 'Fill primary', code: 'var(--fills-primary)' },
		{ name: 'Fill secondary', code: 'var(--fills-secondary)' },
		{ name: 'Fill tertiary', code: 'var(--fills-tertiary)' },
		{ name: 'Fill quaternary', code: 'var(--fills-quaternary)' }
	];

	function copy(string) {
		navigator.clipboard.writeText(string);
	}
</script>

<p>
	apple-svelte comes with the default color palette for iOS and iPadOS. Further down in this page is
	a list of supported color variables.
</p>
<p>
	You can customize your project's accent color by editing the <code>--colors-accent</code> and
	<code>--colors-accent-2</code>
	variables. For best results, <code>--colors-accent-2</code> should be the same color as
	<code>--colors-accent</code> but with lower (15%) opacity.
</p>
<Code {code} />
<Collection>
	<IOS26List showHeader header="Colors">
		{#each colors as color}
			<IOS26ListRow title={color.name}>
				<div
					slot="image"
					style="background: {color.code}; border-radius: 7px; height: 30px; width: 30px"
				/>
				<IOS26ListRowDefaultTrailing
					slot="trailing"
					showSymbol
					symbol="stack"
					onSymbolPress={() => copy(color.code)}
				/>
			</IOS26ListRow>
		{/each}
	</IOS26List>
	<IOS26List showHeader header="Colors 2">
		{#each colorsSecondary as color}
			<IOS26ListRow title={color.name}>
				<div
					slot="image"
					style="background: {color.code}; border-radius: 7px; height: 30px; width: 30px"
				/>
				<IOS26ListRowDefaultTrailing
					slot="trailing"
					showSymbol
					symbol="stack"
					onSymbolPress={() => copy(color.code)}
				/>
			</IOS26ListRow>
		{/each}
	</IOS26List>
	<IOS26List showHeader header="Grays">
		{#each grays as color}
			<IOS26ListRow title={color.name}>
				<div
					slot="image"
					style="background: {color.code}; border-radius: 7px; height: 30px; width: 30px"
				/>
				<IOS26ListRowDefaultTrailing
					slot="trailing"
					showSymbol
					symbol="stack"
					onSymbolPress={() => copy(color.code)}
				/>
			</IOS26ListRow>
		{/each}
	</IOS26List>
	<IOS26List showHeader header="Backgrounds">
		{#each backgrounds as color}
			<IOS26ListRow title={color.name}>
				<div
					slot="image"
					style="background: {color.code}; border-radius: 7px; height: 30px; width: 30px"
				/>
				<IOS26ListRowDefaultTrailing
					slot="trailing"
					showSymbol
					symbol="stack"
					onSymbolPress={() => copy(color.code)}
				/>
			</IOS26ListRow>
		{/each}
	</IOS26List>
	<IOS26List showHeader header="Labels">
		{#each labels as color}
			<IOS26ListRow title={color.name}>
				<div
					slot="image"
					style="background: {color.code}; border-radius: 7px; height: 30px; width: 30px"
				/>
				<IOS26ListRowDefaultTrailing
					slot="trailing"
					showSymbol
					symbol="stack"
					onSymbolPress={() => copy(color.code)}
				/>
			</IOS26ListRow>
		{/each}
	</IOS26List>
	<IOS26List showHeader header="Separators">
		{#each separators as color}
			<IOS26ListRow title={color.name}>
				<div
					slot="image"
					style="background: {color.code}; border-radius: 7px; height: 30px; width: 30px"
				/>
				<IOS26ListRowDefaultTrailing
					slot="trailing"
					showSymbol
					symbol="stack"
					onSymbolPress={() => copy(color.code)}
				/>
			</IOS26ListRow>
		{/each}
	</IOS26List>
	<IOS26List showHeader header="Grouped backgrounds">
		{#each groupedBackgrounds as color}
			<IOS26ListRow title={color.name}>
				<div
					slot="image"
					style="background: {color.code}; border-radius: 7px; height: 30px; width: 30px"
				/>
				<IOS26ListRowDefaultTrailing
					slot="trailing"
					showSymbol
					symbol="stack"
					onSymbolPress={() => copy(color.code)}
				/>
			</IOS26ListRow>
		{/each}
	</IOS26List>
	<IOS26List showHeader header="Fills">
		{#each fills as color}
			<IOS26ListRow title={color.name}>
				<div
					slot="image"
					style="background: {color.code}; border-radius: 7px; height: 30px; width: 30px"
				/>
				<IOS26ListRowDefaultTrailing
					slot="trailing"
					showSymbol
					symbol="stack"
					onSymbolPress={() => copy(color.code)}
				/>
			</IOS26ListRow>
		{/each}
	</IOS26List>
</Collection>
