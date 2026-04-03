import React from 'react';
import { ChevronLeft, ChevronRight, BarChart2 } from 'lucide-react';

const CalendarWidget = () => {
  const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  const dates = [
    ['', '', '', '', 1, 2, 3],
    [4, 5, 6, 7, 8, 9, 10],
    { week: 3, dates: [11, 12, 13, 14, 15, 16, 17] },
    [18, 19, 20, 21, 22, 23, 24],
    [25, 26, 27, 28, 29, 30, '']
  ];

  return (
    <div className="bg-[#1a1b20] rounded-3xl p-6 h-full flex flex-col justify-between shadow-md">
      <div>
        <div className="flex justify-between items-center mb-6">
          <button className="p-1.5 rounded-full bg-[#23252b] text-gray-400 hover:text-white transition-colors border border-gray-800">
            <ChevronLeft size={16} />
          </button>
          <span className="text-gray-300 font-medium text-sm">January, 2026</span>
          <button className="p-1.5 rounded-full bg-[#23252b] text-gray-400 hover:text-white transition-colors border border-gray-800">
            <ChevronRight size={16} />
          </button>
        </div>
        
        <div className="grid grid-cols-7 gap-2 mb-2 text-center">
          {days.map((day, idx) => (
            <div key={idx} className="text-gray-500 text-xs font-medium">{day}</div>
          ))}
        </div>
        
        <div className="space-y-2">
          {/* First week with diagonal hatched empty days - simplify with empty or styled divs */}
          <div className="grid grid-cols-7 gap-2 text-center text-sm">
             <div className="text-gray-600 rounded flex items-center justify-center p-1 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSJub25lIiAvPgo8cGF0aCBkPSJNMCAwTDggOFoiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIxIiAvPgo8L3N2Zz4=')]"></div>
             <div className="text-gray-600 rounded flex items-center justify-center p-1 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSJub25lIiAvPgo8cGF0aCBkPSJNMCAwTDggOFoiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIxIiAvPgo8L3N2Zz4=')]"></div>
             <div className="text-gray-600 rounded flex items-center justify-center p-1 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSJub25lIiAvPgo8cGF0aCBkPSJNMCAwTDggOFoiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIxIiAvPgo8L3N2Zz4=')]"></div>
             <div className="text-gray-600 rounded flex items-center justify-center p-1 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSJub25lIiAvPgo8cGF0aCBkPSJNMCAwTDggOFoiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIxIiAvPgo8L3N2Zz4=')]"></div>
             <div className="text-gray-300 py-1.5">1</div>
             <div className="text-gray-300 py-1.5">2</div>
             <div className="text-gray-300 py-1.5">3</div>
          </div>
          <div className="grid grid-cols-7 gap-2 text-center text-sm">
             {[4, 5, 6, 7, 8, 9, 10].map(d => <div key={d} className="text-gray-300 py-1.5">{d}</div>)}
          </div>
          <div className="grid grid-cols-7 gap-2 text-center text-sm">
             {[11, 12, 13, 14, 15, 16, 17].map(d => (
               <div key={d} className={`py-1.5 relative ${d === 11 ? 'bg-[#3b82f6] text-white rounded-lg shadow-sm' : 'text-gray-300'}`}>
                 {d}
                 {d === 11 && <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full"></span>}
               </div>
             ))}
          </div>
          <div className="grid grid-cols-7 gap-2 text-center text-sm">
             {[18, 19, 20, 21, 22, 23, 24].map(d => <div key={d} className="text-gray-300 py-1.5">{d}</div>)}
          </div>
          <div className="grid grid-cols-7 gap-2 text-center text-sm">
             {[25, 26, 27, 28, 29, 30].map(d => <div key={d} className="text-gray-300 py-1.5">{d}</div>)}
             <div className="text-gray-600 rounded flex items-center justify-center p-1 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSJub25lIiAvPgo8cGF0aCBkPSJNMCAwTDggOFoiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIxIiAvPgo8L3N2Zz4=')]"></div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 bg-[#23252b] rounded-2xl p-4 flex justify-between items-center bg-gradient-to-r border border-gray-800 from-[#202227] to-[#1c1e22]">
        <div className="bg-[#2d3038] p-2.5 rounded-xl border border-gray-700 shadow-inner">
           <BarChart2 size={18} className="text-gray-300" />
        </div>
        <div className="flex items-baseline space-x-3">
          <span className="text-white text-3xl font-semibold">$1,434</span>
          <div className="flex items-center text-green-400 text-xs">
            ▲ 12.4%
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarWidget;
