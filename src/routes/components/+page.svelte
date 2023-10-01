<script>
	import {
		Button,
		Collection,
		List,
		ListRow,
		ListRowButtonTrailing,
		ListRowDefaultTrailing,
		ListRowDisclosureTrailing,
		ListRowImage,
		ListRowStepperTrailing,
		ListRowToggleTrailing,
		NavigationBar,
		NavigationBarLeading,
		NavigationBarSearchField,
		NavigationBarTrailing,
		SegmentedControl,
		SegmentedControlButton,
		Sidebar,
		SidebarNavigationBar,
		SidebarNavigationBarLeading,
		SidebarNavigationBarTrailing,
		SidebarSection,
		SidebarSectionAddItemButton,
		SidebarSectionItem,
		TabBar,
		TabBarButton,
		Toolbar,
		ToolbarButton
	} from 'apple-svelte';

	function redirect(url) {
		if (url.startsWith('http://') || url.startsWith('https://')) {
			window.open(url, '_blank');
		} else {
			window.location.href = url;
		}
	}
</script>

<Collection>
	<div>
		<List showHeader headerType="prominent" header="Buttons" onPress={() => redirect('/buttons')} />
		<Button type="filled" style="margin-top: -24px" />
	</div>
	<List
		showHeader
		headerType="prominent"
		header="Collections"
		onPress={() => redirect('/collections')}
	/>
	<List showHeader headerType="prominent" header="Lists" onPress={() => redirect('/lists')}>
		<ListRow>
			<ListRowImage slot="image" type="symbol" />
			<ListRowButtonTrailing slot="trailing" />
		</ListRow>
		<ListRow>
			<ListRowImage slot="image" type="symbol" />
			<ListRowDefaultTrailing slot="trailing" showDisclosure />
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
	<List
		showHeader
		headerType="prominent"
		header="Navigation Bars"
		onPress={() => redirect('/navigation-bars')}
	>
		<NavigationBar showBackground size="large" style="border-bottom: unset !important">
			<NavigationBarLeading slot="leading" />
			<NavigationBarTrailing slot="trailing-1" />
			<NavigationBarTrailing slot="trailing-2" />
			<NavigationBarTrailing slot="trailing-3" />
			<NavigationBarSearchField slot="search-field" />
		</NavigationBar>
	</List>
	<div>
		<List
			showHeader
			headerType="prominent"
			header="Segmented Controls"
			onPress={() => redirect('/segmented-controls')}
		/>
		<SegmentedControl style="margin-top: -24px">
			<SegmentedControlButton />
			<SegmentedControlButton />
			<SegmentedControlButton />
		</SegmentedControl>
	</div>
	<List showHeader headerType="prominent" header="Sidebars" onPress={() => redirect('/sidebars')}>
		<Sidebar style="background: var(--materials-regular); position: unset">
			<SidebarNavigationBar>
				<SidebarNavigationBarLeading slot="leading" />
				<SidebarNavigationBarTrailing slot="trailing" />
			</SidebarNavigationBar>
			<SidebarSection>
				<SidebarSectionItem showImage showTrailingSymbol inputGroup="preview-sidebar" />
				<SidebarSectionItem showImage showTrailingSymbol inputGroup="preview-sidebar" />
				<SidebarSectionItem showImage showTrailingSymbol inputGroup="preview-sidebar" />
				<SidebarSectionAddItemButton />
			</SidebarSection>
		</Sidebar>
	</List>
	<List showHeader headerType="prominent" header="Tab Bars" onPress={() => redirect('/tab-bars')}>
		<TabBar style="position: unset">
			<TabBarButton slot="button-1" inputGroup="preview-tab-bar" />
			<TabBarButton slot="button-2" inputGroup="preview-tab-bar" />
			<TabBarButton slot="button-3" inputGroup="preview-tab-bar" />
		</TabBar>
	</List>
	<List showHeader headerType="prominent" header="Toolbars" onPress={() => redirect('/toolbars')}>
		<Toolbar style="position: unset">
			<ToolbarButton />
			<ToolbarButton />
			<ToolbarButton />
		</Toolbar>
	</List>
</Collection>
