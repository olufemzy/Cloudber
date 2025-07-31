import React from 'react';
import { AiOutlineProduct } from 'react-icons/ai';
import { ImLab } from 'react-icons/im';
import { IoCloseCircleSharp, IoHomeOutline, IoSettingsOutline } from 'react-icons/io5';
import { TbLogs } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen, sideBarShown }) => {
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
            <Link to="#" className="bg-[#1E47B5] hover:bg-[#1E47B5] p-3 py-[0.55rem] font-semibold rounded-md flex items-center ">
               <IoHomeOutline className='inline mr-2' size={20} />
               Home
            </Link>
            <Link to="#" className=" hover:bg-[#1E47B5]  p-3 py-[0.55rem] font-semibold rounded-md flex items-center ">
               <TbLogs className='inline mr-2' size={20} />
               Logs
            </Link>
            <Link to="#" className=" hover:bg-[#1E47B5]  p-3 py-[0.55rem] font-semibold rounded-md flex items-center ">
               <ImLab className='inline mr-2' size={20} />
               Labs
            </Link>
            <Link to="#" className=" hover:bg-[#1E47B5]  p-3 py-[0.55rem] font-semibold rounded-md flex items-center ">
               <AiOutlineProduct className='inline mr-2' size={20} />
               Products
            </Link>
            <Link to="/usersettings" className=" hover:bg-[#1E47B5]  p-3 py-[0.55rem] font-semibold rounded-md flex items-center ">
               <IoSettingsOutline className='inline mr-2' size={20} />
               Settings
            </Link>
         </nav>
      </div>
  );
};

export default Sidebar;
