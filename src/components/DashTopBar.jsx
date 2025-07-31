import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';
import { IoMoonOutline } from 'react-icons/io5';
import profile from '../assets/profile.jpg'

const DashTopBar = ({ toggleSidebar }) => (
  <header className="bg-[#0A256D] w-full h-24 flex items-center shadow border-b  border-[#1E47B5] fixed z-[20] top-0 ">
      <div className='mx-3 md:mx-7 flex items-center w-full  justify-between'>
         <div className='flex items-center space-x-3 '>
            <button onClick={toggleSidebar} className=" text-gray-200 text-2xl  lg:hidden">
               ☰
            </button>
            <Link to='/'>
               <img src={logo} alt="logo" className='w-24' />
            </Link>
         </div>
         <div className='flex flex-row items-center space-x-3'>
            <IoMoonOutline size='25' color='white' />
            <img src={profile} alt="profile" className='w-10 h-10 object-cover rounded-full'  />
         </div>
      </div>
  </header>
);

export default DashTopBar