import React from 'react'
import vault from '../assets/vaultprod.png'
import audit from '../assets/auditprod.png'
import policy from '../assets/policybuild.png'
import loop from '../assets/intel-loop.png'
import { Link } from 'react-router-dom'
import Userproduct from '../components/Userproduct'


const UserProducts = () => {
  return (
      <div className=' text-white'>
         <div className='lg:mb-5 max-md:my-0 mt-5 md:mt-5'> 
            <h1 className='text-4xl font-bold text-center'>Our Suite of Tools</h1>
            <p className="text-[#7388BD] text-[1.1rem] text-center">
               Everything you need to secure your cloud, from development to production.
            </p>
         </div>

         <div className='my-5 lg:my-10  flex flex-col max-md:space-y-5 md:flex-row justify-between md:space-x-10'>
            <Userproduct
               img={vault}
               prodName='VaultScan™'
               prodDesc='A powerful CLI tool for scanning your cloud vaults and key management systems for misconfigurations and vulnerabilities.'
               prodRoute='#'
            />
            <Userproduct
               img={audit}
               prodName='AutoAudit™'
               prodDesc='Continuously audit your cloud environment against compliance frameworks like SOC 2, ISO 27001, and PCI DSS.'
               prodRoute='#'
            />
         </div>
         <div className=' flex flex-col max-md:space-y-5 md:flex-row justify-between md:space-x-10'>
            <Userproduct
               img={policy}
               prodName='PolicyBuilder AI™'
               prodDesc='Leverage AI to generate human-readable security policies and infrastructure-as-code from simple prompts.'
               prodRoute='#'
            />
            <Userproduct
               img={loop}
               prodName='AccessIntel Loop™'
               prodDesc='Detect and analyze configuration drifts in real-time, with intelligent remediation suggestions to close security gaps.'
               prodRoute='#'
            />
         </div>
      </div>
  )
}

export default UserProducts