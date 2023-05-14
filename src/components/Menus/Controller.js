import React from 'react';

function DisplayMenu({menuData}) {
  console.log('Menus/Controller.js: DisplayMenu() invoked');

  if (!menuData) {
    console.log('Menu/Controller.js: menuData is null');
    return null;
  }

  const parseMenu = (menuData) => {
    return (
      <ul {...menuData.props}>
        {menuData.links.map((menuLink, index) => {
            const {link, menu} = menuLink;
            return (
              <li
                key={'menuLink_'+index}
              >
                {link}

                {menu && parseMenu(menu)}
              </li>
            );
          }
        )}
      </ul>
    );
  };

  return parseMenu(menuData);
}

export default DisplayMenu;