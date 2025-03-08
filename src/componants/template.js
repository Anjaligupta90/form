import React from 'react'
import { Loginform } from './loginform'
import { Signupform } from './signupform'
import frameImage from "../assets/frame.png"
import {FcGoogle} from "react-icons/fc"

export const Template = ({title,desc1,desc2,image,formtype,setIsLoggedIn}) => {
  return (

<div className='flex justify-evenly py-12 gap-x-12 gap-y-0 bg-richblack-900 w-[100%]'>
    
 <div className='ml-12'>
<h1 className='text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]' >{title}</h1>
<p>
    <span>{desc1}</span>
    <span>{desc2}</span>
</p>

{
    formtype==="signup" ?
    (<Signupform setIsLoggedIn={setIsLoggedIn}/>):
    (<Loginform setIsLoggedIn={setIsLoggedIn}/>) 
}

<div className='flex w-full items-center my-4 gap-x-2'>

 <div className='w-full h-[1px] bg-richblack-700'></div>
 <p lassName='text-richblack-700 font-medium leading[1.375rem]'>Or</p>
 <div className='w-full h-[1px] bg-richblack-700'></div>

</div>
<button className='w-full flex justify-center items-center rounded-[8px] font-medium text-richblack-100
            border border-richblack-700 px-[12px] py-[8px] gap-x-2 mt-6 '> <FcGoogle/>
            Signup with google</button>

 </div>
 <div className='relative w-96 h-[350px] mr-12'>
    <img src={frameImage} alt="pattern" width={550} height={500} loading='lazy' className='w-[100%] h-[100%] object-cover' ></img>
    <img src={image} alt="studentimg" width={550} height={504} loading='lazy' className='absolute top-[25px] right-[25px] '></img>
 </div>

    </div>
  )
}
