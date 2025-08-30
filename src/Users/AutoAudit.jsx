import React from 'react';
import { Link } from 'react-router-dom';
import { PieChart } from 'react-minimal-pie-chart';

const ComplianceCard = ({ title, overallStatus, progress, passed, failed }) => {
    const data = [
        { title: 'Passed', value: passed, color: '#FEC260' },
        { title: 'Failed', value: failed, color: '#7F1C1C' },
    ];

    return (
        <div className="bg-blue p-6 rounded-lg">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">{title}</h2>
                <svg className="w-6 h-6 text-light-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            </div>
            <p className="text-light-blue text-sm mb-4">{overallStatus}</p>
            <div className="w-32 h-32 mx-auto mb-4">
                <PieChart
                    data={data}
                    startAngle={-90}
                />
            </div>
            <div className="w-full bg-deep-blue rounded-full h-2.5 mb-2">
                <div className="bg-gold h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
            </div>
             <div className="flex justify-between text-sm mb-4">
                <span>Progress</span>
                <span>{progress}%</span>
            </div>
            <div className="flex justify-between text-sm">
                <span className="text-green-400 flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                    {passed} Passed
                </span>
                <span className="text-red-400 flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"></path></svg>
                    {failed} Failed
                </span>
            </div>
        </div>
    );
};


const EvidenceCollectionTable = () => {
    const evidence = [
        { id: 'SOC2-CC6.1', description: 'IAM Password Policy Enforcement', status: 'Collected', lastChecked: '5 min ago' },
        { id: 'ISO-A.12.1.2', description: 'Protection against Malware', status: 'Collected', lastChecked: '15 min ago' },
        { id: 'SOC2-CC6.1', description: 'IAM Password Policy Enforcement', status: 'Collected', lastChecked: '5 min ago' },
        { id: 'PCI-8.2.1', description: 'Multi-factor Authentication', status: 'Pending', lastChecked: '1 hour ago' },
    ];

    const getStatusClass = (status) => {
        switch(status) {
            case 'Collected': return 'bg-gold text-black';
            case 'Pending': return 'bg-semi-light-blue text-white';
            default: return 'bg-deep-blue text-white';
        }
    }

    return (
        <div className="bg-blue p-4 md:p-8 rounded-lg">
            <h2 className="text-xl md:text-2xl font-bold">Evidence Collection Status</h2>
            <p className="text-light-blue mt-1 mb-6">Real-time status of automated evidence gathering.</p>
            <div className="overflow-x-auto">
                <table className="min-w-full">
                <thead>
                  <tr className="border-b-2 border-semi-light-blue">
                    <th className="text-left py-3 px-4 font-semibold text-light-blue uppercase tracking-wider">Control ID</th>
                    <th className="text-left py-3 px-4 font-semibold text-light-blue uppercase tracking-wider">Description</th>
                    <th className="text-left py-3 px-4 font-semibold text-light-blue uppercase tracking-wider">Status</th>
                    <th className="text-left py-3 px-4 font-semibold text-light-blue uppercase tracking-wider">Last Checked</th>
                  </tr>
                </thead>
                <tbody>
                  {evidence.map((item, index) => (
                    <tr key={index} className="border-b border-semi-light-blue">
                      <td className="py-6 px-4 whitespace-nowrap">{item.id}</td>
                      <td className="py-6 px-4">{item.description}</td>
                      <td className="py-6 px-4 whitespace-nowrap">
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusClass(item.status)}`}>
                            {item.status}
                        </span>
                      </td>
                      <td className="py-6 px-4 whitespace-nowrap">{item.lastChecked}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
        </div>
    );
}


const AutoAudit = () => {
  return (
    <div className="text-white font-sans space-y-8 p-4 md:p-0">
      <Link to="/userproducts" className="bg-deep-blue hover:bg-blue border border-semi-light-blue text-white font-bold py-2 px-4 rounded-lg inline-flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to Products
      </Link>

      <div className="grid md:grid-cols-3 gap-8">
            <ComplianceCard title="SOC 2 Compliance" overallStatus="Overall compliance status" progress={88} passed={120} failed={15} />
            <ComplianceCard title="ISO 27001 Compliance" overallStatus="Overall compliance status" progress={98} passed={250} failed={5} />
            <ComplianceCard title="PCI DSS Compliance" overallStatus="Overall compliance status" progress={92} passed={300} failed={25} />
      </div>

      <EvidenceCollectionTable />
    </div>
  );
};

export default AutoAudit;
