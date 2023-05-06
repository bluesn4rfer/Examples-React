import React, { useState } from 'react';

import FormInput from './FormInput';

const FIELDSET = "fieldset";
const HIDDEN = "hidden";
const CHECKBOX = "checkbox";
const RADIO = "radio";
const TEXTAREA = "textarea";
const SELECT = "select";
const BTNSELECT = "btnselect";
const RANGE = "range";
const STATE = "state";
const BUTTON = "button";
const SUBMIT = "submit";
const RESET = "reset";
const IMAGE = "image";

function DisplayForm(props){
	const [state, setState] = useState();

        const handleChange = (event) => {
            console.log('DisplayForm.js handleChange(event): invoked');
            if(event.target.type != 'password'){
                        console.log('DisplayForm.js handleChange() ' + event.target.name + ': ' + event.target.value);
            }

            setState({...state,...{[event.target.name]: event.target.value}});
        };

        const handleBtnSelectChange = (input_name,input_value) => {
            setState({...state,...{[input_name]: input_value}});
        };

        const submitForm = (event) => {
                console.log('DisplayForm.js submitForm(event): invoked');
                event.preventDefault();
                console.log('DisplayForm.js submitForm() event.preventDefault() finished');

		if(!props.form.primaryBtn){
			console.log('DisplayForm.js submitForm() props.form.primaryBtn is null');
		}
		else{
	                if(!props.form.primaryBtn.action){
				console.log('DisplayForm.js submitForm() props.form.primaryBtn.action is null');
			}
			else{
	                        console.log('DisplayForm.js submitForm() state: ' + JSON.stringify(state));
	                        props.form.primaryBtn.action(state);
	                }
		}
        };

        const DisplayFieldData = (field) => {
                switch (field.type.toLowerCase()){
                        case FIELDSET:
                                let field_data = field.fields.map((record,index) => {
                                        return DisplayFieldData(record);
                                });

				let fieldset_key = 'fieldset_' + field.label.replace(/\W/g, '');

                                return (
                                        <fieldset key={fieldset_key} className={field.class ? 'mb-2 p-2 ' + field.class : 'mb-2 p-2'}>
                                                <legend>{field.label}</legend>
                                                {field_data}
                                        </fieldset>
                                );
                        case HIDDEN:
                                return (
                                        <input key={field.name} type='text' className='d-none' id={field.name} name={field.name} autoComplete={field.autocomplete} />
                                );
                        case CHECKBOX:
                                return (
                                        <div key={field.name} className='form-check form-check-inline form-switch'>
                                                <input className={field.class ? 'form-check-input ' + field.class : 'form-check-input'} id={field.name} name={field.name} type={field.type} />
                                                <label className='form-check-label' htmlFor={field.name}>{field.label}</label>
                                        </div>
                                );
                        case RADIO:
                                return (
                                        <div key={field.name} className='form-check form-check-inline'>
                                                <input className={field.class ? 'form-check-input ' + field.class : 'form-check-input'} id={field.name} name={field.name} type={field.type} />
                                                <label className='form-check-label' htmlFor={field.name}>{field.label}</label>
                                        </div>
                                );
                        case TEXTAREA:
                                return (
                                        <div key={field.name} className='mb-2 form-floating'>
                                                <textarea className={field.class ? 'form-control ' + field.class : 'form-control'} placeholder='Textarea' id={field.name} name={field.name}></textarea>
                                                <label className='textarea-label' htmlFor={field.name}>{field.label}</label>
                                        </div>
                                );
                        case SELECT:
                                let options = field.options.map((option,index) => (
                                        <option key={field.name + '_option_' + index}>{option}</option>
                                ));

                                return (
                                        <div key={field.name} className='mb-2 form-floating'>
                                                <select className={field.class ? 'form-select ' + field.class : 'form-select'} id={field.name} name={field.name}>
                                                        <option value="">--Please Select--</option>
                                                        {options}
                                                </select>
                                                <label htmlFor={field.name}>{field.label}</label>
                                        </div>
                                );
                        case BTNSELECT:
                                let btnoptions = field.options.map((option,index) => (
                                        <button key={field.name + '_option_' + index} type='button' className={state[field.name] == option ? 'mx-1 flex-fill btn btn-primary' : 'mx-1 flex-fill btn btn-secondary'} onClick={()=>handleBtnSelectChange(field.name,option)}>{option}</button>
                                ));

				let btnselect_key = 'btnselect_' + field.label.replace(/\W/g, '');

                                return (
                                        <fieldset key={btnselect_key} className='mb-2 p-1'>
                                                <legend>{field.label}</legend>
                                                <div className='mb-2 d-flex flex-wrap'>
                                                        {btnoptions}
                                                </div>
                                        </fieldset>
                                );
                        case STATE:
                                return (
                                        <div key={field.name} className='mb-2 form-floating'>
                                                <select className='form-select' id={field.name} name={field.name}>
                                                        <option value="">--Please Select--</option>
                                                        <option value="AL">Alabama</option>
                                                        <option value="AK">Alaska</option>
                                                        <option value="AZ">Arizona</option>
                                                        <option value="AR">Arkansas</option>
                                                        <option value="CA">California</option>
                                                        <option value="CO">Colorado</option>
                                                        <option value="CT">Connecticut</option>
                                                        <option value="DE">Delaware</option>
                                                        <option value="DC">District Of Columbia</option>
                                                        <option value="FL">Florida</option>
                                                        <option value="GA">Georgia</option>
                                                        <option value="HI">Hawaii</option>
                                                        <option value="ID">Idaho</option>
                                                        <option value="IL">Illinois</option>
                                                        <option value="IN">Indiana</option>
                                                        <option value="IA">Iowa</option>
                                                        <option value="KS">Kansas</option>
                                                        <option value="KY">Kentucky</option>
                                                        <option value="LA">Louisiana</option>
                                                        <option value="ME">Maine</option>
                                                        <option value="MD">Maryland</option>
                                                        <option value="MA">Massachusetts</option>
                                                        <option value="MI">Michigan</option>
                                                        <option value="MN">Minnesota</option>
                                                        <option value="MS">Mississippi</option>
                                                        <option value="MO">Missouri</option>
                                                        <option value="MT">Montana</option>
                                                        <option value="NE">Nebraska</option>
                                                        <option value="NV">Nevada</option>
                                                        <option value="NH">New Hampshire</option>
                                                        <option value="NJ">New Jersey</option>
                                                        <option value="NM">New Mexico</option>
                                                        <option value="NY">New York</option>
                                                        <option value="NC">North Carolina</option>
                                                        <option value="ND">North Dakota</option>
                                                        <option value="OH">Ohio</option>
                                                        <option value="OK">Oklahoma</option>
                                                        <option value="OR">Oregon</option>
                                                        <option value="PA">Pennsylvania</option>
                                                        <option value="RI">Rhode Island</option>
                                                        <option value="SC">South Carolina</option>
                                                        <option value="SD">South Dakota</option>
                                                        <option value="TN">Tennessee</option>
                                                        <option value="TX">Texas</option>
                                                        <option value="UT">Utah</option>
                                                        <option value="VT">Vermont</option>
                                                        <option value="VA">Virginia</option>
                                                        <option value="WA">Washington</option>
                                                        <option value="WV">West Virginia</option>
                                                        <option value="WI">Wisconsin</option>
                                                        <option value="WY">Wyoming</option>
                                                </select>
                                                <label htmlFor={field.name}>{field.label}</label>
                                        </div>
                                );
                        case IMAGE:
                                return null;
                        case BUTTON:
                                return null;
                        case SUBMIT:
                                return null;
                        case RESET:
                                return null;
                        case RANGE:
                                return (
                                        <div key={field.name} className='mb-2'>
                                                <input className={field.class ? 'form-range ' + field.class : 'form-range'}  id={field.name} name={field.name} type={field.type} />
                                                <label htmlFor={field.name}>{field.label}</label>
                                        </div>
                                );
                        default:
                                if(field.required){
                                        return (
                                                <div key={field.name} className='mb-2 form-floating'>
                                                        <input className={field.class ? 'form-control ' + field.class : 'form-control'}  id={field.name} name={field.name} type={field.type} autoComplete={field.autocomplete} onChange={handleChange} required />
                                                        <label htmlFor={field.name}>{field.label}</label>
                                                </div>
                                        );
                                }
                                else{
                                        return (
                                                <div key={field.name} className='mb-2 form-floating'>
                                                        <input className={field.class ? 'form-control ' + field.class : 'form-control'}  id={field.name} name={field.name} type={field.type} autoComplete={field.autocomplete} onChange={handleChange} />
                                                        <label htmlFor={field.name}>{field.label}</label>
                                                </div>
                                        );
                                }
                }
        };

	const primaryBtn = () => {
		console.log('DisplayForm.js primaryBtn() invoked');

		if(!props.form.primaryBtn){
			console.log('DisplayForm.js primaryBtn() props.form.primaryBtn is null');
			return null;
		}

		let btnClass = 'btn btn-primary';
		if(props.form.primaryBtn.class){
			btnClass = 'btn ' + props.form.primaryBtn.class;
		}

		let btnLabel = 'Submit';
		if(props.form.primaryBtn.label){
			btnLabel = props.form.primaryBtn.label;
		}

		return (
			<button className={btnClass}>{btnLabel}</button>
		);
	};

	const secondaryBtn = () => {
		console.log('DisplayForm.js seondaryBtn() invoked');

		if(!props.form.secondaryBtn){
			console.log('DisplayForm.js secondaryBtn() props.form.secondaryBtn is null');
			return null;
		}

		let btnClass = 'btn btn-secondary';
		if(props.form.secondaryBtn.class){
			btnClass = 'btn ' + props.form.secondaryBtn.class;
		}

		let btnLabel = 'Cancel';
		if(props.form.secondaryBtn.label){
			btnLabel = props.form.secondaryBtn.label;
		}

		return (
			<button type='button' className={btnClass} onClick={props.form.secondaryBtn.action}>{btnLabel}</button>
		);
	};

        let fields = props.form.fields.map((field, index) => {
        	return DisplayFieldData(field);
        });

        return(
                        <form onSubmit={submitForm} autoComplete='on'>
                                {fields}
{props.form.primaryBtn.type == 'wide' ?
				<div className='mb-2 d-grid'>{primaryBtn()}</div>
:
                                <div className='mb-2 row'>
					<div className='col-5 d-grid'>{secondaryBtn()}</div>
                                        <div className='col-2'></div>
                                        <div className='col-5 d-grid'>{primaryBtn()}</div>
                                </div>
}
                        </form>
	);
}

export default DisplayForm;
