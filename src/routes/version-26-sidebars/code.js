export let code = `<script>
	import {
		Button,
		Version26Sidebar,
		Version26SidebarNavigationBar,
		Version26SidebarNavigationBarLeading,
		Version26SidebarNavigationBarTrailing,
		Version26SidebarSection,
		Version26SidebarSectionAddItemButton,
		Version26SidebarSectionItem
	} from 'apple-svelte';
	let state = undefined;

	function handlePress() {
		if (state === 'default') {
			state = 'hidden';
		} else {
			state = 'default';
		}
	}
</script>

<svelte:head>
	<link rel="stylesheet" href="node_modules/apple-svelte/dist/styles.css" />
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
	/>
</svelte:head>

{#if state === 'default'}
	<Button type="bezeled" symbol="visibility" label="Hide sidebar" onPress={handlePress} />
{:else}
	<Button type="bezeled" symbol="visibility" label="Show sidebar" onPress={handlePress} />
{/if}

<Version26Sidebar bind:state>
	<Version26SidebarNavigationBar>
		<Version26SidebarNavigationBarLeading slot="leading" />
		<Version26SidebarNavigationBarTrailing slot="trailing" />
	</Version26SidebarNavigationBar>
	<Version26SidebarSection showHeading heading="Home">
		<Version26SidebarSectionItem showImage showTrailingSymbol />
		<Version26SidebarSectionItem showImage showDisclosure>
			<Version26SidebarSectionItem indentLevel="1" showImage showDisclosure>
				<Version26SidebarSectionItem indentLevel="2" showImage showDisclosure>
					<Version26SidebarSectionItem indentLevel="3" showImage showDisclosure>
						<Version26SidebarSectionItem indentLevel="4" showImage showTrailingSymbol />
					</Version26SidebarSectionItem>
				</Version26SidebarSectionItem>
			</Version26SidebarSectionItem>
		</Version26SidebarSectionItem>
		<Version26SidebarSectionAddItemButton />
	</Version26SidebarSection>
</Version26Sidebar>
`;
