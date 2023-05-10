import React from 'react';

function DisplayMenu({menuData, callback}) {
  console.log('Menus/Controller.js: DisplayMenu() invoked');

  if (!menuData) {
    console.log('Menu/Controller.js: menuData is null');
    return null;
  }

  const parseMenu = (menuData) => {
    return (
      <ul id={menuData.id} className={menuData.class}>
        {menuData.items.map((menuItem, index) => {
            const {id, icon, label, href, class: className, toggle, expanded, menu, ...itemProps} = menuItem;
            return (
              <li
                key={'menuItem_'+index}
              >
                <a 
                  id={id}
                  href={href||'#'}
                  className={className}
                  data-bs-toggle={toggle}
                  aria-expanded={expanded}
                  onClick={() => callback(menuItem)}
                  {...itemProps}
                >
                {icon && <i className={'icon fa ' + icon} />}
                {label}
                </a>
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