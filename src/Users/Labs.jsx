import React from 'react';
import { ImLab } from 'react-icons/im';

const Labs = () => {
  const timelineEvents = [
    {
      date: 'November 20, 2025',
      title: 'Experiment: Just-in-Time (JIT) Access with Slack',
      description: 'Initial prototype for JIT access requests via Slack commands. Successfully integrate with our bot to grant temporary AWS console access. Next step: add approval workflows.',
      tags: ['JIT', 'Slack', 'AWS'],
      isLeft: true,
    },
    {
      date: 'October 15, 2025',
      title: 'GRC Notion Templates v2',
      description: 'Update our Notion templates for ISO 27001 to include evidence collection automation. Link AutoAudit scan results directly to control line items.',
      tags: ['GRC', 'Notion', 'Compliance'],
      isLeft: false,
    },
    {
      date: 'September 10, 2025',
      title: 'PolicyBuilder AI™ - GPT-4 Turbo Upgrade',
      description: 'Upgrade the model for PolicyBuilder AI to GPT-4 Turbo. See significant improvements in policy accuracy and coherence for complex scenarios like GDPR data residency.',
      tags: ['AI', 'Policy-as-Code'],
      isLeft: true,
    },
    {
      date: 'August 1, 2025',
      title: 'VaultScan™ for GCP KMS',
      description: 'Beta release of VaultScan to support Google Cloud Key Management Service. Focus on detecting overly permissive IAM policies on crypto keys.',
      tags: ['VaultScan', 'GCP', 'Security'],
      isLeft: false,
    },
  ];

  return (
    <div className="text-white font-sans">
      <div className="text-center mb-12">
        <ImLab className="w-12 h-12 mx-auto text-gold mb-4" />
        <h1 className="text-3xl md:text-4xl font-bold">Cloudber Labs</h1>
        <p className="text-light-blue mt-2">A timeline of our research, experiments, and internal projects.</p>
      </div>

      <div className="relative md:hidden">
        {/* Mobile timeline */}
        {timelineEvents.map((event, index) => (
          <div key={index} className="mb-8">
            <div className="bg-blue p-6 rounded-lg shadow-lg">
              <p className="text-light-blue text-sm mb-2">{event.date}</p>
              <h3 className="text-xl font-bold mb-2">{event.title}</h3>
              <p className="text-light-blue mb-4">{event.description}</p>
              <div className="flex flex-wrap">
                {event.tags.map((tag, i) => (
                  <span key={i} className="bg-semi-light-blue text-white px-3 py-1 rounded-full text-sm font-semibold mr-2 mb-2">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="relative hidden md:block">
        {/* Desktop timeline */}
        <div className="border-l-2 border-semi-light-blue absolute h-full left-1/2 -ml-px"></div>
        {timelineEvents.map((event, index) => (
          <div key={index} className={`mb-8 flex justify-between items-center w-full ${event.isLeft ? 'flex-row-reverse' : ''}`}>
            <div className="w-5/12"></div>
            <div className="z-10 bg-gold w-4 h-4 rounded-full"></div>
            <div className="w-5/12">
              <div className="bg-blue p-6 rounded-lg shadow-lg">
                <p className="text-light-blue text-sm mb-2">{event.date}</p>
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <p className="text-light-blue mb-4">{event.description}</p>
                <div className="flex flex-wrap">
                  {event.tags.map((tag, i) => (
                    <span key={i} className="bg-semi-light-blue text-white px-3 py-1 rounded-full text-sm font-semibold mr-2 mb-2">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Labs;
