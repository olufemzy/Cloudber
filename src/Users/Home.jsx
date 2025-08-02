import React from 'react';
import { BellIcon } from '@heroicons/react/24/solid';

const Home = () => {
  return (
    <div className="text-white space-y-8 font-sans">
      {/* Access Level */}
      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-2">
            <div className="bg-blue p-6 rounded-lg">
              <h2 className="text-lg font-semibold mb-2 text-light-blue">Access Level</h2>
              <span className="inline-block bg-deep-blue text-white text-sm font-semibold px-3 py-1 rounded-full mb-2">Developer</span>
              <p className="text-light-blue">Your current access permissions</p>
            </div>
        </div>
      </div>

      {/* Recent Activity and Notifications */}
      <div className="flex gap-8">
        <div className="w-[55%]">
          <div className="bg-blue p-6 rounded-lg h-full">
            <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
            <ul>
              <li className="flex justify-between items-center mb-4 pb-4">
                <div>
                  <p>Accessed 'prod-db-cluster'</p>
                  <p className="text-light-blue text-sm">by you</p>
                </div>
                <span className="text-light-blue">2m ago</span>
              </li>
              <li className="flex justify-between items-center mb-4 pb-4">
                <div>
                  <p>Policy 'aws-s3-public-read' failed</p>
                  <p className="text-light-blue text-sm">by autoaudit-cli</p>
                </div>
                <span className="text-light-blue">1h ago</span>
              </li>
              <li className="flex justify-between items-center mb-4 pb-4">
                <div>
                  <p>Granted 'read-only' to new_user</p>
                  <p className="text-light-blue text-sm">by you</p>
                </div>
                <span className="text-light-blue">3h ago</span>
              </li>
              <li className="flex justify-between items-center">
                <div>
                  <p>Drift detected in 'prod-vpc'</p>
                  <p className="text-light-blue text-sm">by vaultscan-cli</p>
                </div>
                <span className="text-light-blue">5h ago</span>
              </li>
            </ul>
            <button className="w-full mt-6 bg-deep-blue hover:bg-opacity-80 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center">
              View All <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </button>
          </div>
        </div>

        <div className="w-[45%]">
          <div className="bg-blue p-6 rounded-lg h-full">
            <div className="flex items-center mb-4">
              <BellIcon className="h-6 w-6 mr-3" />
              <h2 className="text-xl font-bold">Notifications</h2>
            </div>
            <ul>
              <li className="mb-4">
                <div className="flex justify-between items-start">
                  <p className="font-semibold">High Risk Alert</p>
                  <span className="bg-strong-red text-white text-xs font-bold px-2 py-1 rounded-full">High</span>
                </div>
                <p className="text-light-blue text-sm mt-1">Public S3 bucket detected in 'aws-account-1'</p>
              </li>
              <li className="mb-4">
                <p className="font-semibold">Access Request</p>
                <p className="text-light-blue text-sm mt-1">User 'dev-team@' requests access to 'staging-redis'</p>
              </li>
              <li className="mb-4">
                <div className="flex justify-between items-start">
                  <p className="font-semibold">Compliance Scan Complete</p>
                  <span className="bg-semi-light-blue text-white text-xs font-bold px-2 py-1 rounded-full">Medium</span>
                </div>
                <p className="text-light-blue text-sm mt-1">SOC 2 Type II scan passed with 3 minor issues.</p>
              </li>
              <li className="mb-4">
                <p className="font-semibold">Access Request</p>
                <p className="text-light-blue text-sm mt-1">User 'dev-team@' requests access to 'staging-redis'</p>
              </li>
              <li>
                <p className="font-semibold">Risk Alert</p>
                <p className="text-light-blue text-sm mt-1">Public S3 bucket detected in 'aws-account-1'</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* AI Assistant */}
      <div className="bg-blue p-6 rounded-lg">
          <div className="flex items-center mb-4">
              <svg className="h-8 w-8 mr-3" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 13.4545V10C6 8.93913 6.42143 7.92172 7.17157 7.17157C7.92172 6.42143 8.93913 6 10 6H22C23.0609 6 24.0783 6.42143 24.8284 7.17157C25.5786 7.92172 26 8.93913 26 10V13.4545" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 22L4 26" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M26 22L28 26" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 26H20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 6V2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 28V26" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <rect x="3" y="13" width="26" height="10" rx="2" stroke="white" strokeWidth="2"/>
              </svg>
              <h2 className="text-xl font-bold">AI Assistant</h2>
          </div>
          <p className="text-light-blue mb-4">Get AI-powered security recommendations for your cloud environment.</p>

          <div className="mb-4">
              <label htmlFor="cloud-env" className="block text-sm font-medium text-white mb-2">Cloud Environment Description</label>
              <textarea id="cloud-env" rows="3" className="w-full bg-deep-blue border border-semi-light-blue rounded-lg p-2 text-white placeholder-light-blue" placeholder="e.g. AWS environment with 3 VPCs, using EKS for container orchestration and RDS for databases. IAM roles are managed manually."></textarea>
          </div>

          <div className="mb-4">
              <label htmlFor="security-events" className="block text-sm font-medium text-white mb-2">Recent Security Events (Optional)</label>
              <textarea id="security-events" rows="3" className="w-full bg-deep-blue border border-semi-light-blue rounded-lg p-2 text-white placeholder-light-blue" placeholder="e.g. Unexplained outbound traffic from a container, multiple failed login attempts on a developer account."></textarea>
          </div>
          
          <button className="bg-yellow-500 hover:bg-opacity-80 text-black font-bold py-2 px-4 rounded-lg">
              Get Recommendations
          </button>
      </div>
    </div>
  );
};

export default Home;
