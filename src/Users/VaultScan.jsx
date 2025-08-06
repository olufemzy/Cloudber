import React from 'react';
import { Link } from 'react-router-dom';

const VaultScan = () => {
  const scans = [
    { id: 'scan-01', status: 'Completed', findings: 8, severity: 'High', timestamp: '2 hours ago' },
    { id: 'scan-02', status: 'Completed', findings: 2, severity: 'Low', timestamp: '1 day ago' },
    { id: 'scan-03', status: 'Failed', findings: 0, severity: 'N/A', timestamp: '3 days ago' },
    { id: 'scan-04', status: 'Completed', findings: 5, severity: 'Medium', timestamp: '1 week ago' },
    { id: 'scan-05', status: 'Completed', findings: 6, severity: 'High', timestamp: '3 weeks ago' },
    { id: 'scan-06', status: 'Completed', findings: 1, severity: 'Low', timestamp: '1 month ago' },
  ];

  const getStatusClass = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-gold text-black';
      case 'Failed':
        return 'bg-strong-red text-white';
      default:
        return 'bg-deep-blue text-light-blue';
    }
  };

  const getSeverityClass = (severity) => {
    switch (severity) {
      case 'High':
        return 'bg-strong-red text-white';
      case 'Medium':
        return 'bg-semi-light-blue text-white';
      case 'Low':
          return 'border border-semi-light-blue text-white';
      default:
        return 'bg-deep-blue text-light-blue';
    }
  };

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
            <svg className="h-14 w-10 mr-4 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          <div className="text-center md:text-left">
            <h1 className="text-2xl md:text-3xl font-bold">VaultScan™</h1>
            <p className="text-light-blue mt-1">Scan your cloud vaults for misconfigurations and vulnerabilities.</p>
          </div>
        </div>
        <button className="bg-gold hover:bg-opacity-80 text-black font-bold py-2.5 px-6 rounded-md flex items-center w-full md:w-auto justify-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            Start New Scan
        </button>
      </div>

      <div className="bg-blue p-4 md:p-8 rounded-lg">
        <h2 className="text-xl md:text-2xl font-bold">Recent Scan History</h2>
        <p className="text-light-blue mt-1 mb-6">Review the results of your most recent scans</p>

        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b-2 border-semi-light-blue">
                <th className="text-left py-3 px-4 font-semibold text-light-blue uppercase tracking-wider">Scan ID</th>
                <th className="text-left py-3 px-4 font-semibold text-light-blue uppercase tracking-wider">Status</th>
                <th className="text-left py-3 px-4 font-semibold text-light-blue uppercase tracking-wider">Findings</th>
                <th className="text-left py-3 px-4 font-semibold text-light-blue uppercase tracking-wider">Highest Severity</th>
                <th className="text-left py-3 px-4 font-semibold text-light-blue uppercase tracking-wider">Timestamp</th>
              </tr>
            </thead>
            <tbody>
              {scans.map((scan, index) => (
                <tr key={index} className="border-b border-semi-light-blue">
                  <td className="py-6 px-4 whitespace-nowrap">{scan.id}</td>
                  <td className="py-6 px-4 whitespace-nowrap">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusClass(scan.status)}`}>
                      {scan.status}
                    </span>
                  </td>
                  <td className="py-6 px-4">{scan.findings}</td>
                  <td className="py-6 px-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getSeverityClass(scan.severity)}`}>
                      {scan.severity}
                    </span>
                  </td>
                  <td className="py-6 px-4 flex items-center whitespace-nowrap">
                    <svg className="w-5 h-5 mr-2 text-light-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    {scan.timestamp}
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

export default VaultScan;
