import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import { MdDone } from 'react-icons/md';


const PricingPage = () => {
   useEffect(() => {
      Aos.init({
         duration: 1000,
         // once: true,     //  animation should happen only once
      });
   }, []);

  return (
      <div>
         <div className='mx-3 md:mx-[7%] py-14 mt-10 text-white'>
            <div className='mb-20 max-md:my-10 mt-10 md:mt-32'> 
               <h1 className='text-5xl font-bold text-center mb-9'>Simple, transparent pricing</h1>
               <p className="text-[#7388BD] text-[1.4rem] text-center">
                  Choose the plan that's right for you.
               </p>
            </div>
            {/* PRICES */}
            <div className='flex md:flex-row flex-col justify-center md:space-x-10 max-md:space-y-5'>
               <div data-aos='flip-right' className='rounded-md px-7 py-3   hover:border-2 hover:border-[#FEC260] bg-[#0A256D] md:w-[30%] flex flex-col justify-between'>
                  <div className='mb-6'>
                     <h2 className='font-semibold mb-3 text-2xl'>Developer</h2>
                     <p className='mb-6 text-[#7388BD] text-xl leading-tight'>For individual developers and small projects.</p>
                     <h1 className='text-4xl font-bold mb-6'>Free</h1>
                     <ul className='flex flex-col space-y-2'>
                        <li><MdDone className='inline mr-1' color='#FEC260' size='24' /> Manual Vault & IAM Scans</li>
                        <li><MdDone className='inline mr-1' color='#FEC260' size='24' />Manual Vault & IAM Scans</li>
                        <li><MdDone className='inline mr-1' color='#FEC260' size='24' />10 Scans Per Month</li>
                     </ul>
                  </div>
                  <Link to='#' className=' text-[1.1rem] border border-[#7388BD] block text-center bg-[#00103B] py-2 rounded-md mb-3 hover:bg-[#FEC260] hover:text-[#00103B] font-semibold'>
                     Get Started
                  </Link>
               </div>

               <div data-aos='flip-right' className='rounded-md px-7 py-3 border-2 border-[#0A256D] hover:border-2 hover:border-[#FEC260] bg-[#0A256D] md:w-[30%] flex flex-col justify-between'>
                  <div className='mb-6'>
                     <h2 className='font-semibold mb-3 text-2xl'>Pro</h2>
                     <p className='mb-6 text-[#7388BD] text-xl leading-tight'>For professional developers and teams.</p>
                     <h1 className='text-4xl font-bold mb-6'>$99<span className='text-[#7388BD] text-sm'>/month</span></h1>
                     <ul className='flex flex-col space-y-2'>
                        <li><MdDone className='inline mr-1' color='#FEC260' size='24' /> Everything in Developer</li>
                        <li><MdDone className='inline mr-1' color='#FEC260' size='24' />Automated CI/CD Scans</li>
                        <li><MdDone className='inline mr-1' color='#FEC260' size='24' />Automated CI/CD Scans</li>
                        <li><MdDone className='inline mr-1' color='#FEC260' size='24' />Email & Chat Support</li>
                     </ul>
                  </div>
                  <Link to='#' className='text-[1.1rem] border border-[#7388BD] block text-center bg-[#00103B] py-2 rounded-md mb-3 hover:bg-[#FEC260] hover:text-[#00103B] font-semibold'>
                     Buy Now
                  </Link>
               </div>

               <div data-aos='flip-right' className='rounded-md px-7 py-3 border-2 border-[#0A256D] hover:border-2 hover:border-[#FEC260] bg-[#0A256D] md:w-[30%] flex flex-col justify-between'>
                  <div className='mb-6'>
                     <h2 className='font-semibold mb-3 text-2xl'>Enterprise</h2>
                     <p className='mb-6 text-[#7388BD] text-xl leading-tight'>For large organizations with advanced needs.</p>
                     <h1 className='text-4xl font-bold mb-6'>Custom</h1>
                     <ul className='flex flex-col space-y-2'>
                        <li><MdDone className='inline mr-1' color='#FEC260' size='24' /> Everything in Pro</li>
                        <li><MdDone className='inline mr-1' color='#FEC260' size='24' />Custom Integrations</li>
                        <li><MdDone className='inline mr-1' color='#FEC260' size='24' />Dedicated Support</li>
                        <li><MdDone className='inline mr-1' color='#FEC260' size='24' />On-premise Deployment</li>
                     </ul>
                  </div>
                  <Link to='#' className='text-[1.1rem] border border-[#7388BD] block text-center bg-[#00103B] py-2 rounded-md mb-3 hover:bg-[#FEC260] hover:text-[#00103B] font-semibold'>
                    Contact Sales
                  </Link>
               </div>
            </div>
         </div>
      </div>
  )
}

export default PricingPage