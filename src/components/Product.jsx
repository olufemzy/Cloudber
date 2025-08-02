import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Product = ({img, prod, desc}) => {
   useEffect(() => {
      Aos.init({
         duration: 1000,
         // once: true,     //  animation should happen only once
      });
   }, []);
  return (
      <div data-aos="fade-up" className='w-full md:w-[40%] bg-[#0A256D] p-10 text-center rounded-md product'>
         <img src={img} alt={prod} className='my-5 mx-auto w-fit' />
         <h1 className='font-semibold text-5xl mb-3'>{prod}</h1>
         <p className='text-[1.6rem] mb-5 leading-tight'>
            {desc}
         </p>
         <Link to='#' className='block bg-[#00103B] py-2 rounded-md mb-3'>
            View Demo
         </Link>
         <Link to='#' className='block bg-[#FEC260] text-[#00103B] font-semibold py-2 rounded-md'>
            Buy Now
         </Link>
      </div>
  )
}

export default Product