import React from 'react';
import './button.scss';

const Button = ({ children, buttonType, ...otherProps}) => {
  return (
    <button className='button-container' {...otherProps}>
        {children}
    </button>
  )
}

export default Button