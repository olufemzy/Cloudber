import React from 'react';

const Logs = () => {
  const logs = [
    { timestamp: '2024-05-21 10:00:00', user: 'admin@cloudber.com', action: 'Logged in', risk: 'Low' },
    { timestamp: '2024-05-21 09:45:12', user: 'user@cloudber.com', action: 'Accessed production database', risk: 'High' },
    { timestamp: '2024-05-21 09:30:00', user: 'audit_script', action: 'Ran VaultScan on aws-prod', risk: 'Low' },
    { timestamp: '2024-05-21 09:25:33', user: 'user@cloudber.com', action: 'Failed login attempt', risk: 'Medium' },
    { timestamp: '2024-05-21 09:15:05', user: 'ci-cd-pipeline', action: 'Deployed new version to staging', risk: 'Low' },
    { timestamp: '2024-05-21 09:05:45', user: 'external_user@partner.com', action: 'Accessed shared_s3_bucket', risk: 'Medium' },
    { timestamp: '2024-05-21 08:55:19', user: 'admin@cloudber.com', action: "Changed user permissions for 'user@cloudber.com'", risk: 'High' },
    { timestamp: '2024-05-21 08:45:00', user: 'user@cloudber.com', action: 'Viewed billing page', risk: 'Low' },
    { timestamp: '2024-05-21 09:30:00', user: 'audit_script', action: 'Ran VaultScan on aws-prod', risk: 'Low' },
  ];

  const getRiskClass = (risk) => {
    switch (risk) {
      case 'High':
        return 'bg-strong-red text-white';
      case 'Medium':
        return 'bg-semi-light-blue text-white';
      default:
        return 'border border-semi-light-blue text-white';
    }
  };

  return (
    <div className="text-white font-sans">
      <div className="bg-blue p-8 rounded-lg">
        <h1 className="text-3xl font-bold">Access Logs</h1>
        <p className="text-light-blue mt-2 mb-6">A detailed record of all activities within your organization.</p>
        
        <div className="flex items-center mb-6">
          <input 
            type="text" 
            placeholder="Filter logs..."
            className="w-96 bg-deep-blue text-white placeholder-light-blue px-4 py-2.5 rounded-md border-2 border-semi-light-blue focus:outline-none focus:ring-2 focus:ring-semi-light-blue"
          />
          <button className="bg-gold hover:bg-opacity-80 text-black font-bold py-2.5 px-6 rounded-md ml-4">
            Search
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b-2 border-semi-light-blue">
                <th className="text-left py-3 px-4 font-semibold text-light-blue uppercase tracking-wider">Timestamp</th>
                <th className="text-left py-3 px-4 font-semibold text-light-blue uppercase tracking-wider">User</th>
                <th className="text-left py-3 px-4 font-semibold text-light-blue uppercase tracking-wider">Action</th>
                <th className="text-left py-3 px-4 font-semibold text-light-blue uppercase tracking-wider">Risk Level</th>
              </tr>
            </thead>
            <tbody>
              {logs.map((log, index) => (
                <tr key={index} className="border-b border-semi-light-blue">
                  <td className="py-4 px-4">{log.timestamp}</td>
                  <td className="py-4 px-4">{log.user}</td>
                  <td className="py-4 px-4">{log.action}</td>
                  <td className="py-4 px-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getRiskClass(log.risk)}`}>
                      {log.risk}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Logs;