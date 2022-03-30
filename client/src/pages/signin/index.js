import React, {useState} from 'react';
import { signInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase';
import FormInput from '../../components/form-input/form-input';
import Button from '../../components/button';
import './signin.scss';

const defaultFormFields = {
  email: '',
  password: '',
}

const Signin = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password} = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormFields({...formFields, [name]: value})
   };
   
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email, password
      );
      console.log(response);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('incorrect password for email');
          break;
        case 'auth/user-not-found':
          alert('no user associated with this email');
          break;
        default:
          console.log(error);
      }
    }
  } 

  return (
    <div className='signin-container'>
      <form onSubmit={handleSubmit}>
        <FormInput type='email' required value={email} name='email' onChange={handleChange} id='email' label='Email'/>
        <FormInput  type='password' required value={password} name='password' onChange={handleChange} label='password' id='password'/>
        <Button type='submit'>Login</Button>
      </form>
    </div>
  )
}

export default Signin;