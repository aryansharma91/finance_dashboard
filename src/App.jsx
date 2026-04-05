import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import RevenueChart from './components/RevenueChart';
import CalendarWidget from './components/CalendarWidget';
import AISummary from './components/AISummary';
import SpendingChart from './components/SpendingChart';
import InvoicesList from './components/InvoicesList';
import ListPage from './components/ListPage';
import ActivityPage from './components/ActivityPage';
import SettingsPage from './components/SettingsPage';
import ReportsPage from './components/ReportsPage';
import SchedulePage from './components/SchedulePage';
import ProjectsPage from './components/ProjectsPage';

const App = () => {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="flex bg-[#0d0e12] min-h-screen text-white font-sans overflow-hidden p-2">
      <div className="flex-1 flex bg-[#131418] rounded-3xl border border-gray-800/60 overflow-hidden shadow-2xl relative max-w-[1600px] mx-auto w-full">
        {/* Sidebar */}
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        
        {/* Main Content Areas */}
        <main className="flex-1 flex flex-col p-6 lg:p-8 overflow-hidden w-full h-full relative">
          <Header />
          
          <div className="flex-1 overflow-y-auto custom-scrollbar mt-6 pt-2 pb-10 pr-2">
            {activeTab === 'home' ? (
              <div className="flex flex-col gap-6">
                {/* Top Row Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 min-h-[400px]">
                  <div className="lg:col-span-2">
                    <RevenueChart />
                  </div>
                  <div className="lg:col-span-1">
                    <CalendarWidget />
                  </div>
                </div>
                
                {/* Bottom Row Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 min-h-[350px]">
                  <div className="lg:col-span-1">
                    <AISummary />
                  </div>
                  <div className="lg:col-span-1">
                    <SpendingChart />
                  </div>
                  <div className="lg:col-span-1">
                    <InvoicesList />
                  </div>
                </div>
              </div>
            ) : activeTab === 'list' ? (
              <ListPage />
            ) : activeTab === 'activity' ? (
              <ActivityPage />
            ) : activeTab === 'reports' ? (
              <ReportsPage />
            ) : activeTab === 'schedule' ? (
              <SchedulePage />
            ) : activeTab === 'projects' ? (
              <ProjectsPage />
            ) : activeTab === 'settings' ? (
              <SettingsPage />
            ) : null}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;