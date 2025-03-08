import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';  

export const Loginform = ({setIsLoggedIn}) => {
    const [formdata, setformdata] = useState({
        email: "",password: "" });

        const[showpassword, setshowpassword] = useState(false);
        const navigate = useNavigate();
        function handleChange(e) {
            setformdata((prevdata)=>
            (
               {
                ...prevdata,
                [e.target.name]:e.target.value
               }
            ))
        }
        
        function submitHandler(event)
        {
           event.preventDefault();
           setIsLoggedIn(true);
           toast.success("Logged in successfully");
          navigate("/dashboard");
        }


  return (
    <form onSubmit={submitHandler}>
        <label className='relative w-full'>
        <p>Email address <sup>*</sup></p>
        <input type="email" name='email' value={formdata.email} placeholder="Enter your email address" required 
        onChange={handleChange} className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] relative'></input>
        </label>
        <br/>
       <label className='relative w-full'>
       <p>Password <sup>*</sup></p>
        <input type={showpassword? ("text"):("password")} name='password' value={formdata.password}  placeholder="Enter your password"
         required onChange={handleChange} className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'></input>
       
        <span onClick={()=>setshowpassword((prev)=>!prev)}
        className='absolute right-[-400px] top-[38px] cursor-pointer'>
         {showpassword ? <IoEye fontSize={24} fill='#AFB2BF' /> : <IoMdEyeOff fontSize={24} fill='#AFB2BF' />}
        </span>

        <Link to="#">
            <p>Forgot Password</p>
        </Link>
        </label>
       
        <button onSubmit={submitHandler} className='bg-blue-500 px-4 py-2 rounded-md text-white border-richblack-700'>Signup</button>

    </form>
  )
}
