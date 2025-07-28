import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

const Footer = () => {
   let year = new Date().getFullYear()
  return (
   <div className='bg-[#0B0B14] text-[#7388BD]'>
      <div className=' py-12' style={{borderBottom: '1px solid #7388BD'}}>
         <div className='mx-3 md:mx-[5%] flex flex-col md:flex-row space-y-5 md:space-x-36' >
            <div>
               <Link to='/'>
                  <img src={logo} alt="logo" className='w-28'/>
               </Link>
               <p>Access Intelligence for the Modern Cloud.</p>
            </div>
            <div>
               <h2 className='text-white font-semibold mb-1'>Products</h2>
               <ul className='flex flex-col space-y-2'>
                  <li>
                     <Link className='hover:underline'>VaultScan<sup>TM</sup></Link>
                  </li>
                  <li>
                     <Link className='hover:underline'>AutoAudit<sup>TM</sup></Link>
                  </li>
                  <li>
                     <Link className='hover:underline'>PolicyBuilder AI<sup>TM</sup></Link>
                  </li>
                  <li>
                     <Link className='hover:underline'>AccessIntel Loop<sup>TM</sup></Link>
                  </li>
               </ul>
            </div>
            <div>
               <h2 className='text-white font-semibold mb-1'>Company</h2>
               <ul className='flex flex-col space-y-2'>
                  <li>
                     <Link className='hover:underline'>About Us</Link>
                  </li>
                  <li>
                     <Link className='hover:underline'>Careers</Link>
                  </li>
                  <li>
                     <Link className='hover:underline'>Contact</Link>
                  </li>
               </ul>
            </div>
         </div>
      </div>

      <div className='py-7' style={{borderTop: '1px solid #7388BD'}}>
         <div className='mx-3 md:mx-[5%] flex flew-row justify-between'>
            <p className='text-sm'>
               © {year} Cloudber Inc. All rights reserved.
            </p>
            <div>
               <Link></Link>
            </div>
         </div>
      </div>
   </div>
  )
}

export default Footer