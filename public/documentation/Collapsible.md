# Collapsible

## Overview
The Collapsible component creates a containing div, title div & content div with css classes/styles applied to allow them to collapse in a specific direction.
## Installation
Copy component directory into your project's source directory.
#### Additional modules
No additional nodejs modules are required for this component to work.

## Configuration

#### Collapsible
**properties**
- **id** (String): This will be the id of the main div and will become part of the title & content div id.
- **direction** (String): Possible values are top, down, start or end.  This will determine the direction the view should collapse.
- **autoClose** (Boolean): Default is true.  Setting this to true will cause the content div to collapse when it has lost focus or a link in the content has been clicked.  Setting this to false will leave the content window open until the title has been clicked again.

#### Collapsible.Title
Properties set on this component will pass to the title div with the exception of id which will be {parentId}Title

#### Collapsible.Content
Properties set on this component will pass to the content div with the exception of id which will be {parentId}Content.  Depending on the collapse direction, width or height should be set.

## Usage
```
import Collapsible from './Collapsible/Controller';

function App(){
    return (
        <Collapsible id="topCollapsible" direction="top" autoClose={false}>
            <Collapsible.Title>Collapsible Top</Collapsible.Title>
            <Collapsible.Content style={{height: '100px'}}>Content Here</Collapsible.Content>
        </Collapsible>
    );
}
```
#### Output
```
<div id="topCollapsible" tabindex="0" class=" d-flex flex-column-reverse">
    <div id="topCollapsibleTitle" class="" style="cursor: pointer; user-select: none;">Collapsible Top</div>
    <div id="topCollapsibleContent" class=" collapse-top collapsed" style="width: auto; height: 100px;">
        <div style="width: auto; height: 100px;">Content Here</div>
    </div>
</div>
```