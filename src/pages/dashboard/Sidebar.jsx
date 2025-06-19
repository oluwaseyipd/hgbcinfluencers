import React, { useEffect, useRef, useState } from 'react';
import { FaPlus, FaChartColumn, FaHeadphonesSimple, FaShield, FaXmark, FaCalendar, FaQuoteLeft } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Sidebar = ({ toggleSidebar, sidebarOpen  }) => {
    const sidebarRef = useRef(null);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target) && sidebarOpen) {
        toggleSidebar();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [sidebarOpen, toggleSidebar]);

  const handleNavItemClick = () => {
    if (window.innerWidth < 768) {
      toggleSidebar();
    }
  };
  return (
    <>
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-opacity-50 z-40 lg:hidden"
          onClick={toggleSidebar}
        />
      )}
      
      {/* Sidebar */}
      <div 
        ref={sidebarRef}
        className={`
          fixed top-0 left-0 z-50 w-64 h-screen bg-gradient-to-b from-slate-900 to-slate-800 border-r border-slate-700 flex flex-col
          transform transition-transform duration-300 ease-in-out
          lg:translate-x-0 lg:static lg:z-auto
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        {/* Mobile Close Button */}
        <div className="lg:hidden absolute top-4 right-4">
          <button
            onClick={toggleSidebar}
            className="p-2 text-slate-400 hover:text-white rounded-lg"
          >
            <FaXmark className="w-5 h-5" />
          </button>
        </div>

        {/* Logo Section */}
        <div className="px-6 py-4 border-b border-slate-700">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">
                <FaShield />
              </span>
            </div>
            <span className="text-white text-xl font-bold">HGBC</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          {/* New Upload Button */}
          <Link 
            to="/admin/audioupload" 
            onClick={handleNavItemClick}
            className="w-full mb-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-3 rounded-xl flex items-center justify-center space-x-2 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            <span className="font-medium">New Upload</span>
          </Link>

          {/* Menu Items */}
          <div className="space-y-2">
            <Link
              to="/admin/overview"
              onClick={handleNavItemClick}
              className="flex items-center space-x-3 px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-700/50 rounded-lg transition-all duration-200 group"
            >
              <FaChartColumn className='text-xl group-hover:text-blue-400 transition-colors' />
              <span className="font-medium">Overview</span>
            </Link>
            
            <Link
              to="/admin/audio"
              onClick={handleNavItemClick}
              className="flex items-center space-x-3 px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-700/50 rounded-lg transition-all duration-200 group"
            >
              <FaHeadphonesSimple className='text-xl group-hover:text-purple-400 transition-colors' />
              <span className="font-medium">Audio</span>
            </Link>

             <Link
              to="/admin/events"
              onClick={handleNavItemClick}
              className="flex items-center space-x-3 px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-700/50 rounded-lg transition-all duration-200 group"
            >
              <FaCalendar className='text-xl group-hover:text-blue-400 transition-colors' />
              <span className="font-medium">Events</span>
            </Link>
                <Link
              to="/admin/quotes"
              onClick={handleNavItemClick}
              className="flex items-center space-x-3 px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-700/50 rounded-lg transition-all duration-200 group"
            >
              <FaQuoteLeft className='text-xl group-hover:text-purple-400 transition-colors' />
              <span className="font-medium">Quotes</span>
            </Link>
          </div>
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-slate-700">
          <div className="text-xs text-slate-400 text-center">
            © {new Date().getFullYear()} Higher Ground Baptist Church
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;