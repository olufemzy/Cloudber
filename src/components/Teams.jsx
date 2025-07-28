import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css';

const Teams = ({img, name, comp, testimonial}) => {
   useEffect(() => {
      Aos.init({
         duration: 1000,
         // once: true,     //  animation should happen only once
      });
   }, []);
  return (
   <div data-aos='zoom-in' className='py-5 px-7 bg-[#00103B] rounded-md teams w-full md:w-[30%]'>
      <div className='flex flex-row space-x-3 items-center mb-3'>
         <img src={img} alt='' className='h-10 w-10 object-cover object-right rounded-full'/>
         <div>
         <h1 className='font-semibold'>{name}</h1>
         <p className='text-[#7388BD]'>{comp}</p>
         </div>
      </div>
      <p className='font-normal text-sm'>
         {testimonial}
      </p>
   </div>
  )
}

export default Teams