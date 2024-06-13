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