import React from 'react';
import { Plus, ArrowUpRight } from 'lucide-react';

const invoices = [
  {
    id: 1,
    date: 'Aug 9',
    dueIn: 'in 1 week',
    status: 'Unpaid',
    statusColor: 'text-red-400',
    statusBg: 'bg-red-500/10',
    dotColor: 'bg-red-500',
    client: 'Leonard Kim',
    amount: '$130.00'
  },
  {
    id: 2,
    date: 'Aug 24',
    dueIn: 'in 2 week',
    status: 'Paid',
    statusColor: 'text-green-400',
    statusBg: 'bg-green-500/10',
    dotColor: 'bg-green-500',
    client: 'John Smith',
    amount: '$220.00'
  },
  {
    id: 3,
    date: 'Sep 9',
    dueIn: 'in 1 month',
    status: 'Pending',
    statusColor: 'text-orange-400',
    statusBg: 'bg-orange-500/10',
    dotColor: 'bg-orange-500',
    client: 'Anna Spirid',
    amount: '$2080.00'
  }
];

const InvoicesList = () => {
  return (
    <div className="bg-[#1a1b20] rounded-3xl p-6 h-full flex flex-col shadow-md relative">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-white font-medium text-lg">Invoices</h3>
        <button className="p-2 rounded-full bg-[#23252b] text-gray-400 hover:text-white transition-colors border border-gray-800">
          <Plus size={16} />
        </button>
      </div>
      
      <div className="bg-[#23252b] rounded-full px-4 py-2 flex items-center justify-between mb-6 border border-gray-800">
        <span className="text-gray-500 text-xs">Payment Score</span>
        <div className="flex-1 mx-4 flex space-x-0.5 max-w-[200px]">
           {/* Simulate a segmented progress bar */}
           {Array.from({length: 40}).map((_, i) => (
             <div key={i} className={`h-3 flex-1 ${i < 30 ? 'bg-yellow-500/80 saturate-150' : 'bg-gray-700'} rounded-sm`}></div>
           ))}
        </div>
        <span className="text-white text-sm font-medium">76</span>
      </div>
      
      <div className="flex-1 space-y-4">
        {invoices.map((inv) => (
          <div key={inv.id} className="flex items-center justify-between">
            <div className="w-1/4">
              <div className="text-white text-sm mb-0.5">{inv.date}</div>
              <div className="text-gray-500 text-xs">{inv.dueIn}</div>
            </div>
            
            <div className="w-1/4 flex justify-center">
              <span className={`px-3 py-1 rounded-full text-xs flex items-center space-x-1.5 ${inv.statusBg} ${inv.statusColor} border border-gray-800/50`}>
                <span className={`w-1.5 h-1.5 rounded-full ${inv.dotColor}`}></span>
                <span>{inv.status}</span>
              </span>
            </div>
            
            <div className="w-1/4 text-gray-300 text-sm text-center">
              {inv.client}
            </div>
            
            <div className="w-1/4 text-white text-sm text-right font-medium">
              {inv.amount}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 pt-4">
        <a href="#" className="flex items-center text-white text-sm font-medium hover:text-blue-400 transition-colors w-fit border-b border-transparent hover:border-blue-400">
          View all invoices
          <ArrowUpRight size={16} className="ml-1" />
        </a>
      </div>
    </div>
  );
};

export default InvoicesList;
