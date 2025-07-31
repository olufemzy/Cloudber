import { initFlowbite } from 'flowbite';
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'

const Header = () => {
   useEffect(() => {
      initFlowbite();
   }, []);

  return (
   <>  
      <nav className="bg-[#0A256D] fixed w-full z-20 top-0 start-0 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between  mx-auto p-4 py-6">
            <Link to='/' className="flex items-center space-x-3 rtl:space-x-reverse">
               <img src={logo} className="w-28" alt="Flowbite Logo" />
            </Link>
            <div className="flex md:order-2  space-x-2 items-center space- md:space-x-3 rtl:space-x-reverse">
               <Link to='/signup' className=" bg-[#FEC260] focus:outline-none font-medium rounded-md text-sm md:px-5 md:py-4 p-3  text-center ">Get started</Link>
               <Link to='/home'  className='border md:px-7 md:py-4 p-4 py-[0.63rem] text-center text-sm text-white rounded-md'>Login</Link>
              
               <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 hover:text-black rounded-md md:hidden hover:bg-[#FEC260] focus:outline-none border-2 border-gray-100 focus:ring-2 focus:ring-gray-200 dark:text-gray-400 " aria-controls="navbar-cta" aria-expanded="false">
                  <span className="sr-only">Open main menu</span>
                  <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                     <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                  </svg>
               </button>
            </div>
            <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
               <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:border-gray-700">
                  <li>
                     <Link to="/" className="block py-2 px-3 md:p-0 text-white bg-blue-700 md:hover:text-[#FEC260] rounded-sm md:bg-transparent " aria-current="page">Home</Link>
                  </li>
                  <li>
                     <Link to="/products" className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#FEC260]  dark:text-white dark:hover:bg-gray-700  md:dark:hover:bg-transparent dark:border-gray-700">Products</Link>
                  </li>
                  <li>
                     <Link to="/pricing" className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#FEC260]  dark:text-white dark:hover:bg-gray-700  md:dark:hover:bg-transparent dark:border-gray-700">Pricing</Link>
                  </li>
                  <li>
                     <Link state={{ scrollTo: 'features' }} to="/" className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#FEC260]  dark:text-white dark:hover:bg-gray-700  md:dark:hover:bg-transparent dark:border-gray-700">Features</Link>
                  </li>
               </ul>
            </div>
        </div>
      </nav>


    </>
  )
}

export default Header