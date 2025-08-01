import React from 'react'
import { Link } from 'react-router-dom';

const UserSettings = () => {
   const handleSubmit = (e) => {
      e.preventDefault()
      console.log('Form submitted successfully');
   }

  return (
      <div>
         <div className='border-b border-[#1E47B5] text-white '>
            <h1 className='text-2xl font-semibold mb-1'>Settings</h1>
            <p className='text-[#7388BD] text-sm mb-8'>Manage your account settings and preferences.</p>
         </div>

         <div className='py-10 flex flex-col max-md:space-y-5 md:flex-row justify-between md:space-x-10'>
            <div className='bg-[#0A256D] rounded-md md:p-10 py-8 px-3  md:w-[50%]'>
               <h1 className='text-3xl font-semibold text-white mb-2'>Profile</h1>
               <p className='  text-[#7388BD] text-sm font-semibold mb-6'>This is how others will see you on the site.</p>
               <form onSubmit={handleSubmit} className='mb-5'>
                  <div className='flex flex-col mb-5'>
                     <label htmlFor="name" className='text-white mb-2 text-[1.1rem] font-semibold'>Name</label>
                     <input type="text" id='name' placeholder='Current User' name='username' required className='border-none rounded-md bg-[#00103B] text-white px-4' />
                  </div>
                  <div className='flex flex-col  mb-5'>
                     <label htmlFor="email" className='text-white mb-2 text-[1.1rem] font-semibold'>Email</label>
                     <input type="email" id='email' placeholder='user@cloudber.com' name='email' required className='border-none rounded-md bg-[#00103B] text-white px-4' />
                  </div>
                  
                  <button className=' bg-[#FEC260] text-[#00103B] text-sm font-semibold p-2 px-3 rounded-md'>
                     Update Profile
                  </button>
               </form>
            </div>

            <div className='bg-[#0A256D] rounded-md md:p-10 py-8 px-3  md:w-[50%]'>
               <h1 className='text-3xl font-semibold text-white mb-2'>Password</h1>
               <p className='  text-[#7388BD] text-sm font-semibold mb-6'>Update your password here. Please use a strong password.</p>
               <form onSubmit={handleSubmit} className='mb-5'>
                  <div className='flex flex-col mb-5'>
                     <label htmlFor="currentpassword" className='text-white mb-2 text-[1.1rem] font-semibold'>Current Password</label>
                     <input type="password" id='currentpassword'  name='currentpassword' required className='border-none rounded-md bg-[#00103B] text-white px-4' />
                  </div>
                  <div className='flex flex-col  mb-5'>
                     <label htmlFor="newpassword" className='text-white mb-2 text-[1.1rem] font-semibold'>New Password</label>
                     <input type="password" id='newpassword'  name='newpassword' required className='border-none rounded-md bg-[#00103B] text-white px-4' />
                  </div>
                  
                  <button className=' bg-[#FEC260] text-[#00103B] text-sm font-semibold p-2 px-3 rounded-md'>
                     Update Password
                  </button>
               </form>
            </div>
         </div>

         <div className='p-5 py-6  bg-[#0A256D] text-white rounded-md'>
            <h1 className='text-2xl font-semibold mb-1'>Preferences</h1>
            <p className='text-[#7388BD] text-sm mb-6'>Customize the application appearance and behavior.</p>
            <div className='border border-[#1E47B5] p-3 rounded-md'>
               <h2>Theme</h2>
               <p className='text-[#7388BD] text-sm'>Select the application theme</p>
            </div>
         </div>
      </div>
  )
}

export default UserSettings