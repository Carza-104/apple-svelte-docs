<script>
	/* Vercel Web Analytics: */
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	inject({ mode: dev ? 'development' : 'production' });

	import { page } from '$app/stores';
	import {
		IOS26ListRowImage,
		NavigationBar,
		NavigationBarTrailing,
		IOS26Sidebar,
		IOS26SidebarNavigationBar,
		IOS26SidebarNavigationBarLeading,
		IOS26SidebarSection,
		IOS26SidebarSectionItem,
		IOS26TabBar,
		IOS26TabBarButton
	} from 'apple-svelte';
	import './code.css';
	import './layout.css';
	import './styles.css';

	let sidebarState = undefined;

	function handleIOS26SidebarPress() {
		if (sidebarState === 'default') {
			sidebarState = 'hidden';
		} else {
			sidebarState = 'default';
		}
	}

	let title = $page.url.pathname;

	/* Automatically figure out the title based on the URL. */
	$: {
		if ($page.url.pathname === '/') {
			title = 'Home';
		} else {
			/* Remove the leading slash, replace every hyphen with a whitespace character, and capitalize every word. */
			title = $page.url.pathname
				.replace(/\//g, '')
				.replace(/-/g, ' ')
				.replace(/\b\w/g, (match) => match.toUpperCase());
		}
	}

	/* IOS26Sidebar section items. */
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
			title: 'Action Sheets',
			symbol: 'crop_5_4',
			redirect: '/action-sheets'
		},
		{
			title: '(iOS 26) Action Sheets',
			symbol: 'crop_5_4',
			redirect: '/26-action-sheets'
		},
		{
			title: 'Alerts',
			symbol: 'crop_5_4',
			redirect: '/alerts'
		},
		{
			title: '(iOS 26) Alerts',
			symbol: 'crop_5_4',
			redirect: '/26-alerts'
		},
		{
			title: 'Buttons',
			symbol: 'touch_app',
			redirect: '/buttons'
		},
		{
			title: '(iOS 26) Buttons',
			symbol: 'touch_app',
			redirect: '/26-buttons'
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
			title: '(iOS 26) Lists',
			symbol: 'table_rows',
			redirect: '/26-lists'
		},
		{
			title: 'Navigation Bars',
			symbol: 'crop_16_9',
			redirect: '/navigation-bars'
		},
		{
			title: 'Page Controls',
			symbol: 'more_horiz',
			redirect: '/page-controls'
		},
		{
			title: 'Progress Indicators',
			symbol: 'refresh',
			redirect: '/progress-indicators'
		},
		{
			title: 'Segmented Controls',
			symbol: 'view_column',
			redirect: '/segmented-controls'
		},
		{
			title: '(iOS 26) Segmented Controls',
			symbol: 'view_column',
			redirect: '/26-segmented-controls'
		},
		{
			title: 'Sidebars',
			symbol: 'thumbnail_bar',
			redirect: '/sidebars'
		},
		{
			title: '(iOS 26) Sidebars',
			symbol: 'thumbnail_bar',
			redirect: '/26-sidebars'
		},
		{
			title: 'Tab Bars',
			symbol: 'crop_16_9',
			redirect: '/tab-bars'
		},
		{
			title: '(iOS 26) Tab Bars',
			symbol: 'crop_16_9',
			redirect: '/26-tab-bars'
		},
		{
			title: 'Toolbars',
			symbol: 'crop_16_9',
			redirect: '/toolbars'
		},
		{
			title: '(iOS 26) Toolbars',
			symbol: 'crop_16_9',
			redirect: '/26-toolbars'
		}
	];
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
	/>
	<meta name="mobile-web-app-capable" content="yes" />
	<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
	<meta name="apple-mobile-web-app-title" content="apple-svelte" />
	<meta
		name="description"
		content="apple-svelte is a component library based on Apple's Human Interface design language."
	/>
	<title>{title} | apple-svelte</title>

	<!-- Bing Webmaster Tools, Google Search Console: -->
	<meta name="msvalidate.01" content="1A6D67EAF90B63FBB367A65A9985F3B6" />
	<meta name="google-site-verification" content="_gjhL2PbvDHezhcXeGbB890fQRspfel7GfH__TwX7hE" />

	<meta property="og:title" content="{title} | apple-svelte" />
	<meta
		property="og:description"
		content="apple-svelte is a component library based on Apple's Human Interface design language."
	/>
	<meta
		property="og:image"
		content="https://repository-images.githubusercontent.com/695473033/7a170301-50b0-4fe2-ad54-3235e0f68e13"
	/>
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
</svelte:head>

<main>
	<IOS26Sidebar bind:state={sidebarState} id="sidebar">
		<IOS26SidebarNavigationBar {title}>
			<IOS26SidebarNavigationBarLeading
				slot="leading"
				symbol="thumbnail_bar"
				onPress={handleIOS26SidebarPress}
			/>
		</IOS26SidebarNavigationBar>
		<IOS26SidebarSection showHeading heading="About">
			{#each sidebarAboutSectionItems as sidebarSectionItem}
				{#if sidebarSectionItem.title === title}
					<IOS26SidebarSectionItem
						behavior="hyperlink"
						href={sidebarSectionItem.redirect}
						state="selected-secondary"
						title={sidebarSectionItem.title}
						showImage
						symbol={sidebarSectionItem.symbol}
					/>
				{:else}
					<IOS26SidebarSectionItem
						behavior="hyperlink"
						href={sidebarSectionItem.redirect}
						title={sidebarSectionItem.title}
						showImage
						symbol={sidebarSectionItem.symbol}
					/>
				{/if}
			{/each}
			<IOS26SidebarSectionItem
				behavior="hyperlink"
				href="https://github.com/Carza-104/apple-svelte"
				inputGroup="redirect-1"
				title="GitHub"
				showImage
				imageType="bitmap"
				image="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
			/>
			<IOS26SidebarSectionItem
				behavior="hyperlink"
				href="https://www.npmjs.com/package/apple-svelte"
				inputGroup="redirect-2"
				title="npm"
				showImage
				imageType="bitmap"
				image="https://avatars.githubusercontent.com/u/6078720?s=200&v=4"
			/>
		</IOS26SidebarSection>
		<IOS26SidebarSection showHeading heading="Components">
			{#each sidebarComponentsSectionItems as sidebarSectionItem}
				{#if sidebarSectionItem.title === title}
					<IOS26SidebarSectionItem
						behavior="hyperlink"
						href={sidebarSectionItem.redirect}
						state="selected-secondary"
						title={sidebarSectionItem.title}
						showImage
						symbol={sidebarSectionItem.symbol}
					/>
				{:else}
					<IOS26SidebarSectionItem
						behavior="hyperlink"
						href={sidebarSectionItem.redirect}
						title={sidebarSectionItem.title}
						showImage
						symbol={sidebarSectionItem.symbol}
					/>
				{/if}
			{/each}
		</IOS26SidebarSection>
	</IOS26Sidebar>
	<div class="main">
		<NavigationBar
			showBackground
			size="large"
			{title}
			style="margin: -24px -16px 0px; padding-top: 27px"
		>
			<NavigationBarTrailing
				slot="leading"
				symbol="thumbnail_bar"
				onPress={handleIOS26SidebarPress}
			/>
		</NavigationBar>
		<div class="banner">
			<IOS26ListRowImage type="symbol" symbol="report" />
			<p>apple-svelte isn't affiliated with or endorsed by Apple.</p>
		</div>
		<slot />
		<IOS26TabBar
			id="tab-bar"
			style="margin: -24px -16px; opacity: 0%; padding: 38px 30px 72px; position: unset"
		/>
		<IOS26TabBar id="tab-bar" style="margin: 0px -16px 0px; width: calc(100% - 30px)">
			{#each sidebarAboutSectionItems as sidebarSectionItem}
				{#if sidebarSectionItem.title === title}
					<IOS26TabBarButton
						behavior="hyperlink"
						href={sidebarSectionItem.redirect}
						state="selected"
						symbol={sidebarSectionItem.symbol}
						label={sidebarSectionItem.title}
					/>
				{:else}
					<IOS26TabBarButton
						behavior="hyperlink"
						href={sidebarSectionItem.redirect}
						symbol={sidebarSectionItem.symbol}
						label={sidebarSectionItem.title}
					/>
				{/if}
			{/each}
			<IOS26TabBarButton
				behavior="hyperlink"
				href="/components"
				symbol="stack"
				label="Components"
			/>
		</IOS26TabBar>
	</div>
</main>

<style>
	:root {
		--colors-accent: var(--colors-indigo);
		--colors-accent-2: var(--colors-indigo-2);
	}

	.main {
		display: flex;
		flex-direction: column;
		gap: 24px;
		padding: 24px 16px;
	}

	.banner {
		align-items: center;
		background: var(--bg-grouped-secondary);
		border-radius: 52px;
		display: flex;
		gap: 12px;
		padding: 15px 16px;
	}

	/* Hide the sidebar by default on mobile devices. */
	@media (max-width: 592px) {
		main :global(#sidebar) {
			display: none;
		}
	}

	/* Hide the tab bar by default on larger devices. */
	@media (min-width: 593px) {
		main :global(#tab-bar) {
			display: none;
		}
	}
</style>
