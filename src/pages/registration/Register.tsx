import React, { useState } from 'react';
import ReusableForm from '../../components/form/Form';
import FormInput from '../../components/formInput/FormInput';
import Button from '../../components/button/Button';
import userApi from '../../apis/userManagement';
import { User } from '../../models/User'
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/userActions/userActions';
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';

function Register() {
  const [registerFormData, setRegisterFormData] = useState<User>({ fname: '', lname: '', userEmail: '', password: '', confirmPassword: '' });
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleRegister = (registerFormData: any) => {
    // console.log('Login form submitted with data:', registerFormData);
    userApi.registerUser(registerFormData)
      .then(res => {
        console.log("res", res.data)
        dispatch(setUser(res.data));
        navigate('/dashboard')
      }).catch(error => { console.log("error", error) })


  };

  return (
    <div>
      <div className='m-5'>
        <ReusableForm onSubmit={handleRegister} formData={registerFormData} setFormData={setRegisterFormData}>
          <FormInput label="First Name" name="fname" type="text" value={registerFormData.fname} onChange={e => { setRegisterFormData({ ...registerFormData, [e.target.name]: e.target.value }) }} />
          <FormInput label="Last Name" name="lname" type="text" value={registerFormData.lname} onChange={e => { setRegisterFormData({ ...registerFormData, [e.target.name]: e.target.value }) }} />
          <FormInput label="User Email" name="userEmail" type="email" value={registerFormData.userEmail} onChange={e => { setRegisterFormData({ ...registerFormData, [e.target.name]: e.target.value }) }} />
          <FormInput label="Password" name="password" type="password" value={registerFormData.password} onChange={e => { setRegisterFormData({ ...registerFormData, [e.target.name]: e.target.value }) }} />
          <FormInput label="Confirm Password" name="confirmPassword" type="password" value={registerFormData.confirmPassword} onChange={e => { setRegisterFormData({ ...registerFormData, [e.target.name]: e.target.value }) }} />
          <Button type="submit">Register</Button>
        </ReusableForm>
      </div>
      <Link to="/login" className='mt-5'>
        <Button type="button">Go to Login</Button>
      </Link>
    </div>
  );
}

export default Register