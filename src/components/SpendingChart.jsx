import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { Info } from 'lucide-react';

const data = [
  { name: 'Activity', value: 1840, color: '#f97316' },   // Orange
  { name: 'Meals', value: 1200, color: '#10b981' },      // Green
  { name: 'Office supplies', value: 800, color: '#eab308' }, // Yellow
  { name: 'Rewards', value: 600, color: '#3b82f6' },     // Blue
  { name: 'Internet&Telephone', value: 1400, color: '#a855f7' }, // Purple
];

const SpendingData = [
  { name: 'Activity', value: 1840, percent: 16, color: '#f97316' },
  { name: 'Meals', value: 1200, percent: 10, color: '#10b981' },
  { name: 'Office supplies', value: 800, percent: 8, color: '#eab308' },
  { name: 'Rewards', value: 600, percent: 5, color: '#3b82f6' },
  { name: 'Internet&Telephone', value: 1400, percent: 12, color: '#a855f7' },
  { name: 'Other', value: 5000, percent: 49, color: '#374151' }, // Dark Gray
];

const SpendingPieChart = () => {
  return (
    <div className="bg-[#1a1b20] rounded-3xl p-6 h-full flex flex-col shadow-md">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-white font-medium text-lg">Spending</h3>
        <select className="bg-[#23252b] text-gray-300 text-xs rounded-full px-3 py-1 border border-gray-800 outline-none hover:bg-gray-800 cursor-pointer">
          <option>Last 30 Days</option>
          <option>Last 3 Months</option>
          <option>This Year</option>
        </select>
      </div>
      
      <div className="flex-1 flex items-center justify-between mt-2">
        <div className="w-1/2 h-[180px] relative">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={SpendingData}
                cx="50%"
                cy="50%"
                innerRadius={55}
                outerRadius={75}
                paddingAngle={0}
                dataKey="value"
                stroke="none"
              >
                {SpendingData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <span className="text-white text-2xl font-bold">$28,165</span>
            <span className="text-gray-500 text-xs">Total</span>
          </div>
          
          {/* Custom tooltip for the purple slice equivalent */}
          <div className="absolute top-[10%] right-[10%] bg-[#2a2d33] px-2 py-1 rounded shadow-lg text-[10px] leading-tight z-10 border border-gray-700 pointer-events-none transform translate-x-4 -translate-y-2">
             <div className="text-white font-medium">• $1840</div>
             <div className="text-gray-400 ml-1">(16%)</div>
          </div>
        </div>
        
        <div className="w-1/2 pl-4 flex flex-col space-y-2.5">
          {SpendingData.map((item, idx) => (
            <div key={idx} className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full" style={{backgroundColor: item.color}}></span>
              <span className="text-gray-400 text-xs">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-4 bg-[#23252b] rounded-2xl p-3 flex items-start space-x-3 border border-gray-800">
        <Info className="text-gray-500 mt-0.5" size={14} />
        <p className="text-gray-500 text-xs leading-relaxed">
          Most expenses come from Activity and Meals, while Internet&Telephone shows a slight increase.
        </p>
      </div>
    </div>
  );
};

export default SpendingPieChart;
