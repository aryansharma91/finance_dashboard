import React from 'react';
import { Sparkles, Maximize2, Send, Navigation } from 'lucide-react';

const AISummary = () => {
  return (
    <div className="bg-[#1a1b20] rounded-3xl p-6 h-full flex flex-col justify-between shadow-md">
      <div>
        <div className="flex justify-between items-center mb-5">
          <div className="flex items-center space-x-2">
            <Sparkles className="text-blue-400" size={20} />
            <h3 className="text-white font-medium text-lg">How can I help you?</h3>
          </div>
          <button className="p-1.5 rounded-full bg-[#23252b] text-gray-400 hover:text-white transition-colors border border-gray-800">
            <Maximize2 size={14} />
          </button>
        </div>
        
        <h4 className="text-gray-300 font-medium mb-3">AI Summary</h4>
        <p className="text-gray-500 text-sm leading-relaxed mb-6">
          Your financial activity this period remains stable. Revenue shows expected seasonal variation, spending is balanced across key categories. No unusual patterns det...<button className="text-blue-500 hover:text-blue-400 font-medium">Read more</button>
        </p>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-[#23252b] rounded-2xl p-4 border border-gray-800">
            <div className="text-gray-500 text-xs mb-3">Spending Trends</div>
            <div className="flex items-end space-x-3">
              <span className="text-white text-2xl font-semibold">7</span>
              <span className="bg-orange-500/20 text-orange-400 text-[10px] px-2 py-0.5 rounded-full mb-1">Stable</span>
            </div>
          </div>
          <div className="bg-[#23252b] rounded-2xl p-4 border border-gray-800">
            <div className="text-gray-500 text-xs mb-3">Customer Payments</div>
            <div className="flex items-end space-x-3">
              <span className="text-white text-2xl font-semibold">25</span>
              <span className="bg-green-500/20 text-green-400 text-[10px] px-2 py-0.5 rounded-full mb-1">Processed</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="relative">
        <input 
          type="text" 
          placeholder="Ask me anything..." 
          className="w-full bg-[#23252b] text-sm text-gray-200 rounded-full pl-5 pr-12 py-3 focus:outline-none border border-gray-800"
        />
        <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-gray-400 hover:text-white transition-colors">
          <Navigation size={18} className="rotate-45" />
        </button>
      </div>
    </div>
  );
};

export default AISummary;
