import React from 'react';
import { Grid, TrendingUp, Users, PieChart } from 'lucide-react';

const portfolios = [
  { id: 1, name: 'Marketing Budget', balance: '$45,000', change: '+12.4%', color: 'from-pink-500 to-rose-500' },
  { id: 2, name: 'Operations', balance: '$120,400', change: '-2.4%', color: 'from-blue-500 to-cyan-500' },
  { id: 3, name: 'Research & Dev', balance: '$85,200', change: '+5.1%', color: 'from-purple-500 to-indigo-500' },
  { id: 4, name: 'Emergency Fund', balance: '$50,000', change: '+0.0%', color: 'from-emerald-500 to-teal-500' }
];

const ProjectsPage = () => {
  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="flex justify-between items-center bg-[#1a1b20] p-6 rounded-3xl border border-gray-800/60 shadow-lg gap-4">
        <div>
          <h2 className="text-2xl font-semibold text-white">Portfolios & Projects</h2>
          <p className="text-gray-400 mt-1 text-sm">Overview of categorized budgets and allocations.</p>
        </div>
      </div>

      <div className="bg-[#1a1b20] rounded-3xl border border-gray-800/60 shadow-lg p-6 lg:p-8 flex flex-col">
        <h3 className="text-lg font-medium text-white mb-6">Active Portfolios</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {portfolios.map(port => (
            <div key={port.id} className="relative overflow-hidden bg-[#131418] rounded-2xl border border-gray-800 p-6 flex flex-col justify-between min-h-[160px] group transition-all hover:border-gray-600 cursor-pointer shadow-sm">
               <div className={`absolute top-0 left-0 w-full h-1 bg-linear-to-r ${port.color}`}></div>
               <div className="flex justify-between items-start mb-6">
                 <h3 className="text-white font-medium text-lg">{port.name}</h3>
                 <Grid size={20} className="text-gray-500 group-hover:text-white transition-colors" />
               </div>
               <div>
                 <p className="text-3xl font-bold text-white mb-2">{port.balance}</p>
                 <div className={`text-sm flex items-center gap-1.5 font-medium ${port.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                   <TrendingUp size={16} className={port.change.startsWith('-') ? 'rotate-180' : ''} />
                   <span>{port.change} vs last month</span>
                 </div>
               </div>
            </div>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6 flex-1">
           <div className="bg-[#131418] border border-gray-800 rounded-2xl p-6 min-h-[300px] flex items-center justify-center shadow-inner relative overflow-hidden">
              <div className="absolute inset-0 bg-[#1a1b20]/20 rounded-2xl"></div>
              <div className="text-center relative z-10 p-8 bg-[#1a1b20] rounded-2xl border border-gray-800/60 shadow-lg max-w-sm w-full mx-auto">
                 <PieChart size={40} className="text-indigo-400 mx-auto mb-4" />
                 <p className="text-white font-medium text-lg">Allocation Analytics</p>
                 <p className="text-gray-500 text-sm mt-2">Connect your HR software to view team and department allocations visually.</p>
                 <button className="mt-6 px-5 py-2 w-full bg-[#131418] border border-gray-800 text-white rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors">Connect Integration</button>
              </div>
           </div>
           
           <div className="bg-[#131418] border border-gray-800 rounded-2xl p-6 min-h-[300px] flex items-center justify-center shadow-inner relative overflow-hidden">
              <div className="absolute inset-0 bg-[#1a1b20]/20 rounded-2xl"></div>
              <div className="text-center relative z-10 p-8 bg-[#1a1b20] rounded-2xl border border-gray-800/60 shadow-lg max-w-sm w-full mx-auto">
                 <TrendingUp size={40} className="text-emerald-400 mx-auto mb-4" />
                 <p className="text-white font-medium text-lg">Performance Metrics</p>
                 <p className="text-gray-500 text-sm mt-2">Activate advance reporting to project forward-looking growth estimates.</p>
                 <button className="mt-6 px-5 py-2 w-full bg-[#131418] border border-gray-800 text-white rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors">Unlock Insights</button>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectsPage;
