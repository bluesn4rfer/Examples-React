import React from 'react';

function DisplayMenu({menuData}) {
  if (!menuData) {
    console.log('Menu/Controller.js: menuData is null');
    return null;
  }

  const parseMenu = (menuData) => {
    console.log('Menus/Controller.js: parseMenu() menuData = '+JSON.stringify(menuData));

    return (
      <ul className={menuData.class}>
        {menuData.items.map((menuItem, index) => (
          <>
          <li
            key={'menuItem_' + index}
            className={menuItem.class}
            data-bs-toggle="dropdown"
            onClick={menuItem.action}
          >
            {menuItem.icon && <i className={'icon fa ' + menuItem.icon} />}
            {menuItem.label}
          </li>

          {menuItem.menu && (
              <>{parseMenu(menuItem.menu)}</>
            )}
          </>
        ))}
      </ul>
    );
  };

  return parseMenu(menuData);
}

export default DisplayMenu;