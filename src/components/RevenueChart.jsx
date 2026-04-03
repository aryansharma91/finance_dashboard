import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell } from 'recharts';
import { Filter } from 'lucide-react';

const data = [
  { name: 'Jul', value: 4800, max: 6000 },
  { name: 'Aug', value: 3500, max: 6000 },
  { name: 'Sep', value: 4300, max: 6000, selected: true, label: '+12%', valText: '$1048' },
  { name: 'Oct', value: 5000, max: 6000 },
  { name: 'Nov', value: 2900, max: 6000 },
  { name: 'Dec', value: 5800, max: 6000 },
  { name: 'Jan', value: 2200, max: 6000 },
  { name: 'Feb', value: 4800, max: 6000 },
  { name: 'Mar', value: 3800, max: 6000 },
  { name: 'Apr', value: 5500, max: 6000 },
  { name: 'May', value: 2600, max: 6000 },
  { name: 'Jun', value: 4400, max: 6000 }
];

const CustomBar = (props) => {
  const { x, y, width, height, payload } = props;
  const isSelected = payload.selected;
  const radius = 6;
  
  // Custom background bar pattern outline
  const bgHeight = 250; 
  const yBg = 50;

  return (
    <g>
      {/* Background patterned/dashed effect for unselected (simplified using dashed stroke) */}
      {!isSelected && (
        <rect 
          x={x} 
          y={yBg} 
          width={width} 
          height={bgHeight} 
          rx={radius} 
          fill="none" 
          stroke="#2a2d33" 
          strokeWidth="1"
          strokeDasharray="4 4"
        />
      )}
      
      {/* Fill bar */}
      <path 
        d={`M${x},${y + height} L${x},${y + radius} A${radius},${radius},0,0,1,${x + radius},${y} L${x + width - radius},${y} A${radius},${radius},0,0,1,${x + width},${y + radius} L${x + width},${y + height} Z`} 
        fill={isSelected ? "#3b82f6" : "#212328"} 
      />
      
      {/* Selection indicators */}
      {isSelected && payload.label && (
        <g>
           <rect x={x + width/2 - 20} y={y - 25} width={40} height={20} rx={10} fill="#60a5fa" />
           <text x={x + width/2} y={y - 11} fill="#fff" fontSize={10} textAnchor="middle" fontWeight="bold">{payload.label}</text>
           <text x={x + width/2} y={y + height - 10} fill="#fff" fontSize={11} textAnchor="middle">{payload.valText}</text>
        </g>
      )}
      {!isSelected && (
         <line x1={x + 4} y1={y + 6} x2={x + width - 4} y2={y + 6} stroke="#4b5563" strokeWidth="2" strokeLinecap="round" />
      )}
    </g>
  );
};

const RevenueChart = () => {
  return (
    <div className="bg-[#1a1b20] rounded-3xl p-6 h-full flex flex-col shadow-md">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-gray-400 text-lg mb-2">Revenue</h2>
          <div className="flex items-baseline space-x-3">
            <span className="text-white text-4xl font-semibold">$ 28,165</span>
            <div className="flex items-center space-x-2">
              <span className="bg-green-500/20 text-green-400 text-xs px-2 py-0.5 rounded-full flex items-center">
                ▲ 8.3%
              </span>
              <span className="text-gray-500 text-sm">vs 24,280 last period</span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-2 bg-[#23252b] rounded-full p-1 border border-gray-800">
          <button className="px-4 py-1 text-xs text-gray-400 hover:text-white transition-colors">Weekly</button>
          <button className="px-4 py-1 text-xs text-gray-400 hover:text-white transition-colors">Monthly</button>
          <button className="px-4 py-1 text-xs bg-white text-black rounded-full font-medium shadow-sm">Yearly</button>
          <button className="px-4 py-1 text-xs text-gray-400 hover:text-white transition-colors">Range</button>
          <button className="p-1.5 ml-1 bg-[#32363e] rounded-full text-white">
             <Filter size={14} />
          </button>
        </div>
      </div>
      
      <div className="flex-1 w-full mt-4 min-h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 30, right: 0, left: -20, bottom: 0 }} barSize={36}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#2a2d33" />
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#6b7280', fontSize: 12}} dy={10} />
            <YAxis axisLine={false} tickLine={false} tick={{fill: '#6b7280', fontSize: 12}} ticks={[0, 1500, 3000, 4500, 6000]} />
            <Bar dataKey="value" shape={<CustomBar />} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueChart;
