import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../assets/Logo.svg";
import { toast } from 'react-hot-toast';


export const Navbar = (props) =>
 {

   let isLoggedIn=props.isLoggedIn;
   let setIsLoggedIn=props.setIsLoggedIn;

  return (
    <div className='flex justify-evenly items-center w-[100%] py-4 bg-richblack-900 text-white  mx-auto border-b border-richblack-700'>
    <Link to="/">
    <img src={logo} alt="logo"  width={160} height={32} loading='lazy'/>
    </Link>

    <nav>
       <ul className='flex gap-x-6 text-richblack-100'>
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/">About</Link>
            </li>
            <li>
            <Link to="/">Contact</Link>
            </li>
       </ul> 
    </nav>

    {/* button */}
    <div className='flex gap-x-4 items-center'>

  { !isLoggedIn &&
    <Link to="login"> <button className='bg-richblack-800 px-4 py-2 rounded-md text-white border-richblack-700'
    >Log in</button> </Link> 
  }

  { !isLoggedIn &&
    <Link to="signup"> <button className='bg-richblack-800 px-4 py-2 rounded-md text-white border-richblack-700'
    >Sign up</button> </Link>
  }

   { isLoggedIn &&
    <Link to="/"> <button className='bg-richblack-800 px-4 py-2 rounded-md text-white border-richblack-700'
    onClick={()=> 
   {
    setIsLoggedIn(false)
    toast.success("Logged out successfully")
   }
    }>
    Log out</button>
    </Link>
   }

  { isLoggedIn &&
    <Link to="/Dashboard"> <button className='bg-richblack-800 px-4 py-2 rounded-md text-white border-richblack-700'>
    Dashboard</button> </Link>
  }

 </div>
    </div>
  )
}
export default Navbar;