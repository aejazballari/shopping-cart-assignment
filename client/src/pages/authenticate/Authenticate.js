import React from 'react';
import './authenticate.scss';

const Authenticate = ({children, name, desc}) => {
  return (
    <div className='login'>
        <div className='login-desc'>
            <h2>{name}</h2>
            <p>{desc}</p>
        </div>
        <div className='auth'>
            {children}
        </div>
    </div>
  )
}

export default Authenticate