import { useState } from 'react';
import ReusableForm from '../../components/form/Form';
import FormInput from '../../components/formInput/FormInput';
import Button from '../../components/button/Button';
import userApi from '../../apis/userManagement';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../../store/userReducer/userActions';
import { Link, useNavigate } from 'react-router-dom'
import { RootState } from '../../store/rootReducer';

function Login() {
  const [loginCredentials, setFormData] = useState({ userEmail: '', password: '' });
  // const user = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogin = (loginCredentials: any) => {
    console.log('Login form submitted with data:', loginCredentials);
    userApi.loginUser(loginCredentials)
      .then(res => {
        console.log("res", res.data)
        dispatch(setUser(res.data));
        navigate('/dashboard')
      })
      .catch(error => { console.log("error", error) })
    // console.log("user", user);

  };

  return (
    <div>
      <div className='m-5'>
        <ReusableForm onSubmit={handleLogin} formData={loginCredentials} setFormData={setFormData}>
          <FormInput label="User Email" name="userEmail" type="email" value={loginCredentials.userEmail} onChange={e => { setFormData({ ...loginCredentials, [e.target.name]: e.target.value }) }} />
          <FormInput label="Password" name="password" type="password" value={loginCredentials.password} onChange={e => { setFormData({ ...loginCredentials, [e.target.name]: e.target.value }) }} />
          <Button type="submit">Login</Button>
        </ReusableForm>
      </div>

      <Link to="/register" className='mt-5'>
        <Button type="button">Go to Registration</Button>
      </Link>
    </div>
  );
}

export default Login;