import React, { useState } from 'react';
import { Clock, Calendar, CheckCircle, Check } from 'lucide-react';

const initialUpcoming = [
  { id: 1, name: 'AWS Cloud Hosting', due: 'Tomorrow', amount: '$145.20', status: 'Pending' },
  { id: 2, name: 'Office Rent - WeWork', due: 'In 3 Days', amount: '$1,200.00', status: 'Pending' },
  { id: 3, name: 'Adobe Creative Cloud', due: 'In 5 Days', amount: '$54.99', status: 'Pending' }
];

const SchedulePage = () => {
  const [upcoming, setUpcoming] = useState(initialUpcoming);

  const markPaid = (id) => {
    setUpcoming(prev => prev.map(item => item.id === id ? { ...item, status: 'Paid' } : item));
  };

  const allPaid = upcoming.every(item => item.status === 'Paid');

  return (
    <div className="flex flex-col gap-6 w-full">
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

      <div className="bg-[#1a1b20] rounded-3xl border border-gray-800/60 shadow-lg p-6 lg:p-8 flex flex-col items-center text-center">
        <div className="w-full max-w-2xl text-left border border-gray-800 rounded-3xl p-6 lg:p-8 bg-[#131418] mb-12 shadow-md">
           <div className="flex items-center gap-3 mb-6">
             <div className="p-2 bg-yellow-500/10 rounded-xl">
               <Clock className="text-yellow-500" size={24} />
             </div>
             <h3 className="text-xl font-medium text-white">Upcoming within 7 days</h3>
           </div>
           
           <div className="space-y-4">
             {upcoming.map(item => (
               <div key={item.id} className="flex flex-col sm:flex-row sm:justify-between sm:items-center bg-[#1a1b20] p-5 rounded-2xl border border-gray-800 transition-colors hover:border-gray-700 gap-4 group">
                 <div>
                   <h4 className="text-white font-medium text-lg">{item.name}</h4>
                   <p className="text-gray-400 text-sm flex items-center gap-2 mt-1">
                     <Calendar size={14} />
                     {item.due}
                   </p>
                 </div>
                 <div className="sm:text-right flex items-center gap-4">
                   <div className="text-right">
                     <p className="text-white font-semibold text-lg">{item.amount}</p>
                     <span className={`inline-block mt-1 px-2.5 py-0.5 text-xs rounded-full border ${item.status === 'Paid' ? 'bg-green-500/10 text-green-500 border-green-500/20' : 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20'}`}>{item.status}</span>
                   </div>
                   {item.status !== 'Paid' && (
                     <button onClick={() => markPaid(item.id)} className="opacity-0 group-hover:opacity-100 p-2 bg-[#131418] border border-gray-800 hover:border-gray-600 rounded-lg text-green-400 transition-all" title="Mark as Paid">
                       <Check size={18} />
                     </button>
                   )}
                 </div>
               </div>
             ))}
           </div>
        </div>
        
        <div className={`transition-all duration-500 flex flex-col items-center max-w-md mx-auto my-auto pb-10 ${allPaid ? 'opacity-100 scale-100' : 'opacity-50 scale-95'}`}>
          <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6">
             <CheckCircle size={40} className="text-green-500" />
          </div>
          <h4 className="text-white font-semibold text-xl mb-2">{allPaid ? 'All caught up!' : 'Reviewing Schedule...'}</h4>
          <p className="text-gray-400 text-sm leading-relaxed">{allPaid ? 'No further scheduled payments for this month. You have reviewed all necessary upcoming invoices and automations.' : 'You have pending payments to address within the next 7 days.'}</p>
        </div>
      </div>
    </div>
  );
};
export default SchedulePage;
