import React from 'react';

function InputHidden({ input }){
    console.log('Forms/views/InputHidden.js InputHidden() invoked');
    console.debug('Forms/views/InputHidden.js: InputHidden() input = '+JSON.stringify(input));

    const {type, ...inputProps} = input;

    return (
        <input
            type='hidden'
            {...inputProps}
        />
    );
};

export default InputHidden;