import React from 'react';

function DisplayMenu({menu}) {
  console.log('Menus/Controller.js: DisplayMenu() invoked');

  if (!menu) {
    console.log('Menu/Controller.js: menu is null');
    return null;
  }

  const parseMenu = ({links, ...menuProps}) => {
    return (
      <ul {...menuProps}>
        {links.map((menuLink, index) => {
            const {link, menu, ...props} = menuLink;
            return (
              <li
                key={'menuLink_'+index}
                {...props}
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

  return parseMenu(menu);
}

export default DisplayMenu;