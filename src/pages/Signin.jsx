import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'
import { FaEye, FaRegEyeSlash } from 'react-icons/fa'

const Signin = () => {
   const [visible, setVisible] = useState(false)
    const navigate = useNavigate(); 

   const [formData, setFormData] = useState({
         email: '', 
         password : ''
      })
      const[errors, setErrors] = useState({})
   
      const handleChange = (e) =>{
         const {id, value} = e.target
         setFormData({
            ...formData,
            [id] : value
         })
      }
   
      const validate = () => {
         let tempErrors = {};
   
         if (!formData.email) {
           tempErrors.email = 'Email is required';
         } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
           tempErrors.email = 'Email is invalid';
         }
     
         if (!formData.password) {
           tempErrors.password = 'Password is required';
         } else if (formData.password.length < 8) {
           tempErrors.password = 'Password must be at least 8 characters';
         }
     
         setErrors(tempErrors);
         return Object.keys(tempErrors).length === 0;
      };
   
      
      const handleSubmit = (e) => {
         e.preventDefault()
         if(validate()){
            setFormData({
               username: '', 
               email: '', 
               password : ''
            })
            navigate('/home')
            console.log('form errors', errors);
            console.log('form subitted', formData);
         }
      }


  return (
   <div className=' mx-3 pt-0 pb-10 md:pt-10 md:pb-20  md:w-[45%] flex flex-col items-center  space-y-5 md:mx-auto'>
      <Link to='/'>
         <img src={logo} alt="logo" className='w-40 md:my-10 my-6' />
      </Link>
      <div className='bg-[#0A256D] rounded-md md:p-10 py-8 px-3  w-full'>
         <h1 className=' text-center text-3xl font-semibold text-white mb-2'>Welcome Back</h1>
         <p className=' text-center text-[#7388BD] text-[1.3rem] font-semibold mb-6'>Enter your credentials to access your account.</p>
         <form onSubmit={handleSubmit} className='mb-10'>
            <div className='flex flex-col '>
               <label htmlFor="email" className='text-white mb-2 text-[1.1rem] font-semibold'>Email</label>
               <input type="email" id='email' placeholder='user@gmail.com' name='email'  className='border-none rounded-md bg-[#00103B] text-white px-4 mb-4' 
                  value={formData.email}
                  onChange={handleChange}
               />
               {/* email error */}
               {errors &&  <span className='text-red-700 text-sm '>{errors.email}</span> }
               <Link to='#' className='text-right text-white text-sm underline'>Forgot your password</Link>
            </div>
            <div className='flex flex-col mb-10'>
               <label htmlFor="password" className='text-white mb-2 text-[1.1rem] font-semibold'>Password</label>
               <div className=' flex flex-row space-x-3 w-full rounded-md bg-[#00103B] items-center text-white px-4 '>
                  <input type={visible ? "text" : "password"} id='password' placeholder='**********' name='password'  className='px-0 border-none w-full bg-transparent ' 
                     value={formData.password}
                     onChange={handleChange}
                  />
                  <span onClick={() => setVisible(!visible)} className='cursor-pointer' >
                     {visible 
                        ? <FaRegEyeSlash color='#FEC260' size='23'/>
                        : <FaEye color='#FEC260' size='23'/>
                     }
                  </span>
               </div>
               {/* password error */}
               {errors &&  <span className='text-red-700 text-sm '>{errors.password}</span> }
            </div>
            <button className='w-full bg-[#FEC260] text-[#00103B] text-[1.2rem] font-semibold py-2 rounded-md'>
               Log In
            </button>
         </form>
         <Link to='/signup' className='underline w-fit mx-auto text-center block text-sm text-white'>
            Don't have an account? Sign up
         </Link>
      </div>
   </div>      
  )
}

export default Signin