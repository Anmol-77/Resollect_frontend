import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ChartBarIcon,
  HomeIcon,
  BellIcon,
  DocumentTextIcon,
  ArrowTrendingUpIcon,
  Cog6ToothIcon,
  UserGroupIcon,
  KeyIcon,
  CloudArrowUpIcon
} from '@heroicons/react/24/outline';

// Logo component
const Logo = () => (
  <div className="flex items-center px-4 py-5">
    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
      <span className="text-xs font-bold">R</span>
    </div>
    <span className="ml-2 text-lg font-medium">resollect</span>
  </div>
);

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { name: 'Dashboard', path: '/', icon: HomeIcon },
    { name: 'Portfolio', path: '/portfolio', icon: ChartBarIcon },
    { name: 'Notifications', path: '/notifications', icon: BellIcon },
    { name: 'Notices', path: '/notices', icon: DocumentTextIcon },
    { name: 'Auction', path: '/auction', icon: ArrowTrendingUpIcon },
    { name: 'Data Upload', path: '/data-upload', icon: CloudArrowUpIcon },
    { name: 'Control Panel', path: '/control-panel', icon: Cog6ToothIcon },
    { name: 'User Management', path: '/user-management', icon: UserGroupIcon },
    { name: 'Permissions', path: '/permissions', icon: KeyIcon },
  ];

  return (
    <div className="flex h-screen w-56 flex-col border-r bg-white">
      <Logo />

      <div className="flex-1 space-y-1 px-2 py-4">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path ||
                          (item.path !== '/' && location.pathname.startsWith(item.path));

          return (
            <Link
              key={item.name}
              to={item.path}
              className={`sidebar-item ${isActive ? 'active' : ''}`}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </div>

      <div className="border-t p-4 text-xs text-gray-500">
        powered by <span className="font-semibold">resollect</span>
      </div>
    </div>
  );
};

export default Sidebar;
