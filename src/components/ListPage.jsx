import React, { useState } from 'react';
import { Search, Filter, ArrowDownRight, ArrowUpRight, MoreHorizontal } from 'lucide-react';

const mockTransactions = [
  { id: 1, name: 'Apple Music Subscription', date: 'Oct 24, 2026', amount: -10.99, type: 'expense', category: 'Entertainment', status: 'completed' },
  { id: 2, name: 'Stripe Payout', date: 'Oct 23, 2026', amount: 4500.00, type: 'income', category: 'Business', status: 'completed' },
  { id: 3, name: 'AWS Cloud Services', date: 'Oct 21, 2026', amount: -145.20, type: 'expense', category: 'Infrastructure', status: 'completed' },
  { id: 4, name: 'Figma Subscription', date: 'Oct 20, 2026', amount: -24.00, type: 'expense', category: 'Software', status: 'completed' },
  { id: 5, name: 'Upwork Escrow', date: 'Oct 19, 2026', amount: 1200.00, type: 'income', category: 'Freelance', status: 'pending' },
  { id: 6, name: 'WeWork Office', date: 'Oct 18, 2026', amount: -600.00, type: 'expense', category: 'Office', status: 'completed' },
  { id: 7, name: 'Starbucks', date: 'Oct 18, 2026', amount: -5.40, type: 'expense', category: 'Food', status: 'completed' },
  { id: 8, name: 'Github Copilot', date: 'Oct 17, 2026', amount: -10.00, type: 'expense', category: 'Software', status: 'completed' },
  { id: 9, name: 'Client Retainer', date: 'Oct 16, 2026', amount: 3500.00, type: 'income', category: 'Freelance', status: 'completed' },
  { id: 10, name: 'Uber Ride', date: 'Oct 15, 2026', amount: -24.50, type: 'expense', category: 'Transport', status: 'completed' }
];

const ListPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTransactions = mockTransactions.filter(tx => 
    tx.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    tx.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex-1 flex flex-col gap-6 w-full h-full">
      {/* Header Area */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center bg-[#1a1b20] p-6 rounded-3xl border border-gray-800/60 shadow-lg gap-4">
        <div>
          <h2 className="text-2xl font-semibold text-white">Transactions</h2>
          <p className="text-gray-400 mt-1 text-sm">View and manage all your recent activity.</p>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-[#131418] border border-gray-800 pl-10 pr-4 py-2.5 rounded-xl text-white focus:outline-none focus:border-gray-600 transition-colors w-full sm:w-64"
            />
          </div>
          <button className="p-2.5 bg-[#131418] border border-gray-800 hover:border-gray-600 rounded-xl text-white transition-colors flex items-center gap-2">
            <Filter size={18} />
            <span className="text-sm font-medium hidden sm:block">Filter</span>
          </button>
        </div>
      </div>
      
      {/* Table Area */}
      <div className="bg-[#1a1b20] rounded-3xl border border-gray-800/60 shadow-lg overflow-hidden flex-1 flex flex-col">
        <div className="overflow-x-auto flex-1">
          <table className="w-full text-left border-collapse whitespace-nowrap">
            <thead>
              <tr className="border-b border-gray-800/60 bg-[#131418]/50">
                <th className="p-5 text-gray-400 font-medium text-sm">Transaction</th>
                <th className="p-5 text-gray-400 font-medium text-sm">Date</th>
                <th className="p-5 text-gray-400 font-medium text-sm">Category</th>
                <th className="p-5 text-gray-400 font-medium text-sm">Status</th>
                <th className="p-5 text-gray-400 font-medium text-sm text-right">Amount</th>
                <th className="p-5 text-gray-400 font-medium text-sm text-center w-16">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800/60">
              {filteredTransactions.map(tx => (
                <tr key={tx.id} className="hover:bg-white/2 transition-colors group">
                  <td className="p-5">
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-xl ${tx.type === 'income' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}>
                        {tx.type === 'income' ? <ArrowDownRight size={18} /> : <ArrowUpRight size={18} />}
                      </div>
                      <span className="text-white font-medium">{tx.name}</span>
                    </div>
                  </td>
                  <td className="p-5 text-gray-400 text-sm">{tx.date}</td>
                  <td className="p-5">
                    <span className="px-3 py-1.5 bg-[#131418] border border-gray-800 rounded-lg text-gray-300 text-xs font-medium">
                      {tx.category}
                    </span>
                  </td>
                  <td className="p-5">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${tx.status === 'completed' ? 'bg-green-500 saturate-150' : 'bg-yellow-500 saturate-150'}`}></div>
                      <span className="text-gray-300 text-sm capitalize">{tx.status}</span>
                    </div>
                  </td>
                  <td className={`p-5 text-right font-semibold ${tx.type === 'income' ? 'text-green-400' : 'text-white'}`}>
                    {tx.type === 'income' ? '+' : ''}{tx.amount < 0 ? '-' : ''}${Math.abs(tx.amount).toFixed(2)}
                  </td>
                  <td className="p-5 text-center">
                    <button className="text-gray-500 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-gray-800 opacity-0 group-hover:opacity-100 flex items-center justify-center mx-auto">
                      <MoreHorizontal size={18} />
                    </button>
                  </td>
                </tr>
              ))}
              
              {filteredTransactions.length === 0 && (
                <tr>
                  <td colSpan="6" className="p-8 text-center text-gray-500">
                    No transactions found matching your search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        
        {/* Pagination Footer */}
        <div className="border-t border-gray-800/60 p-4 bg-[#131418]/30 flex justify-between items-center text-sm">
          <span className="text-gray-500">Showing {filteredTransactions.length} of {mockTransactions.length} results</span>
          <div className="flex gap-2">
            <button className="px-3 py-1.5 bg-[#1a1b20] border border-gray-800 rounded-lg text-gray-400 hover:text-white hover:border-gray-600 transition-colors disabled:opacity-50" disabled>Previous</button>
            <button className="px-3 py-1.5 bg-[#1a1b20] border border-gray-800 rounded-lg text-gray-400 hover:text-white hover:border-gray-600 transition-colors">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListPage;
