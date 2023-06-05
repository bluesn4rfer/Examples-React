# DisplayMenu

## Overview
The DisplayMenu component generates the ul / li tags used for menus. Classes/styles/other properties can be passed to the ul / li tags & you are fully able to control the link.

## Installation
Copy component directory into your project's source directory.
#### Additional modules
No additional nodejs modules are required for this component to work.
## Configuration
All configuration of this component is done through the menu property.

#### Properties

- **menu** (object): Required.  An object representing a menu.  This is the ul tag.  Additional properties not defined below will be applied to the ul tag.
    - **links** (array): Required.  An array of link objects.  Each object in this array represents an li tag.  Additional properties not defined below will be applied to the li tag.
        - **link** (string): Required.  A string representing the html inside of the li tag.  Usually this will be an anchor tag with text but it maybe different based on your application.
        - **menu** (object): Optional.  An object representing a menu.  

## Usage
```
import DisplayMenu from './DisplayMenu/Controller.js';

function App(){
    const menuObj = {
        links: [
            {
                link: (<a href="link1">Link1</a>)
            },
            {
                link: (<a href="link2">Link2</a>)
            },
            {
                link: (<a href="link3">Link3</a>)
            }
        ]
    }

    return (
        <DisplayMenu menu={menuObj} />
    );
}

```

#### Output
```
<ul>
    <li><a href="link1">Link1</a></li>
    <li><a href="link2">Link2</a></li>
    <li><a href="link3">Link3</a></li>
</ul>
```