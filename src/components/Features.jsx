import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css';

const Features = ({img, title, desc}) => {
   useEffect(() => {
      Aos.init({
         duration: 1000,
         // once: true,     //  animation should happen only once
      });
   }, []);
  return (
      <div data-aos='zoom-in' className='w-full md:w-[24%] flex flex-col justify-center items-center border-2 border-[#FEC260] p-8 rounded-md'>
         <img src={img} alt={title} className='w-10 mb-3' />
         <h2 className='font-semibold text-2xl mb-2'>{title}</h2>
         <p className='text-[#7388BD]'>
            {desc}
         </p>
      </div>
  )
}

export default Features