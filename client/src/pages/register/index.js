import React, {useState} from 'react';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase';
import FormInput from '../../components/form-input/form-input';
import Button from '../../components/button';
import './register.scss';

const defaultFormFields = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const Register = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {firstName, lastName, email, password, confirmPassword} = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormFields({...formFields, [name]: value})
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const displayName = firstName + lastName;
        if(password !== confirmPassword) {
            alert('passswords do not match');
            return;
        }
        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, {displayName, firstName, lastName});
            resetFormFields();
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email already in use');
              } else {
                console.log('user creation encountered an error', error);
              }
        }
    }
  return (
    <div className='register-container'>
        <form onSubmit={handleSubmit}>
            <FormInput 
                label="First Name" 
                type = 'text' 
                required 
                onChange={handleChange} 
                name='firstName'
                value={firstName}
                id='firstName'
            />
             <FormInput 
                label="Last Name" 
                type = 'text' 
                required 
                onChange={handleChange} 
                name='lastName'
                value={lastName}
                id='lastName'
            />
             <FormInput 
                label="Email" 
                type = 'email' 
                required 
                onChange={handleChange} 
                name='email'
                value={email}
                id='email'
            />
             <FormInput 
                label="Password" 
                type = 'password' 
                required 
                onChange={handleChange} 
                name='password'
                value={password}
                id='password'
            />
             <FormInput 
                label="Confirm Password" 
                type = 'password' 
                required 
                onChange={handleChange} 
                name='confirmPassword'
                value={confirmPassword}
                id='confirmPassword'
            />
            <Button type='submit'>Sign up</Button>
        </form>
    </div>
  )
}

export default Register