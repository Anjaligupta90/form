import React from 'react';
import {Template} from '../componants/template';
import loginImage from '../assets/login.png';

function Login(props) {
  let setIsLoggedIn = props.setIsLoggedIn
  return (
     <Template
      title="Login"
      desc1="New to our platform?"
      desc2="Signup now and explore the platform"
      image={loginImage}
      formtype="login"
      setIsLoggedIn={setIsLoggedIn}
      ></Template>
  );
}

export default Login;
