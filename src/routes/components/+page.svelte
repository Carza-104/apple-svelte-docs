<script>
	/* This page is only visible on mobile devices since you can select components from the sidebar on bigger screens. */
	import {
		Version26List,
		Version26ListRow,
		Version26ListRowDefaultTrailing,
		Version26ListRowImage
	} from 'apple-svelte';

	let listRowItems = [
		{
			title: 'Action Sheets',
			symbol: 'crop_5_4',
			redirect: '/action-sheets'
		},
		{
			title: '(iOS 26) Action Sheets',
			symbol: 'crop_5_4',
			redirect: '/version-26-action-sheets'
		},
		{
			title: 'Alerts',
			symbol: 'crop_5_4',
			redirect: '/alerts'
		},
		{
			title: '(iOS 26) Alerts',
			symbol: 'crop_5_4',
			redirect: '/version-26-alerts'
		},
		{
			title: 'Buttons',
			symbol: 'touch_app',
			redirect: '/buttons'
		},
		{
			title: '(iOS 26) Buttons',
			symbol: 'touch_app',
			redirect: '/version-26-buttons'
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
			redirect: '/version-26-lists'
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
			redirect: '/version-26-segmented-controls'
		},
		{
			title: 'Sidebars',
			symbol: 'thumbnail_bar',
			redirect: '/sidebars'
		},
		{
			title: '(iOS 26) Sidebars',
			symbol: 'thumbnail_bar',
			redirect: '/version-26-sidebars'
		},
		{
			title: 'Tab Bars',
			symbol: 'crop_16_9',
			redirect: '/tab-bars'
		},
		{
			title: '(iOS 26) Tab Bars',
			symbol: 'crop_16_9',
			redirect: '/version-26-tab-bars'
		},
		{
			title: 'Toolbars',
			symbol: 'crop_16_9',
			redirect: '/toolbars'
		},
		{
			title: '(iOS 26) Toolbars',
			symbol: 'crop_16_9',
			redirect: '/version-26-toolbars'
		}
	];

	function redirect(url) {
		if (url.startsWith('http://') || url.startsWith('https://')) {
			window.open(url, '_blank');
		} else {
			window.location.href = url;
		}
	}

	let windowWidth = undefined;

	$: {
		if (windowWidth > 592) {
			redirect('/');
		}
	}
</script>

<svelte:window bind:innerWidth={windowWidth} />

<Version26List>
	{#each listRowItems as listRowItem}
		<Version26ListRow title={listRowItem.title}>
			<Version26ListRowImage slot="image" type="symbol" symbol={listRowItem.symbol} />
			<Version26ListRowDefaultTrailing
				slot="trailing"
				showDisclosure
				onDisclosurePress={() => {
					redirect(listRowItem.redirect);
				}}
			/>
		</Version26ListRow>
	{/each}
</Version26List>
