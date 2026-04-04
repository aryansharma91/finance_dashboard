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

const App = () => {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="flex bg-[#0d0e12] min-h-screen text-white font-sans overflow-hidden p-2">
      <div className="flex-1 flex bg-[#131418] rounded-3xl border border-gray-800/60 overflow-hidden shadow-2xl relative max-w-[1600px] mx-auto w-full">
        {/* Sidebar */}
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        
        {/* Main Content Areas */}
        <main className="flex-1 flex flex-col p-8 overflow-y-auto w-full h-screen custom-scrollbar">
          <Header />
          
          {activeTab === 'home' ? (
            <div className="flex-1 flex flex-col gap-6">
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
          ) : null}
        </main>
      </div>
    </div>
  );
};

export default App;