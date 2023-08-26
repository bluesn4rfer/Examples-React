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
    - **fields** (array of objects): Required.  This is an array of field objects used in this step.
- **useReview** (boolean): Optional.  Default is false.
- **buttons** (object): Optional.
    - **previous** (object): Optional.  This object represents the previous button's properties
    - **next** (object): Optional.  This object represents the next button's properties
    - **submit** (object): Optional.  This object represents the submit button's properties
- **callback** (function): Optional.

#### Field Object
- **type** (string): Possible values are
    - *text*
    - *textarea*
    - *email*
    - *password*
    - *select*
    - *checkbox*
    - *radio*
    - *range*
    - *state* WIP
    - *file*
    - *hidden*
    - *button* 
- **label** (object):
    - **text** (string):
- **input** (object):
- **textarea** (object):
- **select** (object):
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
                    "input": {
                        "name": "name",
                        "id": "name",
                        "class": "form-control",
                        "placeholder": "Enter your name",
                        "required": true
                    },
                    "label": {
                        "text": "Name"
                    }
                },
                {
                    "type": "email",
                    "input": {
                        "name": "email",
                        "id": "email",
                        "class": "form-control",
                        "placeholder": "Enter your email",
                        "required": true
                    },
                    "label": {
                        "text": "Email"
                    }
                },
                {
                    "type": "textarea",
                    "textarea":{
                        "name": "comment",
                        "id": "comment",
                        "class": "form-control",
                        "placeholder": "Enter your comment",
                        "required": true
                    },
                    "label": {
                        "text": "Comment"
                    }
                }
            ]
        }						
    ];

    const buttons = {
        "submit": {
            "value": "Comment",
            "id": "submit-button",
            "class": "btn btn-primary"
        }
    };

    return(
        <DisplayForm form={form} buttons={buttons} />
    );
}

```
#### Output