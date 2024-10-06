export default function mergeMenus(mainMenu, customMenu) {
    const mergedMenu = [...mainMenu];
  
    customMenu.forEach(customSection => {
      const existingSectionIndex = mergedMenu.findIndex(
        mainSection => mainSection.title === customSection.title
      );
  
      if (existingSectionIndex >= 0) {
        // Merge the items if the section exists in both menus
        mergedMenu[existingSectionIndex].items = [
          ...mergedMenu[existingSectionIndex].items,
          ...customSection.items
        ];
      } else {
        // Add the custom section to the menu if it doesn't exist in the main menu
        mergedMenu.push(customSection);
      }
    });
  
    return mergedMenu;
}