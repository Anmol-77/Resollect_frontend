import React from 'react';
import { UserCircleIcon } from '@heroicons/react/24/solid';

const Header = () => {
  return (
    <div className="flex items-center justify-end border-b bg-white px-6 py-2">
      <div className="flex items-center">
        <div className="mr-2 flex flex-col items-end">
          <div className="text-sm font-medium text-rose-500">Tushar</div>
          <div className="text-xs text-gray-500">tushar@reolect.com</div>
        </div>
        <div className="h-8 w-8 rounded-full bg-rose-100 ring-2 ring-rose-200 flex items-center justify-center">
          <span className="text-sm font-semibold text-rose-500">T</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
