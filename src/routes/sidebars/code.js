export let code = `<script>
	import {
		Button,
		Sidebar,
		SidebarNavigationBar,
		SidebarNavigationBarLeading,
		SidebarNavigationBarTrailing,
		SidebarSection,
		SidebarSectionAddItemButton,
		SidebarSectionItem
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

<Sidebar bind:state>
	<SidebarNavigationBar>
		<SidebarNavigationBarLeading slot="leading" />
		<SidebarNavigationBarTrailing slot="trailing" />
	</SidebarNavigationBar>
	<SidebarSection showHeading heading="Home">
		<SidebarSectionItem showImage showTrailingSymbol />
		<SidebarSectionItem showImage showDisclosure>
			<SidebarSectionItem indentLevel="1" showImage showDisclosure>
				<SidebarSectionItem indentLevel="2" showImage showDisclosure>
					<SidebarSectionItem indentLevel="3" showImage showDisclosure>
						<SidebarSectionItem indentLevel="4" showImage showTrailingSymbol />
					</SidebarSectionItem>
				</SidebarSectionItem>
			</SidebarSectionItem>
		</SidebarSectionItem>
		<SidebarSectionAddItemButton />
	</SidebarSection>
</Sidebar>
`;
