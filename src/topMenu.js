export const topMenu = {
    className: 'list-unstyled',
    links: [
        {
            link: (<button className='dropdown-toggle fs-5 btn-secondary rounded-bottom px-3 py-2 my-0' data-bs-toggle="dropdown"><i className='icon fa fa-bars' /></button>),
            menu: {
                className: 'dropdown-menu theme-secondary border-0 p-0 m-0',
                links: [
                    {
                        link: (<button id='ShowThemeSelector' className='btn btn-lg btn-secondary my-0 w-100 text-start' onClick={() => setShowThemeSelector(true)}>Menus</button>)
                    },
                    {
                        link: (<button id='ShowThemeSelector' className='btn btn-lg btn-secondary my-0 w-100 text-start' onClick={() => setShowThemeSelector(true)}>Views</button>)
                    },
                    {
                        link: (<button id='ShowThemeSelector' className='btn btn-lg btn-secondary my-0 w-100 text-start' onClick={() => setShowThemeSelector(true)}>Forms</button>)
                    },
                    {
                        link: (<button id='ShowThemeSelector' className='btn btn-lg btn-secondary my-0 w-100 text-start' onClick={() => setShowThemeSelector(true)}>Icons</button>)
                    },
                    {
                        link: (<button id='ShowThemeSelector' className='btn btn-lg btn-secondary my-0 w-100 text-start' onClick={() => setShowThemeSelector(true)}>Change Theme</button>)
                    }
                ]
            } 
        }
    ]
};

function TopMenu({menuData}) {
	return (
		<Collapsible id='componentsMenu' direction='start' autoClose={true} className='h-100 theme-secondary border-top border-bottom border-end border-primary border-3 rounded-end p-0'>
			<Collapsible.Title className='btn-primary h-100 p-1 fs-3 text-decoration-none text-uppercase pt-0 vtext' style={{width: '50px'}}><i className='py-2 icon fa fa-cogs' style={{transform: 'rotate(90deg)'}}/>COMPONENTS</Collapsible.Title>
			<Collapsible.Content style={{width: '250px'}}><DisplayMenu menu={menuData} /></Collapsible.Content>
		</Collapsible>
	);
}

export default TopMenu;