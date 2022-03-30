import React from 'react';
import './form-input.scss';

const FormInput = ({label, ...otherProps}) => {
  return (
    <div className='group'>
        <input {...otherProps} className={`${otherProps.value.length ? 'highlight' : ''} form-input`}/>
        {label && (
          <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`} htmlFor={otherProps.id}>{label}</label>
        )}
    </div>
  )
};

export default FormInput;