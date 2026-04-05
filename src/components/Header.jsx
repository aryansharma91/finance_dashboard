import React, { useState } from 'react';
import { Search, Bell } from 'lucide-react';

const Header = () => {
  const [hasNotifications, setHasNotifications] = useState(true);

  return (
    <header className="flex justify-between items-center py-4 mb-6">
      <h1 className="text-3xl font-semibold text-white tracking-wide">Overview</h1>
      
      <div className="flex items-center space-x-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="Search" 
            className="bg-[#2a2d33] text-sm text-gray-200 rounded-full pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
          />
        </div>
        
        <div className="flex items-center space-x-3 cursor-pointer p-1.5 pl-2 pr-4 rounded-full bg-[#181a1f] hover:bg-[#202227] transition-colors border border-gray-800">
          <div className="w-8 h-8 rounded-full bg-linear-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold ring-2 ring-[#2a2d33]">
             AS
          </div>
          <div className="text-sm">
            <p className="text-white font-medium text-xs">Aryan Sharma</p>
            <p className="text-gray-500 text-[10px]">aryan.sharma@example.com</p>
          </div>
        </div>
        
        <button 
          onClick={() => setHasNotifications(false)}
          className="p-2.5 rounded-full bg-[#2a2d33] hover:bg-gray-700 transition-colors text-white relative"
        >
          <Bell size={18} />
          {hasNotifications && (
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-[#2a2d33]"></span>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
