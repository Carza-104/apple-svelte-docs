export let code = `<script>
	import {
		Button,
		IOS26Sidebar,
		IOS26SidebarNavigationBar,
		IOS26SidebarNavigationBarLeading,
		IOS26SidebarNavigationBarTrailing,
		IOS26SidebarSection,
		IOS26SidebarSectionAddItemButton,
		IOS26SidebarSectionItem
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

<IOS26Sidebar bind:state>
	<IOS26SidebarNavigationBar>
		<IOS26SidebarNavigationBarLeading slot="leading" />
		<IOS26SidebarNavigationBarTrailing slot="trailing" />
	</IOS26SidebarNavigationBar>
	<IOS26SidebarSection showHeading heading="Home">
		<IOS26SidebarSectionItem showImage showTrailingSymbol />
		<IOS26SidebarSectionItem showImage showDisclosure>
			<IOS26SidebarSectionItem indentLevel="1" showImage showDisclosure>
				<IOS26SidebarSectionItem indentLevel="2" showImage showDisclosure>
					<IOS26SidebarSectionItem indentLevel="3" showImage showDisclosure>
						<IOS26SidebarSectionItem indentLevel="4" showImage showTrailingSymbol />
					</IOS26SidebarSectionItem>
				</IOS26SidebarSectionItem>
			</IOS26SidebarSectionItem>
		</IOS26SidebarSectionItem>
		<IOS26SidebarSectionAddItemButton />
	</IOS26SidebarSection>
</IOS26Sidebar>
`;
