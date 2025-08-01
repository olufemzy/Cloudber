import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Userproduct = ({img, prodName, prodDesc, prodRoute}) => {
  return (
   <div className='bg-[#0A256D] border border-[#1E47B5] rounded-lg md:p-5 py-5 px-3 md:w-[50%]'>
      <img src={img} alt={prodName} className='w-10 mb-7' />
      <h1 className='text-3xl font-semibold text-white mb-2'>{prodName}</h1>
      <p className='  text-gray-200 text-sm font-semibold mb-7'>{prodDesc}</p>                 
      <div className='flex flex-row space-x-2'>
         <Link to={prodRoute} className=' flex items-center bg-[#00103B] text-white text-sm font-semibold p-2 px-3 rounded-md' >
            View Demo <FaArrowRight className=' ml-2' color='white' />
         </Link>
         <button className=' bg-[#FEC260] text-[#00103B] text-sm font-semibold p-2 px-3 rounded-md'>
            Buy Now
         </button>
      </div>
   </div>
  )
}

export default Userproduct