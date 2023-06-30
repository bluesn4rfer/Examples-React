import React from 'react';

function FormImage({image, callback}){
    console.log('Forms/views/FormImage.js FormImage() invoked');
    console.debug('Forms/views/FormImage.js: FormImage() button = '+JSON.stringify(image));

    const {id, label = {}, type, value, onClick, ...props} = image;
    const {text: labelText, ...labelProps} = label;

    return (
        <>
            <label htmlFor={id} {...labelProps}>{labelText}</label>
            <input
                type='image'
                id={id}
                onClick={callback}
                {...props}
                value={value} 
            />
        </>
    );
};

export default FormImage;