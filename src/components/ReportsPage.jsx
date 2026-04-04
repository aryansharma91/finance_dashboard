import React from 'react';
import { Download, FileText, Filter, MoreHorizontal } from 'lucide-react';

const reports = [
  { id: 1, title: 'Q3 Financial Summary', date: 'Oct 15, 2026', size: '2.4 MB', type: 'PDF' },
  { id: 2, title: 'Annual Tax Returns 2025', date: 'Apr 12, 2026', size: '4.1 MB', type: 'PDF' },
  { id: 3, title: 'Monthly Expense Audit', date: 'Sep 30, 2026', size: '1.1 MB', type: 'CSV' },
  { id: 4, title: 'Employee Payroll Logs', date: 'Oct 01, 2026', size: '3.8 MB', type: 'XLSX' }
];

const ReportsPage = () => {
  return (
    <div className="flex-1 flex flex-col gap-6 w-full h-full">
      <div className="flex flex-col sm:flex-row justify-between items-center bg-[#1a1b20] p-6 rounded-3xl border border-gray-800/60 shadow-lg gap-4">
        <div>
          <h2 className="text-2xl font-semibold text-white">Documents & Reports</h2>
          <p className="text-gray-400 mt-1 text-sm">Access your generated reports and statements.</p>
        </div>
        <button className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-medium transition-colors shadow-lg flex items-center gap-2">
          <FileText size={18} />
          <span>Generate Report</span>
        </button>
      </div>

      <div className="bg-[#1a1b20] rounded-3xl border border-gray-800/60 shadow-lg flex-1 overflow-hidden flex flex-col p-6 lg:p-8">
        <h3 className="text-lg font-medium text-white mb-6">Recent Files</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {reports.map(report => (
            <div key={report.id} className="bg-[#131418] border border-gray-800 p-5 rounded-2xl hover:border-indigo-500/50 transition-all group shadow-sm hover:shadow-indigo-500/10">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-xl">
                  <FileText size={24} />
                </div>
                <button className="text-gray-500 hover:text-white transition-colors">
                  <MoreHorizontal size={20} />
                </button>
              </div>
              <h4 className="text-white font-medium mb-1 truncate" title={report.title}>{report.title}</h4>
              <div className="flex justify-between items-center mt-6 text-xs text-gray-500 border-t border-gray-800/60 pt-4">
                <span>{report.date}</span>
                <span className="font-semibold bg-gray-800 px-2 py-0.5 rounded text-gray-300">{report.type}</span>
              </div>
            </div>
          ))}
        </div>
        
        <h3 className="text-lg font-medium text-white mt-10 mb-6">All Documents</h3>
        <div className="flex-1 border-2 border-gray-800/60 rounded-2xl flex flex-col items-center justify-center bg-[#131418]/50 border-dashed min-h-[200px]">
          <FileText size={40} className="text-gray-600 mb-4" />
          <p className="text-gray-400 font-medium">No other documents found</p>
          <p className="text-gray-500 text-sm mt-1">Select a category or date range to view older documents</p>
        </div>
      </div>
    </div>
  );
};
export default ReportsPage;
