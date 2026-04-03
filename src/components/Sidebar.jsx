import React from 'react';
import { 
  Box, Home, List, Activity, FileText, 
  Clock, Grid, Settings, LogOut
} from 'lucide-react';

const Sidebar = () => {
  return (
    <aside className="w-20 lg:w-24 bg-[#1f2125] border-r border-gray-800 flex flex-col items-center py-6 rounded-l-3xl h-full shadow-lg h-full transition-all">
      <div className="mb-12 cursor-pointer">
        {/* Logo Placeholder */}
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-black flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-sm rotate-45"></div>
        </div>
      </div>
      
      <nav className="flex-1 w-full space-y-6 flex flex-col items-center">
        <a href="#" className="p-3 bg-white text-black rounded-xl shadow-sm transition-transform hover:scale-105">
          <Home size={22} className="fill-current" />
        </a>
        <a href="#" className="p-3 text-gray-500 hover:text-white transition-colors">
          <List size={22} />
        </a>
        <a href="#" className="p-3 text-gray-500 hover:text-white transition-colors">
          <Activity size={22} />
        </a>
        <a href="#" className="p-3 text-gray-500 hover:text-white transition-colors">
          <FileText size={22} />
        </a>
        <a href="#" className="p-3 text-gray-500 hover:text-white transition-colors">
          <Clock size={22} />
        </a>
        <a href="#" className="p-3 text-gray-500 hover:text-white transition-colors">
          <Grid size={22} />
        </a>
        <a href="#" className="p-3 text-gray-500 hover:text-white transition-colors">
          <Settings size={22} />
        </a>
      </nav>
      
      <div className="mt-auto">
        <a href="#" className="p-3 text-gray-500 hover:text-white transition-colors block">
          <LogOut size={22} />
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
