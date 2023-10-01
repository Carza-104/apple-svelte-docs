<script>
	import { page } from '$app/stores';
	import {
		ListRowImage,
		NavigationBarTrailing,
		Sidebar,
		SidebarNavigationBar,
		SidebarNavigationBarLeading,
		SidebarSection,
		SidebarSectionItem,
		TabBarButton
	} from 'apple-svelte';
	import './styles.css';

	let sidebarButtonState = undefined;
	let sidebarMaxWidthStyle = undefined;
	let windowWidth = undefined;

	/* Hide or show the sidebar by default based on the window's width. */
	$: {
		if (windowWidth > 809) {
			sidebarButtonState = 'enabled';
			sidebarMaxWidthStyle = '320px';
		}

		if (windowWidth > 592 && windowWidth <= 809) {
			sidebarButtonState = 'enabled';
			sidebarMaxWidthStyle = '0px';
		}

		if (windowWidth <= 592) {
			sidebarButtonState = 'disabled';
			sidebarMaxWidthStyle = '0px';
		}
	}

	/* Hide or show the sidebar when the button is pressed. */
	function onSidebarPress() {
		if (sidebarMaxWidthStyle === '320px') {
			sidebarMaxWidthStyle = '0px';
		} else {
			sidebarMaxWidthStyle = '320px';
		}
	}

	/* This fixes a WebKit issue that causes the backdrop filter for the sidebar to disappear. */
	let sidebarBackdropFilter = 'blur(50px)';

	$: {
		if (windowWidth <= 809 && windowWidth > 592 && sidebarMaxWidthStyle === '320px') {
			setInterval(() => {
				sidebarBackdropFilter = 'unset';
				setTimeout(() => {
					sidebarBackdropFilter = 'blur(50px)';
				}, 0);
			}, 0);
		}
	}

	let title = $page.url.pathname;

	/* Automatically figure out the title based on the URL. */
	if ($page.url.pathname === '/') {
		title = 'Home';
	} else {
		/* Remove the leading slash, replace every hyphen with a whitespace character, and capitalize every word. */
		title = $page.url.pathname
			.replace(/\//g, '')
			.replace(/-/g, ' ')
			.replace(/\b\w/g, (match) => match.toUpperCase());
	}

	/* Arrays for items in sidebar sections. */
	let sidebarAboutSectionItems = [
		{
			title: 'Home',
			symbol: 'home',
			redirect: '/'
		},
		{
			title: 'Colors',
			symbol: 'palette',
			redirect: '/colors'
		},
		{
			title: 'Text',
			symbol: 'match_case',
			redirect: '/text'
		},
		{
			title: 'Symbols',
			symbol: 'star',
			redirect: '/symbols'
		}
	];

	let sidebarComponentsSectionItems = [
		{
			title: 'Buttons',
			symbol: 'touch_app',
			redirect: '/buttons'
		},
		{
			title: 'Collections',
			symbol: 'grid_view',
			redirect: '/collections'
		},
		{
			title: 'Lists',
			symbol: 'table_rows',
			redirect: '/lists'
		},
		{
			title: 'Navigation Bars',
			symbol: 'crop_16_9',
			redirect: '/navigation-bars'
		},
		{
			title: 'Segmented Controls',
			symbol: 'view_column',
			redirect: '/segmented-controls'
		},
		{
			title: 'Sidebars',
			symbol: 'thumbnail_bar',
			redirect: '/sidebars'
		},
		{
			title: 'Tab Bars',
			symbol: 'crop_16_9',
			redirect: '/tab-bars'
		},
		{
			title: 'Toolbars',
			symbol: 'crop_16_9',
			redirect: '/toolbars'
		}
	];

	/* Call this function to redirect the user when a sidebar section item is pressed. */
	function redirect(url) {
		if (url.startsWith('http://') || url.startsWith('https://')) {
			window.open(url, '_blank');
		} else {
			window.location.href = url;
		}
	}
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
	/>
	<meta
		name="description"
		content="apple-svelte is a component library based on Apple's Human Interface design language."
	/>
	<title>{title} | apple-svelte</title>
</svelte:head>

<svelte:window bind:innerWidth={windowWidth} />

<main>
	<Sidebar
		id="sidebar"
		style="max-width: {sidebarMaxWidthStyle}; transition: max-width 0.25s; -webkit-backdrop-filter: {sidebarBackdropFilter}; z-index: 2"
	>
		<SidebarNavigationBar {title}>
			<SidebarNavigationBarLeading slot="leading" symbol="thumbnail_bar" onPress={onSidebarPress} />
		</SidebarNavigationBar>
		<SidebarSection showHeading heading="About">
			<!-- Automatically render each sidebar section item. -->
			{#each sidebarAboutSectionItems as sidebarSectionItem}
				{#if sidebarSectionItem.title === title}
					<SidebarSectionItem
						state="selected-secondary"
						title={sidebarSectionItem.title}
						showImage
						symbol={sidebarSectionItem.symbol}
					/>
				{:else}
					<SidebarSectionItem
						title={sidebarSectionItem.title}
						showImage
						symbol={sidebarSectionItem.symbol}
						onPress={() => redirect(sidebarSectionItem.redirect)}
					/>
				{/if}
			{/each}
			<SidebarSectionItem
				inputGroup="redirect"
				title="GitHub"
				showImage
				imageType="bitmap"
				image="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
				onPress={() => redirect('https://github.com/Carza-104/apple-svelte')}
			/>
			<SidebarSectionItem
				inputGroup="redirect"
				title="npm"
				showImage
				imageType="bitmap"
				image="https://avatars.githubusercontent.com/u/6078720?s=200&v=4"
				onPress={() => redirect('https://www.npmjs.com/package/apple-svelte')}
			/>
		</SidebarSection>
		<SidebarSection showHeading heading="Components">
			<!-- Automatically render each sidebar section item. -->
			{#each sidebarComponentsSectionItems as sidebarSectionItem}
				{#if sidebarSectionItem.title === title}
					<SidebarSectionItem
						state="selected-secondary"
						title={sidebarSectionItem.title}
						showImage
						symbol={sidebarSectionItem.symbol}
						style="white-space: nowrap"
					/>
				{:else}
					<SidebarSectionItem
						title={sidebarSectionItem.title}
						showImage
						symbol={sidebarSectionItem.symbol}
						onPress={() => redirect(sidebarSectionItem.redirect)}
						style="white-space: nowrap"
					/>
				{/if}
			{/each}
		</SidebarSection>
	</Sidebar>
	<div class="main">
		<!-- Let the user close the sidebar by pressing outside it on smaller displays. -->
		{#if windowWidth <= 809 && windowWidth > 592 && sidebarMaxWidthStyle === '320px'}
			<label>
				<button class="hidden-input" on:click={onSidebarPress} />
			</label>
		{/if}
		<div class="navigation-bar">
			<div class="title-and-controls">
				<!-- Hide or show the sidebar button depending on the window's width. -->
				{#if sidebarButtonState === 'enabled'}
					<NavigationBarTrailing symbol="thumbnail_bar" onPress={onSidebarPress} />
				{:else}
					<NavigationBarTrailing state="disabled" symbol="thumbnail_bar" />
				{/if}
			</div>
			<h1>{title}</h1>
		</div>
		<div class="banner">
			<ListRowImage type="symbol" symbol="report" />
			<p>apple-svelte isn't affiliated with or endorsed by Apple.</p>
		</div>
		<slot />
		<!-- Show the tab bar on mobile devices. -->
		{#if windowWidth <= 592}
			<!-- Make the tab bar take up space in the document-flow. -->
			<div class="document-flow-tab-bar" />
			<div class="tab-bar">
				<!-- Automatically render each tab bar button. -->
				{#each sidebarAboutSectionItems as sidebarSectionItem}
					{#if sidebarSectionItem.title === title}
						<TabBarButton
							state="selected"
							symbol={sidebarSectionItem.symbol}
							label={sidebarSectionItem.title}
						/>
					{:else}
						<TabBarButton
							symbol={sidebarSectionItem.symbol}
							label={sidebarSectionItem.title}
							onPress={() => redirect(sidebarSectionItem.redirect)}
						/>
					{/if}
				{/each}
				{#if title === 'Components'}
					<TabBarButton state="selected" symbol="stack" label="Components" />
				{:else}
					<TabBarButton symbol="stack" label="Components" onPress={() => redirect('/components')} />
				{/if}
			</div>
		{/if}
	</div>
</main>

<style>
	:root {
		color-scheme: light dark;
		--border-bottom: rgb(0, 0, 0, 0.3);
	}

	@media (prefers-color-scheme: dark) {
		:root {
			--border-bottom: rgb(255, 255, 255, 0.15);
		}
	}

	/* Hide the sidebar by default on mobile devices. */
	@media (max-width: 592px) {
		main :global(#sidebar) {
			max-width: 0px;
		}
	}

	.main {
		display: flex;
		flex-direction: column;
		gap: 24px;
		padding: 24px 16px;
	}

	label {
		cursor: unset;
		height: 100vh;
		position: fixed;
		width: 100vw;
		z-index: 1;
	}

	.navigation-bar {
		backdrop-filter: blur(25px);
		background: var(--materials-chrome);
		background-blend-mode: var(--materials-chrome-background-blend-mode);
		border-bottom: 0.33px solid var(--border-bottom);
		display: flex;
		flex-direction: column;
		margin: -24px -16px 0px;
		padding-top: 27px;
		-webkit-backdrop-filter: blur(25px);
	}

	.title-and-controls {
		align-items: center;
		display: flex;
		justify-content: space-between;
		padding: 11px 16px 11px 8px;
	}

	h1 {
		font-size: 34px;
		font-weight: 700;
		line-height: 41px;
		margin: 3px 16px 8px;
	}

	.banner {
		align-items: center;
		background: var(--bg-grouped-secondary);
		border-radius: 10px;
		display: flex;
		gap: 12px;
		padding: 11px 16px;
	}

	.document-flow-tab-bar {
		height: 94px;
		margin: 0px -16px -24px;
	}

	.tab-bar {
		backdrop-filter: blur(25px);
		background: var(--materials-chrome);
		background-blend-mode: var(--materials-chrome-background-blend-mode);
		bottom: 0px;
		box-shadow: 0px -0.33px rgb(0, 0, 0, 0.3);
		display: flex;
		justify-content: space-between;
		margin: -24px -16px;
		padding: 7px 15px 60px;
		position: fixed;
		-webkit-backdrop-filter: blur(25px);
		width: calc(100% - 32px);
	}

	@media (prefers-color-scheme: dark) {
		.tab-bar {
			box-shadow: 0px -0.33px rgb(255, 255, 255, 0.15);
		}
	}
</style>
