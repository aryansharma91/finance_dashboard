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
      
      <nav className="flex-1 w-full space-y-6 flex flex-col items-center overflow-y-auto custom-scrollbar py-2">
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
        <button 
          onClick={() => setActiveTab && setActiveTab('reports')}
          className={`p-3 rounded-xl transition-all ${activeTab === 'reports' ? 'bg-white text-black shadow-sm scale-105' : 'text-gray-500 hover:text-white'}`}
        >
          <FileText size={22} className={activeTab === 'reports' ? 'fill-current' : ''} />
        </button>
        <button 
          onClick={() => setActiveTab && setActiveTab('schedule')}
          className={`p-3 rounded-xl transition-all ${activeTab === 'schedule' ? 'bg-white text-black shadow-sm scale-105' : 'text-gray-500 hover:text-white'}`}
        >
          <Clock size={22} className={activeTab === 'schedule' ? 'fill-current' : ''} />
        </button>
        <button 
          onClick={() => setActiveTab && setActiveTab('projects')}
          className={`p-3 rounded-xl transition-all ${activeTab === 'projects' ? 'bg-white text-black shadow-sm scale-105' : 'text-gray-500 hover:text-white'}`}
        >
          <Grid size={22} className={activeTab === 'projects' ? 'fill-current' : ''} />
        </button>
        <button 
          onClick={() => setActiveTab && setActiveTab('settings')}
          className={`p-3 rounded-xl transition-all ${activeTab === 'settings' ? 'bg-white text-black shadow-sm scale-105' : 'text-gray-500 hover:text-white'}`}
        >
          <Settings size={22} className={activeTab === 'settings' ? 'fill-current' : ''} />
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
