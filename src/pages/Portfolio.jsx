import React, { useState } from 'react';
import PortfolioTable from '../components/PortfolioTable';
import DocumentUpload from '../components/DocumentUpload';

const tabs = [
  { id: 'all', label: 'All' },
  { id: 'pre-sanction', label: 'Pre Sanction' },
  { id: 'npa', label: 'NPA' },
  { id: 'escb', label: 'ESCB Restructure' },
  { id: 'symbolic', label: 'Symbolic Possession' },
  { id: 'drt', label: 'DRT Order' },
  { id: 'physical', label: 'Physical Possession' },
  { id: 'auctions', label: 'Auctions' },
];

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);

  return (
    <div className="flex h-full flex-col">
      <div className="border-b bg-white">
        <div className="flex items-center justify-between px-6 pt-5">
          <h1 className="text-xl font-semibold">Portfolio</h1>
        </div>

        <div className="mt-4 flex overflow-x-auto border-b">
          <div className="flex px-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`mr-4 px-3 py-2 text-sm font-medium ${
                  activeTab === tab.id
                    ? 'border-b-2 border-primary text-primary'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <PortfolioTable />

      {/* Upload Document Modal */}
      <DocumentUpload
        isOpen={isUploadModalOpen}
        onClose={() => setIsUploadModalOpen(false)}
      />

      {/* Floating Action Button for Upload */}
      <button
        onClick={() => setIsUploadModalOpen(true)}
        className="absolute bottom-6 right-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg hover:bg-primary-light"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      </button>
    </div>
  );
};

export default Portfolio;
