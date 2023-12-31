function App(){
    const json = 
      {
        "tag": "form",
        "props": {
          "action": "/submit",
          "method": "post"
        },
        "children": [
          {
            "tag": "label",
            "props": {
              "for": "name",
            },
            "children": "Name:"
          },
          {
            "tag": "input",
            "props": {
              "type": "text",
              "id": "name",
              "name": "name"
            }
          },
          {
            "tag": "label",
            "props": {
              "for": "email",
            },
            "children": "Email:"
          },
          {
            "tag": "input",
            "props": {
              "type": "email",
              "id": "email",
              "name": "email"
            }            
          },
          {
            "tag": "button",
            "props": {
              "type": "submit"              
            },
            "children": "Submit"
          }
        ]
      }
    ;
      
    return (<Json2Html json={json} />);
}
