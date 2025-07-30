import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { FaEye, FaRegEyeSlash } from 'react-icons/fa'

const Signin = () => {
   const [visible, setVisible] = useState(false)

   const handleSubmit = (e) => {
      e.preventDefault()
      console.log('Form submitted successfully');
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
            <div className='flex flex-col'>
               <label htmlFor="email" className='text-white mb-2 text-[1.1rem] font-semibold'>Email</label>
               <input type="email" id='email' placeholder='user@gmail.com' name='email' required className='border-none rounded-md bg-[#00103B] text-white px-4 mb-4' />
               <Link to='#' className='text-right text-white text-sm underline'>Forgot your password</Link>
            </div>
            <div className='flex flex-col mb-10'>
               <label htmlFor="password" className='text-white mb-2 text-[1.1rem] font-semibold'>Password</label>
               <div className=' flex flex-row space-x-3 w-full rounded-md bg-[#00103B] items-center text-white px-4 '>
                  <input type={visible ? "text" : "password"} id='password' placeholder='**********' name='password' required className='px-0 border-none w-full bg-transparent ' />
                  <span onClick={() => setVisible(!visible)} className='cursor-pointer' >
                     {visible 
                        ? <FaRegEyeSlash color='#FEC260' size='23'/>
                        : <FaEye color='#FEC260' size='23'/>
                     }
                  </span>
               </div>
            </div>
            <button to='#' className='w-full bg-[#FEC260] text-[#00103B] text-[1.2rem] font-semibold py-2 rounded-md'>
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