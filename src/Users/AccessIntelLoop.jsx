import React from 'react';
import { Link } from 'react-router-dom';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import loop from '../assets/intel-loop.png';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const AccessIntelLoop = () => {
    const drifts = [
        { resource: 'prod-db-security-group', property: 'Ingress Rules', severity: 'Critical', detected: '2m ago' },
        { resource: 'iam-role-power-user', property: 'Permissions', severity: 'High', detected: '15m ago' },
        { resource: 'staging-load-balancer', property: 'SSL Policy', severity: 'Medium', detected: '1h ago' },
        { resource: 's3-public-website-bucket', property: 'Block Public Access', severity: 'Critical', detected: '3h ago' },
        { resource: 'dev-vm-instance', property: 'Firewall Rules', severity: 'Low', detected: '5h ago' },
    ];

    const getSeverityClass = (severity) => {
        switch (severity) {
            case 'Critical': return 'bg-red-700 text-white';
            case 'High': return 'bg-strong-red text-white';
            case 'Medium': return 'bg-semi-light-blue text-white';
            case 'Low': return 'border border-semi-light-blue text-white';
            default: return 'bg-deep-blue text-light-blue';
        }
    };

    const chartData = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
            {
                label: 'Drifts Detected',
                data: [4, 3, 5, 2, 6, 1, 4],
                backgroundColor: '#FEC260',
                borderColor: '#FEC260',
                borderWidth: 1,
                borderRadius: 5,
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            title: { display: false },
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    color: '#1E47B5',
                    borderColor: '#1E47B5',
                },
                ticks: {
                    color: '#7388BD',
                },
            },
            x: {
                grid: {
                    display: false,
                },
                ticks: {
                    color: '#7388BD',
                },
            },
        },
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
                    <img src={loop} alt="AccessIntel Loop" className="h-12 w-12 md:h-10 md:w-10 mr-0 md:mr-4 flex-shrink-0 mb-4 md:mb-0" />
                    <div className="text-center md:text-left">
                        <h1 className="text-2xl md:text-3xl font-bold">AccessIntel Loop™</h1>
                        <p className="text-light-blue mt-1">Real-time configuration drift detection and analysis.</p>
                        <p className="text-light-blue">Continuously monitoring your cloud environment for unauthorized changes and security gaps.</p>
                    </div>
                </div>
            </div>

            <div className="bg-blue p-4 md:p-8 rounded-lg">
                <h2 className="text-xl md:text-2xl font-bold">Drift Trends</h2>
                <p className="text-light-blue mt-1 mb-6">Drifts detected over the last 7 days.</p>
                <div className="h-64">
                    <Bar data={chartData} options={chartOptions} />
                </div>
            </div>

            <div className="bg-blue p-4 md:p-8 rounded-lg">
                <h2 className="text-xl md:text-2xl font-bold">Active Drifts Detected</h2>
                <p className="text-light-blue mt-1 mb-6">Configuration changes that require your attention.</p>
                <div className="overflow-x-auto">
                    <table className="min-w-full">
                        <thead>
                            <tr className="border-b-2 border-semi-light-blue">
                                <th className="text-left py-3 px-4 font-semibold text-light-blue uppercase tracking-wider">Affected Resource</th>
                                <th className="text-left py-3 px-4 font-semibold text-light-blue uppercase tracking-wider">Changed Property</th>
                                <th className="text-left py-3 px-4 font-semibold text-light-blue uppercase tracking-wider">Severity</th>
                                <th className="text-left py-3 px-4 font-semibold text-light-blue uppercase tracking-wider">Detected</th>
                                <th className="text-left py-3 px-4 font-semibold text-light-blue uppercase tracking-wider"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {drifts.map((drift, index) => (
                                <tr key={index} className="border-b border-semi-light-blue">
                                    <td className="py-6 px-4 whitespace-nowrap">{drift.resource}</td>
                                    <td className="py-6 px-4">{drift.property}</td>
                                    <td className="py-6 px-4 whitespace-nowrap">
                                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getSeverityClass(drift.severity)}`}>
                                            {drift.severity}
                                        </span>
                                    </td>
                                    <td className="py-6 px-4 whitespace-nowrap">{drift.detected}</td>
                                    <td className="py-6 px-4">
                                        <button className="bg-deep-blue hover:bg-opacity-80 text-white font-bold py-2 px-4 rounded-lg">
                                            View Details
                                        </button>
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

export default AccessIntelLoop;
