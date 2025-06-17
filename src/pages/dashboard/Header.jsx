import React, { useState } from 'react';
import { FaBell, FaUser, FaChevronDown, FaBars } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Header = ({ toggleSidebar }) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

    const handleNavItemClick = () => {
    if (window.innerWidth < 768) {
      toggleSidebar();
    }
  };

  return (
    <header className="fixed top-0 right-0 left-0 lg:left-64 h-16 bg-white border-b border-slate-200 px-4 lg:px-6 flex items-center justify-between shadow-sm z-30">
      {/* Mobile Menu Button */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors duration-200"
      >
        <FaBars className="w-5 h-5" />
      </button>

      {/* Page Title - Hidden on mobile */}
      <div className="hidden lg:block">
        <h1 className="text-xl font-semibold text-white-900">HGBC</h1>
      </div>

      {/* Right Side Actions */}
      <div className="flex items-center space-x-2 lg:space-x-4">
        {/* Notifications */}
        <div className="relative">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 cursor-pointer rounded-lg transition-colors duration-200"
          >
            <FaBell className='text-2xl ' />

            {/* Notification Badge */}
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full flex items-center justify-center">
              <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
            </span>
          </button>

          {/* Notifications Dropdown */}
          {showNotifications && (
            <div className="absolute -right-10 md:right-0 mt-2 w-72 lg:w-80 bg-white rounded-xl shadow-lg border border-slate-200 py-2 z-50">
              <div className="px-4 py-2 border-b border-slate-100">
                <h3 className="font-semibold text-slate-900">Notifications</h3>
              </div>
              <div className="max-h-64 overflow-y-auto">
                <div className="px-4 py-3 hover:bg-slate-50 cursor-pointer">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-sm text-slate-900 font-medium">New upload completed</p>
                      <p className="text-xs text-slate-500 mt-1">2 minutes ago</p>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 hover:bg-slate-50 cursor-pointer">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-sm text-slate-900 font-medium">Audio processing finished</p>
                      <p className="text-xs text-slate-500 mt-1">1 hour ago</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-4 py-2 border-t border-slate-100">
                <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                  View all notifications
                </button>
              </div>
            </div>
          )}
        </div>

        {/* User Menu */}
        <div className="relative">
          <button
            onClick={() => setShowUserMenu(!showUserMenu)}
            className="flex items-center cursor-pointer space-x-2 lg:space-x-3 p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors duration-200"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <FaUser className='2xl text-white'/>
            </div>
            {/* <span className="hidden lg:block text-sm font-medium text-slate-700">John Doe</span>
            <svg className="w-4 h-4 hidden lg:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWeight={2} d="M19 9l-7 7-7-7" />
            </svg> */}
          </button>

          {/* User Dropdown */}
          {showUserMenu && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-slate-200 py-2 z-50">
              {/* <div className="px-4 py-2 border-b border-slate-100">
                <p className="text-sm font-medium text-slate-900">John Doe</p>
                <p className="text-xs text-slate-500">john@example.com</p>
              </div> */}
              <div className="py-1">
                <a href="#" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">
                  Profile
                </a>
                <a href="#" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">
                  Settings
                </a>
                <a href="#" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">
                  Help
                </a>
              </div>
              <Link 
              to="/"
              onClick={handleNavItemClick}
              className="border-t border-slate-100 pt-1">
                <a href="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-red-50">
                  Sign out
                </a>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;


