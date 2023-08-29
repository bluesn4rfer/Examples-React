function App(){
    const json = {
        "form": {
          "action": "/submit",
          "method": "post",
          "children": [
            {
              "label": {
                "for": "name",
                "children": "Name:"
              }
            },
            {
              "input": {
                "type": "text",
                "id": "name",
                "name": "name"
              }
            },
            {
              "label": {
                "for": "email",
                "children": "Email:"
              }
            },
            {
              "input": {
                "type": "email",
                "id": "email",
                "name": "email"
              }
            },
            {
              "button": {
                "type": "submit",
                "children": "Submit"
              }
            }
          ]
        }
    };
      
    return (<Json2Html json={json} />);
}
