import React from 'react'
import { Link } from 'react-router-dom'
import Product from '../components/Product'
import vault from '../assets/vaultprod.png'
import audit from '../assets/auditprod.png'
import policy from '../assets/policybuild.png'
import loop from '../assets/intel-loop.png'

const Products = () => {
  return (
      <div>
         <div className='mx-3 md:mx-[7%] py-14 mt-10 text-white'>
            <div className='mb-20 max-md:my-10 mt-10 md:mt-32'> 
               <h1 className='text-5xl font-bold text-center'>Our Suite of Tools</h1>
               <p className="text-[#7388BD] text-[1.4rem] text-center">
                  Intelligent Access. Unified Control. Zero Standing Risk.
               </p>
            </div>
            <div className='my-12 flex md:flex-wrap flex-col max-md:space-y-5 md:flex-row justify-evenly md:gap-20  text-[1.2rem]'>
               <Product img={vault} prod='VaultScan™' desc='A powerful CLI tool for scanning your cloud vaults and key management systems for misconfigurations and vulnerabilities.'/>
               <Product img={audit} prod='AutoAudit™' desc='Continuously audit your cloud environment against compliance frameworks like SOC 2, ISO 27001, and PCI DSS.'/>
               <Product img={policy} prod='PolicyBuilder AI™' desc='Leverage AI to generate human-readable security policies and infrastructure-as-code from simple prompts.'/>
               <Product img={loop} prod='AccessIntel Loop™' desc='Detect and analyze configuration drifts in real-time, with intelligent remediation suggestions to close security gaps.'/>
            </div>
            <p className='text-center italic text-[1.1rem] text-[#7388BD]'>
               He reveals deep and hidden things - Daniel 9:22
            </p>
         </div>
      </div>
  )
}

export default Products