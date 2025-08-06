import React from 'react';
import { Link } from 'react-router-dom';
import policy from '../assets/policybuild.png';

const PolicyBuilder = () => {
    return (
        <div className="text-white font-sans space-y-8 p-4 md:p-0">
            <Link to="/userproducts" className="bg-deep-blue hover:bg-blue border border-semi-light-blue text-white font-bold py-2 px-4 rounded-lg inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Products
            </Link>

            <div className="bg-blue p-4 md:p-8 rounded-lg">
                 <div className="flex flex-col md:flex-row items-center mb-6">
                    <img src={policy} alt="PolicyBuilder AI" className="h-12 w-12 md:h-10 md:w-10 mr-0 md:mr-4 flex-shrink-0 mb-4 md:mb-0" />
                    <div className="text-center md:text-left">
                        <h1 className="text-2xl md:text-3xl font-bold">PolicyBuilder AI™</h1>
                        <p className="text-light-blue mt-1">Generate human-readable security policies from simple prompts.</p>
                    </div>
                </div>

                <div className="space-y-4">
                    <label htmlFor="policy-prompt" className="block text-lg font-bold">Policy Prompt</label>
                    <textarea
                        id="policy-prompt"
                        className="w-full bg-deep-blue text-white placeholder-light-blue rounded-lg p-4 border-2 border-semi-light-blue focus:outline-none focus:ring-2 focus:ring-semi-light-blue"
                        rows="6"
                        placeholder="e.g., Generate a data retention policy for a SaaS company that handles PII. The policy should specify a 30-day retention period for user activity logs and a 1-year period for financial records."
                    ></textarea>
                    <button className="bg-gold hover:bg-opacity-80 text-black font-bold py-2.5 px-6 rounded-md flex items-center w-full md:w-auto justify-center">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.536L16.732 3.732z" />
                        </svg>
                        Generate Policy
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PolicyBuilder;
