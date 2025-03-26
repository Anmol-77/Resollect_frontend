import React, { useState } from 'react';
import { ChevronUpDownIcon } from '@heroicons/react/24/solid';

// Sample data that matches the image
const sampleData = [
  {
    id: 'L7803437',
    loanType: 'Home Loan',
    borrower: 'Sanjay Gautam',
    borrowerAddress: '53, Yuji Amida Gate, Indapur-413306',
    coBorrowerName: 'Anjali Gaekwad',
    coBorrowerAddress: '53-54, Amida Path, Indapur-413307',
    currentOPG: 100,
    sanctionAmount: '₹ 7342458',
    region: 'North',
    status: 'L'
  },
  {
    id: 'L2803432',
    loanType: 'Car Loan',
    borrower: 'Rajiv Ram',
    borrowerAddress: '65/622, Dev Path, Berhampore-631168',
    coBorrowerName: 'Monika Rai',
    coBorrowerAddress: 'Deoghar-632545',
    currentOPG: 100,
    sanctionAmount: '₹ 7621463',
    region: 'North',
    status: 'L'
  },
  {
    id: 'L2803426',
    loanType: 'Car Loan',
    borrower: 'Punyam',
    borrowerAddress: 'M.No. 32, Kundan Street',
    coBorrowerName: 'Zebra Dara',
    coBorrowerAddress: 'M.No. 42, President Marg, Jamui-834654',
    currentOPG: 100,
    sanctionAmount: '₹ 4537865',
    region: 'East',
    status: 'L'
  },
  {
    id: 'L2803428',
    loanType: 'Home Loan',
    borrower: 'Priyanka Chopra',
    borrowerAddress: '24, Ray Chowk, Sambalpur-765135',
    coBorrowerName: 'Zain Sheikh',
    coBorrowerAddress: 'M.No. 59, Gujjar Street, Balaghat-531905',
    currentOPG: 100,
    sanctionAmount: '₹ 2681712',
    region: 'West',
    status: 'A'
  },
  {
    id: 'L2803420',
    loanType: 'Home Loan',
    borrower: 'Harshita Sen',
    borrowerAddress: '64/356 Barak, Guwahati-782098',
    coBorrowerName: 'Shrey Kala',
    coBorrowerAddress: '#1456, Bhartiya Street, Rajkot-662204',
    currentOPG: 100,
    sanctionAmount: '₹ 4456806',
    region: 'West',
    status: 'B'
  },
  {
    id: 'L2803425',
    loanType: 'Personal Loan',
    borrower: 'Vinsan Vik',
    borrowerAddress: 'M.No. 673 Dalip Gate, Indraprasth-173053',
    coBorrowerName: 'Subaru Charaji',
    coBorrowerAddress: '56-45 Divan Road Jalpahar-964201',
    currentOPG: 75,
    sanctionAmount: '₹ 3682515',
    region: 'West',
    status: 'L'
  },
  {
    id: 'L2803704',
    loanType: 'Car Loan',
    borrower: 'Niranjan Master',
    borrowerAddress: '543 Sanginal Street, Bramana Puri-349210',
    coBorrowerName: 'Vikason Ova',
    coBorrowerAddress: 'M.No. 175, Talab Road Nashik-588375',
    currentOPG: 80,
    sanctionAmount: '₹ 1235883',
    region: 'South',
    status: 'K'
  },
  {
    id: 'L2803206',
    loanType: 'Personal Loan',
    borrower: 'Naru Sahni',
    borrowerAddress: '41/42, Oda, Almonta-325239',
    coBorrowerName: 'Dinandi Lallo',
    coBorrowerAddress: '48/41, Gamla Path Valencia, Hyderabad-684021',
    currentOPG: 75,
    sanctionAmount: '₹ 2687583',
    region: 'East',
    status: 'G'
  },
];

const PortfolioTable = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Handle checkbox selection
  const handleSelectRow = (id) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter(rowId => rowId !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };

  // Handle select all checkbox
  const handleSelectAll = () => {
    if (selectedRows.length === sampleData.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(sampleData.map(row => row.id));
    }
  };

  // Filter data based on search term
  const filteredData = sampleData.filter(row =>
    row.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    row.borrower.toLowerCase().includes(searchTerm.toLowerCase()) ||
    row.loanType.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex-1 overflow-auto">
      <div className="p-4">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <input
                type="text"
                placeholder="Search Loan Number..."
                className="w-64 rounded-md border px-3 py-2 text-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="absolute right-0 top-0 flex h-full items-center pr-3">
                <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button className="btn-secondary flex items-center space-x-1">
              <span>Select Columns</span>
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <button className="btn-primary">More Filters</button>
          </div>
        </div>

        <div className="mb-2 text-sm text-gray-500">
          {selectedRows.length} loans selected
        </div>

        <div className="overflow-x-auto rounded-md border bg-white">
          <table className="w-full text-sm">
            <thead className="bg-table-header">
              <tr className="border-b text-left">
                <th className="p-3">
                  <input
                    type="checkbox"
                    checked={selectedRows.length === sampleData.length && sampleData.length > 0}
                    onChange={handleSelectAll}
                    className="h-4 w-4 rounded border-gray-300"
                  />
                </th>
                <th className="p-3 font-medium text-gray-600">Loan No. <ChevronUpDownIcon className="inline h-4 w-4" /></th>
                <th className="p-3 font-medium text-gray-600">Loan Type <ChevronUpDownIcon className="inline h-4 w-4" /></th>
                <th className="p-3 font-medium text-gray-600">Borrower <ChevronUpDownIcon className="inline h-4 w-4" /></th>
                <th className="p-3 font-medium text-gray-600">Borrower Address <ChevronUpDownIcon className="inline h-4 w-4" /></th>
                <th className="p-3 font-medium text-gray-600">Co Borrower 1 Name <ChevronUpDownIcon className="inline h-4 w-4" /></th>
                <th className="p-3 font-medium text-gray-600">Co Borrower 1 Address <ChevronUpDownIcon className="inline h-4 w-4" /></th>
                <th className="p-3 font-medium text-gray-600">Current OPG <ChevronUpDownIcon className="inline h-4 w-4" /></th>
                <th className="p-3 font-medium text-gray-600">Sanction Amount <ChevronUpDownIcon className="inline h-4 w-4" /></th>
                <th className="p-3 font-medium text-gray-600">Region <ChevronUpDownIcon className="inline h-4 w-4" /></th>
                <th className="p-3 font-medium text-gray-600">Status <ChevronUpDownIcon className="inline h-4 w-4" /></th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((row, index) => (
                <tr
                  key={row.id}
                  className={`border-b ${index % 2 === 0 ? 'bg-table-row-even' : 'bg-table-row-odd'} hover:bg-blue-50`}
                >
                  <td className="p-3">
                    <input
                      type="checkbox"
                      checked={selectedRows.includes(row.id)}
                      onChange={() => handleSelectRow(row.id)}
                      className="h-4 w-4 rounded border-gray-300"
                    />
                  </td>
                  <td className="p-3 text-blue-600 hover:underline">{row.id}</td>
                  <td className="p-3">{row.loanType}</td>
                  <td className="p-3">{row.borrower}</td>
                  <td className="p-3">{row.borrowerAddress}</td>
                  <td className="p-3">{row.coBorrowerName}</td>
                  <td className="p-3">{row.coBorrowerAddress}</td>
                  <td className="p-3">{row.currentOPG}</td>
                  <td className="p-3">{row.sanctionAmount}</td>
                  <td className="p-3">{row.region}</td>
                  <td className="p-3">{row.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PortfolioTable;
