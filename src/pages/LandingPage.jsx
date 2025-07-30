import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Aos from 'aos'
import 'aos/dist/aos.css';
import Features from '../components/Features';
import vaultscan from '../assets/vaultscan.png'
import audit from '../assets/bxs_flask.png'
import policy from '../assets/policybuild.png'
import stack from '../assets/tablerStack.png'
import loop from '../assets/loop.png'
import Teams from '../components/Teams';
import sarah from '../assets/sarah.jpg'
import mike from '../assets/mike.jpg'
import ada from '../assets/ada.jpg'

const LandingPage = () => {
  useEffect(() => {
      Aos.init({
        duration: 1000,
        // once: true,     //  animation should happen only once
      });
   }, []);

  return (
    <div>
      {/* HERO */}
      <div className='hero-grad py-14 mt-10' data-aos='flip-up'>
        <div className='mx-3 md:m-auto text-center md:w-[50%]'>
          <h1 className='text-4xl md:text-7xl font-bold text-[#FEC260] md:mt-48 my-6'>
            Clarity is Power. <br /> Access is Dominion
          </h1>
          <p className='text-[1.4rem] leading-tight mb-10 text-white'>
            Built for the next era of cloud security, where access is learned, audited, and enforced in one intelligent loop.
          </p>
          <Link to='/' className='mb-10 text-[1.4rem] p-6 bg-[#0A256D] text-[#FEC260] block w-fit mx-auto px-16 font-semibold rounded-md'>
            Get Started
          </Link>
          <p className='italic text-[1.1rem] text-[#7388BD]'>
            He reveals deep and hidden things - Daniel 9:22
          </p>
        </div>
      </div>
      {/*KEY FEATURES */}
      <div className='bg-[#00103B] py-14 text-white text-center'>
        <div className='mx-3 md:mx-[7%]'>
          <p className='p-3 bg-[#0A256D] rounded-md w-fit mx-auto mb-4' >Key Features</p>
          <h1 className='text-5xl font-bold mb-2'>Automate IAM, PAM and GRC with AI</h1>
          <p className="text-[#7388BD] text-[1.4rem]">
            Secure every identity, session, and model with cloud-native IAM, PAM, and AI-powered control.
          </p>
          <div className='mt-10 mb-14 flex flex-col md:flex-row max-md:space-y-3 md:space-x-3'>
            <Features img={vaultscan} title='VaultScan' desc='Scan and reveal risky IAM policies.' />
            <Features img={audit} title='Auto Audit' desc='Parse and flag privileged session paths.' />
            <Features img={policy} title='PolicyBuilder AI' desc='Prompt based policy generation, now wild cards.' />
            <Features img={stack} title='AlphaStack' desc='Automate the full access intelligence loop.' />
          </div>
          <div className='text-center w-fit mx-auto mb-16' data-aos='flip-left'>
            <img src={loop} alt="loop" />
          </div>
          <p className='italic text-[1.1rem] text-[#7388BD]'>
            He teaches my hands to war - Psalm 18:34
          </p>
        </div>
      </div>
      {/* SECURITY TEAMS */}
      <div className='sec-grad py-14 text-white '>
        <div className='mx-3 md:mx-[7%]'>
          <h1 className='text-5xl font-bold mb-2 text-center'>Trusted by Modern Security Teams</h1>
          <p className="text-[#7388BD] text-[1.4rem] text-center">
            See how leading companies are leveraging Cloudber to enhance their security posture.
          </p>
          <div className='mt-10 flex flex-col md:flex-row md:justify-between  max-md:space-y-3 md:space-x-10'>
            <Teams img={sarah} name='Sarah Ade.' comp='DevSecOps Lead, Innovate Inc'  testimonial='"Cloudber has transformed our approach to cloud security. The automated scans and drift detection save us countless hours."'/>
            <Teams img={mike} name='Mike P.' comp='GRC Manager, SecureSoft'  testimonial='"The PolicyBuilder AI is a game-changer for compliance. We generated our SOC 2 policies in a fraction of the time."'/>
            <Teams img={ada} name='Ada G.' comp='Head of Engineering, TechGurus'  testimonial='"The integrations with Slack and Teams keep our developers in the loop without context switching. Highly recommended!"'/>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default LandingPage