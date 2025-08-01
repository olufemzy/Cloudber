import React from 'react';
import { AiOutlineProduct } from 'react-icons/ai';
import { ImLab } from 'react-icons/im';
import { IoCloseCircleSharp, IoHomeOutline, IoSettingsOutline } from 'react-icons/io5';
import { TbLogs } from 'react-icons/tb';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ isOpen, sideBarShown }) => {

   const getNavLinkClass = (isActive) =>
      isActive
      ? 'bg-[#1E47B5]'
      : '';

  return (
      <div className={`fixed z-30 inset-y-0 left-0 bg-[#0A256D] text-white w-72  lg:mt-24 transform 
         ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
         transition-transform duration-300 ease-in-out lg:translate-x-0 static lg:inset-0`}
         >
         {isOpen && 
            <div className="p-2 font-bold text-xl  text-right lg:hidden ">
               <button onClick={sideBarShown}>
                  <IoCloseCircleSharp color='#FEC260' size='30' />
               </button>
            </div>
         }
         <nav className="p-4 space-y-2">
            <NavLink to='/home' className={({ isActive }) =>`${getNavLinkClass(isActive)} hover:bg-[#1E47B5] p-3 py-[0.55rem] font-semibold rounded-md flex items-center`}>
               <IoHomeOutline className='inline mr-2' size={20} />
               Home
            </NavLink>
            <NavLink to="/" className={({ isActive }) =>`${getNavLinkClass(isActive)} hover:bg-[#1E47B5] p-3 py-[0.55rem] font-semibold rounded-md flex items-center`}>
               <TbLogs className='inline mr-2' size={20} />
               Logs
            </NavLink>
            <NavLink to="/" className={({ isActive }) =>`${getNavLinkClass(isActive)} hover:bg-[#1E47B5] p-3 py-[0.55rem] font-semibold rounded-md flex items-center`}>
               <ImLab className='inline mr-2' size={20} />
               Labs
            </NavLink>
            <NavLink to="/userproducts" className={({ isActive }) =>`${getNavLinkClass(isActive)} hover:bg-[#1E47B5] p-3 py-[0.55rem] font-semibold rounded-md flex items-center`}>
               <AiOutlineProduct className='inline mr-2' size={20} />
               Products
            </NavLink>
            <NavLink to="/usersettings" className={({ isActive }) =>`${getNavLinkClass(isActive)} hover:bg-[#1E47B5] p-3 py-[0.55rem] font-semibold rounded-md flex items-center`}>
               <IoSettingsOutline className='inline mr-2' size={20} />
               Settings
            </NavLink>
         </nav>
      </div>
  );
};

export default Sidebar;
