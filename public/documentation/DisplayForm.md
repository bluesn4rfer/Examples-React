# DisplayForm

## Overview
This component can display a single or multistep form, validate inputs & show an optional input review.  The input can be sent directly to the action script in the form or to a callback function.

## Installation
Copy component directory into your project's source directory.

#### Additional modules
No additional nodejs modules are required for this component to work.

## Configuration

#### Properties

- **form** (object): Required.  An object representing a menu.
    - **showReview** (boolean): Optional.  Default is false.
    - **steps** (array of objects): Required.
        - **title** (string): Optional.
        - **fields** (array of objects): Required.
    - **submit** (object): Required.

## Usage
```
import DisplayForm from './DisplayForm/Controller';

function App(){
    let formData = {
        "steps": [
            {
                "title": "Comment Form",
                "fields": [
                    {
                    "type": "text",
                    "name": "name",
                    "id": "name",
                    "class": "form-control",
                    "placeholder": "Enter your name",
                    "required": true,
                    "label": "Name"
                    },
                    {
                    "type": "email",
                    "name": "email",
                    "id": "email",
                    "class": "form-control",
                    "placeholder": "Enter your email",
                    "required": true,
                    "label": "Email"
                    },
                    {
                    "type": "textarea",
                    "name": "comment",
                    "id": "comment",
                    "class": "form-control",
                    "placeholder": "Enter your comment",
                    "required": true,
                    "label": "Comment"
                    }
                ]
            }						
        ],
        "submit": {
            "value": "Submit",
            "id": "submit-button",
            "class": "btn btn-primary"
        }
    };

    return(
        <DisplayForm form={formData}/>
    );
}

```
#### Output