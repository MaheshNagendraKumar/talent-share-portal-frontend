import React from 'react';
import CustomButton from '../../components/button/Button'; // Rename your custom Button
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <div className='d-flex justify-content-evenly mt-5 m-auto w-50'>
        <Link to="/login">
          <CustomButton type='button'>SignIn</CustomButton>
        </Link>
        <Link to="/register">
          <CustomButton type='button'>SignUp</CustomButton>
        </Link>
      </div>
    </div>
  );
}

export default Home;
