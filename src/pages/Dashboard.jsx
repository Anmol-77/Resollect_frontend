import React from 'react';

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="mb-6 text-xl font-semibold">Dashboard</h1>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {/* Portfolio Summary Card */}
        <div className="rounded-lg border bg-white p-5 shadow-sm">
          <h3 className="mb-2 text-sm font-medium text-gray-500">Total Loans</h3>
          <p className="text-2xl font-bold">1,245</p>
          <div className="mt-2 text-xs text-green-600">
            <span>↑ 8.2%</span> <span className="text-gray-500">from last month</span>
          </div>
        </div>

        {/* Active Loans Card */}
        <div className="rounded-lg border bg-white p-5 shadow-sm">
          <h3 className="mb-2 text-sm font-medium text-gray-500">Active Loans</h3>
          <p className="text-2xl font-bold">1,180</p>
          <div className="mt-2 text-xs text-green-600">
            <span>↑ 5.4%</span> <span className="text-gray-500">from last month</span>
          </div>
        </div>

        {/* NPA Loans Card */}
        <div className="rounded-lg border bg-white p-5 shadow-sm">
          <h3 className="mb-2 text-sm font-medium text-gray-500">NPA Loans</h3>
          <p className="text-2xl font-bold">65</p>
          <div className="mt-2 text-xs text-red-600">
            <span>↑ 12.1%</span> <span className="text-gray-500">from last month</span>
          </div>
        </div>

        {/* Total Amount Card */}
        <div className="rounded-lg border bg-white p-5 shadow-sm">
          <h3 className="mb-2 text-sm font-medium text-gray-500">Total Portfolio</h3>
          <p className="text-2xl font-bold">₹ 7.8 Cr</p>
          <div className="mt-2 text-xs text-green-600">
            <span>↑ 3.1%</span> <span className="text-gray-500">from last month</span>
          </div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Recent Activity Card */}
        <div className="rounded-lg border bg-white p-5 shadow-sm lg:col-span-2">
          <h3 className="mb-4 text-base font-medium">Recent Activity</h3>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="flex border-b pb-3">
                <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium">Loan {86042 + item} was updated</p>
                  <p className="text-xs text-gray-500">Document added by Tushar</p>
                  <p className="text-xs text-gray-400">2 hours ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions Card */}
        <div className="rounded-lg border bg-white p-5 shadow-sm">
          <h3 className="mb-4 text-base font-medium">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-light">
              Add New Loan
            </button>
            <button className="w-full rounded-md bg-white px-4 py-2 text-sm font-medium text-primary ring-1 ring-primary hover:bg-primary hover:bg-opacity-10">
              Export Reports
            </button>
            <button className="w-full rounded-md bg-white px-4 py-2 text-sm font-medium text-primary ring-1 ring-primary hover:bg-primary hover:bg-opacity-10">
              Upload Documents
            </button>
            <button className="w-full rounded-md bg-white px-4 py-2 text-sm font-medium text-primary ring-1 ring-primary hover:bg-primary hover:bg-opacity-10">
              Schedule Meeting
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
