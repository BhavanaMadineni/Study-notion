import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {toast} from "react-hot-toast"
import { AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai"

const LoginForm = ({setIsLoggedin}) => {

    const navigate = useNavigate();

    const [showPasswrd, setShowPasswrd] = useState(false);

    const [formData, setFormData] = useState({
        email:"", password:""
    })

    function changeHandler(event){
        setFormData((prevData)=>(
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ))
    }

    function submitHandler(event){
        event.preventDefault();
        toast.success("Logged In");
        navigate("/dashboard");
        setIsLoggedin(true);
    }

  return (
    <form onSubmit={submitHandler} className=' flex flex-col w-full gap-y-4 mt-6'>
        <label className=' w-full'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email Address<sup className=' text-pink-200'>*</sup></p>
            <input className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]' required name='email' type='email' value={formData.email} onChange={changeHandler} placeholder='Enter email ID'></input>
        </label>

        <label className=' w-full relative'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Password<sup className=' text-pink-200'>*</sup></p>
            <input className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]' required name='password' type={!showPasswrd? ("password"):("text")} value={formData.password} onChange={changeHandler} placeholder='Enter password'></input>
            <span className=' absolute right-3 top-[38px] cursor-pointer' onClick={()=> setShowPasswrd((prev)=>!prev)}>
                {showPasswrd?(<AiOutlineEyeInvisible fontSize={24} fill='#AFB2FB'/>):(<AiOutlineEye fontSize={24} fill='#AFB2FB'/>)}
            </span>

            <Link to="#">
                <p className='text-xs mt-1 text-blue-100 max-w-max ml-auto'>forgot password?</p>
            </Link>
        </label>

        <button className='mt-6 bg-yellow-50 hover:bg-yellow-400 transition-all duration-75 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px]'>Sign In</button>
    </form>
  )
}

export default LoginForm
