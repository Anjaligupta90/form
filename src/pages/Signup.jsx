import React from "react";
import {Template} from "../componants/template";
import signupImage from "../assets/signup.png";

function Signup(props)
  {
    let setIsLoggedIn=props.setIsLoggedIn;
  return (
   <Template
    title="Signup"
    desc1="Already have an account?"
    desc2="Login now and explore the platform"
    image={signupImage}
    formtype="signup"
    setIsLoggedIn={setIsLoggedIn}
   ></Template>
  );
}

export default Signup;
