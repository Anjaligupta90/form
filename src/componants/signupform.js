import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import { toast } from 'react-hot-toast';

export const Signupform = ({ setIsLoggedIn }) => {
    const [formdata, setformdata] = useState({
        firstname: "", lastname: "", email: "", password: "", confirmpassword: ""
    });

    const [showpassword, setshowpassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [accountType, setAccountType] = useState("student");

    const navigate = useNavigate();

    function changeHandler(e) {
        setformdata((prevdata) => ({
            ...prevdata,
            [e.target.name]: e.target.value
        }));
    }

    function submitHandler(event) {
        event.preventDefault();

        // Check if password and confirm password match
        if (formdata.password !== formdata.confirmpassword) {
            toast.error("Passwords do not match!");
            return; // Prevent form submission
        }

        setIsLoggedIn(true);
        toast.success("Account created successfully");
        navigate("/dashboard"); // Use the navigate function
    }

    return (
        <div>
            <div className='flex p-1 gap-x-1 my-6 rounded-full max-w-max'>
            <button
            className={`${accountType === "student" 
            ?
              "bg-richblack-900 text-richblack-5"
            :"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
            onClick={()=> setAccountType("student")}>
                Student
            </button>

            <button
            className={`${accountType === "instructor" 
            ?
              "bg-richblack-900 text-richblack-5"
            :"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
            onClick={() => setAccountType("instructor")}>
                Instructor
            </button>
            </div>
            <form onSubmit={submitHandler}>

                <div className='flex gap-x-4 mt-[20px]'>
                    <label className='w-full'>
                        <p>First Name <sup>*</sup></p>
                        <input type="text" name="firstname" value={formdata.firstname} placeholder="Enter your first name" required 
                        onChange={changeHandler} className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]' />
                    </label>
                    <br />
                    <label>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Last Name <sup>*</sup></p>
                        <input type="text" name="lastname" value={formdata.lastname} placeholder="Enter your last name" required  
                        onChange={changeHandler} className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'/>
                    </label>
                </div>

                <div>
                    <label className='w-full'>
                        <p>Email address <sup>*</sup></p>
                        <input type="email" name="email" value={formdata.email} placeholder="Enter your email address" required 
                        onChange={changeHandler} className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]' />
                    </label>
                </div>
                <div>
                    <label className='w-full relative'>
                        <p>Create Password <sup>*</sup></p>
                        <input type={showpassword ? "text" : "password"} name="password" value={formdata.password} placeholder="Enter your password" required  
                        onChange={changeHandler} className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]' />

                        <span onClick={() => setshowpassword((prev) => !prev)}
                       className='absolute right-[-400px] top-[38px] cursor-pointer'>
                            {showpassword ? <IoEye  fontSize={24} fill='#AFB2BF'/> : <IoMdEyeOff fontSize={24} fill='#AFB2BF' />}
                        </span>
                    </label>
                    <label className='w-full relative'>
                        <p>Confirm Password <sup>*</sup></p>
                        <input type={showConfirmPassword ? "text" : "password"} name="confirmpassword" value={formdata.confirmpassword} placeholder="Enter your password again" required 
                        onChange={changeHandler} className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]' />

                        <span onClick={() => setShowConfirmPassword((prev) => !prev)}
                       className='absolute right-[50px] top-[75px] cursor-pointer'
                        >{showConfirmPassword ? <IoEye fontSize={24} fill='#AFB2BF' /> : <IoMdEyeOff fontSize={24} fill='#AFB2BF' />}
                        </span>
                    </label>
                </div>

                <div className='flex flex-col gap-y-4 mt-3'>
                    <button className='bg-blue-500 px-4 py-2 rounded-md text-white'>Create an Account</button>
                    <p>Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Login</Link></p>
                </div>
            </form>
        </div>
    );
}