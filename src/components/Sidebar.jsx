import React from 'react';
import { 
  Box, Home, List, Activity, FileText, 
  Clock, Grid, Settings, LogOut
} from 'lucide-react';

const Sidebar = ({ activeTab, setActiveTab }) => {
  return (
    <aside className="w-20 lg:w-24 bg-[#1f2125] border-r border-gray-800 flex flex-col items-center py-6 rounded-l-3xl h-full shadow-lg transition-all">
      <div className="mb-12 cursor-pointer">
        {/* Logo Placeholder */}
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-black flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-sm rotate-45"></div>
        </div>
      </div>
      
      <nav className="flex-1 w-full space-y-6 flex flex-col items-center">
        <button 
          onClick={() => setActiveTab && setActiveTab('home')}
          className={`p-3 rounded-xl transition-all ${activeTab === 'home' ? 'bg-white text-black shadow-sm scale-105' : 'text-gray-500 hover:text-white'}`}
        >
          <Home size={22} className={activeTab === 'home' ? 'fill-current' : ''} />
        </button>
        <button 
          onClick={() => setActiveTab && setActiveTab('list')}
          className={`p-3 rounded-xl transition-all ${activeTab === 'list' ? 'bg-white text-black shadow-sm scale-105' : 'text-gray-500 hover:text-white'}`}
        >
          <List size={22} className={activeTab === 'list' ? 'fill-current' : ''} />
        </button>
        <button 
          onClick={() => setActiveTab && setActiveTab('activity')}
          className={`p-3 rounded-xl transition-all ${activeTab === 'activity' ? 'bg-white text-black shadow-sm scale-105' : 'text-gray-500 hover:text-white'}`}
        >
          <Activity size={22} className={activeTab === 'activity' ? 'fill-current' : ''} />
        </button>
        <button className="p-3 text-gray-500 hover:text-white transition-colors rounded-xl">
          <FileText size={22} />
        </button>
        <button className="p-3 text-gray-500 hover:text-white transition-colors rounded-xl">
          <Clock size={22} />
        </button>
        <button className="p-3 text-gray-500 hover:text-white transition-colors rounded-xl">
          <Grid size={22} />
        </button>
        <button className="p-3 text-gray-500 hover:text-white transition-colors rounded-xl">
          <Settings size={22} />
        </button>
      </nav>
      
      <div className="mt-auto">
        <button className="p-3 text-gray-500 hover:text-red-400 transition-colors block rounded-xl">
          <LogOut size={22} />
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
