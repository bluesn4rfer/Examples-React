import React from 'react';

function DisplayMenu({menuData, callback}) {
  if (!menuData) {
    console.log('Menu/Controller.js: menuData is null');
    return null;
  }

  const parseMenu = (menuData) => {
    console.log('Menus/Controller.js: parseMenu() menuData = '+JSON.stringify(menuData));

    return (
      <ul id={menuData.id} className={menuData.class}>
        {menuData.items.map((menuItem, index) => (
          <li
            key={'menuItem_' + index}
          >
            <a 
              href={menuItem.href}
              className={menuItem.class}
              data-bs-toggle={menuItem.toggle}
              aria-expanded={menuItem.expanded}
              onClick={menuItem.callback ? () => callback(menuItem.callback.action, menuItem.callback.params) : menuItem.action}
            >
            {menuItem.icon && <i className={'icon fa ' + menuItem.icon} />}
            {menuItem.label}
            </a>
            {menuItem.menu && parseMenu(menuItem.menu)}
          </li>
        ))}
      </ul>
    );
  };

  return parseMenu(menuData);
}

export default DisplayMenu;