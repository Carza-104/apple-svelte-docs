<script>
	/* This page is only visible on mobile devices since you can select components from the sidebar on bigger screens. */
	import { List, ListRow, ListRowDefaultTrailing, ListRowImage } from 'apple-svelte';

	let listRowItems = [
		{
			title: 'Action Sheets',
			symbol: 'crop_5_4',
			redirect: '/action-sheets'
		},
		{
			title: 'Alerts',
			symbol: 'crop_5_4',
			redirect: '/alerts'
		},
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

<List>
	{#each listRowItems as listRowItem}
		<ListRow title={listRowItem.title}>
			<ListRowImage slot="image" type="symbol" symbol={listRowItem.symbol} />
			<ListRowDefaultTrailing
				slot="trailing"
				showDisclosure
				onDisclosurePress={() => {
					redirect(listRowItem.redirect);
				}}
			/>
		</ListRow>
	{/each}
</List>
