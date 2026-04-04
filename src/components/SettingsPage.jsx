import React from 'react';
import { User, Bell, Shield, Wallet, ChevronRight } from 'lucide-react';

const SettingsPage = () => {
  return (
    <div className="flex-1 flex flex-col gap-6 w-full h-full">
      {/* Header Area */}
      <div className="flex justify-between items-center bg-[#1a1b20] p-6 rounded-3xl border border-gray-800/60 shadow-lg gap-4">
        <div>
          <h2 className="text-2xl font-semibold text-white">Settings</h2>
          <p className="text-gray-400 mt-1 text-sm">Manage your account preferences and configurations.</p>
        </div>
      </div>
      
      {/* Settings Layout */}
      <div className="flex-1 flex flex-col lg:flex-row gap-6 h-full overflow-hidden">
        
        {/* Settings Navigation */}
        <div className="lg:w-72 bg-[#1a1b20] border border-gray-800/60 rounded-3xl p-4 shadow-lg overflow-y-auto">
          <nav className="space-y-2">
            <button className="w-full flex items-center justify-between p-3 rounded-xl bg-[#131418] text-white border border-gray-800">
              <div className="flex items-center gap-3">
                <User size={18} className="text-blue-400" />
                <span className="font-medium text-sm">Profile Details</span>
              </div>
              <ChevronRight size={16} className="text-gray-500" />
            </button>
            <button className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-[#131418] text-gray-400 hover:text-white transition-colors border border-transparent">
              <div className="flex items-center gap-3">
                <Bell size={18} className="text-yellow-400" />
                <span className="font-medium text-sm">Notifications</span>
              </div>
              <ChevronRight size={16} className="text-gray-500" />
            </button>
            <button className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-[#131418] text-gray-400 hover:text-white transition-colors border border-transparent">
              <div className="flex items-center gap-3">
                <Shield size={18} className="text-red-400" />
                <span className="font-medium text-sm">Security & Privacy</span>
              </div>
              <ChevronRight size={16} className="text-gray-500" />
            </button>
            <button className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-[#131418] text-gray-400 hover:text-white transition-colors border border-transparent">
              <div className="flex items-center gap-3">
                <Wallet size={18} className="text-green-400" />
                <span className="font-medium text-sm">Billing & Plans</span>
              </div>
              <ChevronRight size={16} className="text-gray-500" />
            </button>
          </nav>
        </div>

        {/* Settings Content Area */}
        <div className="flex-1 bg-[#1a1b20] border border-gray-800/60 rounded-3xl p-6 lg:p-8 shadow-lg overflow-y-auto custom-scrollbar">
          <div className="max-w-2xl">
            <h3 className="text-xl font-semibold text-white border-b border-gray-800/60 pb-4 mb-6">Profile Details</h3>
            
            <div className="flex items-center gap-6 mb-8">
              <div className="w-20 h-20 rounded-full bg-linear-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg border-2 border-[#1a1b20] ring-2 ring-gray-800">
                AS
              </div>
              <div>
                <button className="px-4 py-2 bg-[#131418] border border-gray-800 hover:border-gray-600 text-white text-sm font-medium rounded-xl transition-colors mb-2">Change Avatar</button>
                <p className="text-xs text-gray-500">JPG, GIF or PNG. 1MB max.</p>
              </div>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">First Name</label>
                  <input type="text" defaultValue="Aryan" className="w-full bg-[#131418] border border-gray-800 focus:border-gray-600 focus:outline-none rounded-xl px-4 py-2.5 text-white transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Last Name</label>
                  <input type="text" defaultValue="Sharma" className="w-full bg-[#131418] border border-gray-800 focus:border-gray-600 focus:outline-none rounded-xl px-4 py-2.5 text-white transition-colors" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Email Address</label>
                <input type="email" defaultValue="aryan.sharma@example.com" className="w-full bg-[#131418] border border-gray-800 focus:border-gray-600 focus:outline-none rounded-xl px-4 py-2.5 text-white transition-colors" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Role</label>
                <input type="text" disabled defaultValue="Workspace Administrator" className="w-full bg-[#131418] border border-gray-800 rounded-xl px-4 py-2.5 text-gray-500 opacity-70 cursor-not-allowed" />
              </div>

              <div className="pt-6 border-t border-gray-800/60 flex justify-end gap-4">
                <button type="button" className="px-5 py-2.5 bg-transparent text-gray-400 hover:text-white text-sm font-medium rounded-xl transition-colors">Cancel</button>
                <button type="button" className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-xl transition-colors shadow-lg">Save Changes</button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SettingsPage;
