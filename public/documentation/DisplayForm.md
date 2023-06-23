# DisplayForm

## Overview
This component can display a single or multistep form, validate inputs & show an optional input review.  The input can be sent directly to the action script in the form or to a callback function.

## Installation
Copy component directory into your project's source directory.

#### Additional modules
No additional nodejs modules are required for this component to work.

## Configuration

#### Properties

- **form** (array of objects): Required.  An object representing a form.  Each object in the array represents a step in filling out the form.
    - **title** (string): Optional.  This is the title of the step.  EG: Contact Information
    - **fields** (array of objects): Required.  This is array of the field objects used in this step.
- **useReview** (boolean): Optional.  Default is false.
- **btnPrevious** (object): Optional.
- **btnNext** (object): Optional.
- **btnSubmit** (object): Optional.
- **callback** (function): Optional.

#### Field Object
- **type** (string): Possible values are
    - *text*
    - *textarea*
    - *email*
    - *password*
    - *select*
    - *checkbox* WIP
    - *radio* WIP
    - *range* WIP
    - *state* WIP
    - *file* WIP
    - *fieldset* WIP
    - *hidden* WIP
    - *button*
    - *image* WIP    
- **label** (object):
    - **text** (string):
## Usage
```
import DisplayForm from './DisplayForm/Controller';

function App(){
    let form = [
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
                    "label": {
                        "text": "Name"
                    }
                },
                {
                    "type": "email",
                    "name": "email",
                    "id": "email",
                    "class": "form-control",
                    "placeholder": "Enter your email",
                    "required": true,
                    "label": {
                        "text": "Email"
                    }
                },
                {
                    "type": "textarea",
                    "name": "comment",
                    "id": "comment",
                    "class": "form-control",
                    "placeholder": "Enter your comment",
                    "required": true,
                    "label": {
                        "text": "Comment"
                    }
                }
            ]
        }						
    ];

    const btnSubmit" = {
        "value": "Comment",
        "id": "submit-button",
        "class": "btn btn-primary"
    };

    return(
        <DisplayForm form={formData} btnSubmit={btnSubmit} />
    );
}

```
#### Output