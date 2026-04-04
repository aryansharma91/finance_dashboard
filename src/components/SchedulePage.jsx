import React from 'react';
import { Clock, Calendar, CheckCircle } from 'lucide-react';

const upcoming = [
  { id: 1, name: 'AWS Cloud Hosting', due: 'Tomorrow', amount: '$145.20', status: 'Pending' },
  { id: 2, name: 'Office Rent - WeWork', due: 'In 3 Days', amount: '$1,200.00', status: 'Pending' },
  { id: 3, name: 'Adobe Creative Cloud', due: 'In 5 Days', amount: '$54.99', status: 'Pending' }
];

const SchedulePage = () => {
  return (
    <div className="flex-1 flex flex-col gap-6 w-full h-full">
      <div className="flex flex-col sm:flex-row justify-between items-center bg-[#1a1b20] p-6 rounded-3xl border border-gray-800/60 shadow-lg gap-4">
        <div>
          <h2 className="text-2xl font-semibold text-white">Upcoming Schedule</h2>
          <p className="text-gray-400 mt-1 text-sm">Manage recurring payments and upcoming bills.</p>
        </div>
        <button className="px-5 py-2.5 bg-[#131418] hover:bg-gray-800 border border-gray-800 text-white rounded-xl text-sm font-medium transition-colors shadow-sm flex items-center gap-2">
           <Calendar size={18} />
           <span>View Calendar</span>
        </button>
      </div>

      <div className="bg-[#1a1b20] rounded-3xl border border-gray-800/60 shadow-lg flex-1 p-6 lg:p-8 flex flex-col items-center text-center overflow-y-auto">
        <div className="w-full max-w-2xl text-left border border-gray-800 rounded-3xl p-6 lg:p-8 bg-[#131418] mb-12 shadow-md">
           <div className="flex items-center gap-3 mb-6">
             <div className="p-2 bg-yellow-500/10 rounded-xl">
               <Clock className="text-yellow-500" size={24} />
             </div>
             <h3 className="text-xl font-medium text-white">Upcoming within 7 days</h3>
           </div>
           
           <div className="space-y-4">
             {upcoming.map(item => (
               <div key={item.id} className="flex flex-col sm:flex-row sm:justify-between sm:items-center bg-[#1a1b20] p-5 rounded-2xl border border-gray-800 transition-colors hover:border-gray-700 gap-4">
                 <div>
                   <h4 className="text-white font-medium text-lg">{item.name}</h4>
                   <p className="text-gray-400 text-sm flex items-center gap-2 mt-1">
                     <Calendar size={14} />
                     {item.due}
                   </p>
                 </div>
                 <div className="sm:text-right">
                   <p className="text-white font-semibold text-lg">{item.amount}</p>
                   <span className="inline-block mt-1 px-2.5 py-0.5 bg-yellow-500/10 text-yellow-500 text-xs rounded-full border border-yellow-500/20">{item.status}</span>
                 </div>
               </div>
             ))}
           </div>
        </div>
        
        <div className="opacity-80 flex flex-col items-center max-w-md mx-auto my-auto pb-10">
          <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6">
             <CheckCircle size={40} className="text-green-500" />
          </div>
          <h4 className="text-white font-semibold text-xl mb-2">All caught up!</h4>
          <p className="text-gray-400 text-sm leading-relaxed">No further scheduled payments for this month. You have reviewed all necessary upcoming invoices and automations.</p>
        </div>
      </div>
    </div>
  );
};
export default SchedulePage;
