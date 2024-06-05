import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai"
import { useNavigate } from 'react-router-dom';


const SignupForm = ({ setIsLoggedin }) => {

    const navigate = useNavigate();
    const [accountType,setAccountType] =  useState("student")
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    

    const [formData, setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""
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
        if(formData.password!=formData.confirmPassword){
            toast.error("Password not matched!");
        }

        setIsLoggedin(true);
        toast.success("Account Created");
        const accountData = {
            ...formData
        };
        const finalData = {
            ...accountData,accountType
        };
        navigate("/dashboard");
    }

    

  return (
    <div>
      <div className=' flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>
        <button
         className={`${accountType === "student"
         ? " bg-richblack-900 text-richblack-5":
         " bg-transparent text-richblack-200"
         } py-2 px-5 rounded-full transition-all duration-200`  }
         onClick={()=>setAccountType("student")}>Student</button>

        <button 
         className={`${accountType === "instructor"
         ? " bg-richblack-900 text-richblack-5":
         " bg-transparent text-richblack-200"
         } py-2 px-5 rounded-full transition-all duration-200`  }
         onClick={()=>setAccountType("instructor")}>Instructor</button>
      </div>

      <form onSubmit={submitHandler}>
        <div className=' flex w-full justify-between mt-[10px]'>
            <label className=' w-full'>

                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>First Name<sup className=' text-pink-200'>*</sup></p>
                <input className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]' type='text' required name='firstName' onChange={changeHandler} placeholder='Enter first name' value={formData.firstName}></input>
            </label>

            <label className=' w-full'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'> Last Name<sup className=' text-pink-200'>*</sup></p>
                <input className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]' type='text' required name='lastName' onChange={changeHandler} placeholder='Enter last name' value={formData.lastName}></input>
            </label>
        </div>
        <div className='mt-[10px]'>
            <label className=' w-full mt-[10px]'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email Address<sup className=' text-pink-200'>*</sup></p>
                    <input className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]' type='email' required name='email' onChange={changeHandler} placeholder='Enter email id' value={formData.email}></input>
            </label>
        </div>
        
         <div className=' flex justify-between mt-[10px]'>
            <label className=' w-full relative'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Create Password<sup className=' text-pink-200'>*</sup></p>
                <input className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]' type={showPassword?("text"):("password")} required name='password' onChange={changeHandler} placeholder='Enter password' value={formData.password}></input>
                <span className=' absolute right-3 top-[38px] cursor-pointer' onClick={()=> setShowPassword((prev)=>!prev)}>
                    {showPassword?(<AiOutlineEyeInvisible fontSize={24} fill='#AFB2FB'/>):(<AiOutlineEye fontSize={24} fill='#AFB2FB'/>)}
                </span>
            </label>

            <label className=' w-full relative'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Confirm Password<sup className=' text-pink-200'>*</sup></p>
                <input className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]' type={showConfirmPassword?("text"):("password")} required name='confirmPassword' onChange={changeHandler} placeholder='Confirm password' value={formData.confirmPassword}></input>
                <span className=' absolute right-3 top-[38px] cursor-pointer' onClick={()=> setShowConfirmPassword((prev)=>!prev)}>
                    {showConfirmPassword?(<AiOutlineEyeInvisible fontSize={24} fill='#AFB2FB'/>):(<AiOutlineEye fontSize={24} fill='#AFB2FB'/>)}
                </span>
            </label>
            
         </div>

         <button className='w-full mt-6 bg-yellow-50 hover:bg-yellow-400 transition-all duration-75 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px]'>Create Account</button>
      </form>
    </div>
  )
}

export default SignupForm
