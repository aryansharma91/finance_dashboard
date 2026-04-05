import React, { useState } from 'react';
import { User, Bell, Shield, Wallet, ChevronRight, Check } from 'lucide-react';

const SettingsPage = () => {
  const [activeMenu, setActiveMenu] = useState('profile');
  const [isSaved, setIsSaved] = useState(false);
  const [formData, setFormData] = useState({
    firstName: 'Aryan',
    lastName: 'Sharma',
    email: 'aryan.sharma@example.com'
  });

  const handleSave = (e) => {
    e.preventDefault();
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  const menuItems = [
    { id: 'profile', icon: User, label: 'Profile Details', color: 'text-blue-400' },
    { id: 'notifications', icon: Bell, label: 'Notifications', color: 'text-yellow-400' },
    { id: 'security', icon: Shield, label: 'Security & Privacy', color: 'text-red-400' },
    { id: 'billing', icon: Wallet, label: 'Billing & Plans', color: 'text-green-400' }
  ];

  return (
    <div className="flex flex-col gap-6 w-full min-h-[600px]">
      {/* Header Area */}
      <div className="flex justify-between items-center bg-[#1a1b20] p-6 rounded-3xl border border-gray-800/60 shadow-lg gap-4">
        <div>
          <h2 className="text-2xl font-semibold text-white">Settings</h2>
          <p className="text-gray-400 mt-1 text-sm">Manage your account preferences and configurations.</p>
        </div>
      </div>
      
      {/* Settings Layout */}
      <div className="flex-1 flex flex-col xl:flex-row gap-6">
        
        {/* Settings Navigation */}
        <div className="xl:w-72 bg-[#1a1b20] border border-gray-800/60 rounded-3xl p-4 shadow-lg h-fit">
          <nav className="space-y-2">
            {menuItems.map(item => (
              <button 
                key={item.id}
                onClick={() => setActiveMenu(item.id)}
                className={`w-full flex items-center justify-between p-3 rounded-xl transition-colors border ${activeMenu === item.id ? 'bg-[#131418] text-white border-gray-800' : 'text-gray-400 hover:bg-[#131418] hover:text-white border-transparent'}`}
              >
                <div className="flex items-center gap-3">
                  <item.icon size={18} className={item.color} />
                  <span className="font-medium text-sm">{item.label}</span>
                </div>
                <ChevronRight size={16} className={`transition-opacity ${activeMenu === item.id ? 'opacity-100 text-gray-500' : 'opacity-0 text-gray-600'}`} />
              </button>
            ))}
          </nav>
        </div>

        {/* Settings Content Area */}
        <div className="flex-1 bg-[#1a1b20] border border-gray-800/60 rounded-3xl p-6 lg:p-8 shadow-lg">
          <div className="max-w-2xl">
            {activeMenu === 'profile' && (
              <>
                <h3 className="text-xl font-semibold text-white border-b border-gray-800/60 pb-4 mb-6">Profile Details</h3>
                
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-20 h-20 rounded-full bg-linear-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg border-2 border-[#1a1b20] ring-2 ring-gray-800">
                    {formData.firstName.charAt(0)}{formData.lastName.charAt(0)}
                  </div>
                  <div>
                    <button className="px-4 py-2 bg-[#131418] border border-gray-800 hover:border-gray-600 text-white text-sm font-medium rounded-xl transition-colors mb-2">Change Avatar</button>
                    <p className="text-xs text-gray-500">JPG, GIF or PNG. 1MB max.</p>
                  </div>
                </div>

                <form className="space-y-6" onSubmit={handleSave}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-400">First Name</label>
                      <input 
                        type="text" 
                        value={formData.firstName}
                        onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                        className="w-full bg-[#131418] border border-gray-800 focus:border-gray-600 focus:outline-none rounded-xl px-4 py-2.5 text-white transition-colors" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-400">Last Name</label>
                      <input 
                        type="text" 
                        value={formData.lastName}
                        onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                        className="w-full bg-[#131418] border border-gray-800 focus:border-gray-600 focus:outline-none rounded-xl px-4 py-2.5 text-white transition-colors" 
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400">Email Address</label>
                    <input 
                      type="email" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-[#131418] border border-gray-800 focus:border-gray-600 focus:outline-none rounded-xl px-4 py-2.5 text-white transition-colors" 
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400">Role</label>
                    <input type="text" disabled defaultValue="Workspace Administrator" className="w-full bg-[#131418] border border-gray-800 rounded-xl px-4 py-2.5 text-gray-500 opacity-70 cursor-not-allowed" />
                  </div>

                  <div className="pt-6 border-t border-gray-800/60 flex justify-end gap-4 relative">
                    <button type="button" className="px-5 py-2.5 bg-transparent text-gray-400 hover:text-white text-sm font-medium rounded-xl transition-colors">Cancel</button>
                    <button type="submit" className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-xl transition-colors shadow-lg flex items-center gap-2">
                      {isSaved ? <><Check size={16}/> Saved!</> : 'Save Changes'}
                    </button>
                  </div>
                </form>
              </>
            )}

            {activeMenu === 'notifications' && (
              <div className="py-8 text-center text-gray-400">
                <Bell size={48} className="mx-auto mb-4 opacity-50" />
                <p>Notification preferences coming soon.</p>
              </div>
            )}
            
            {activeMenu === 'security' && (
              <div className="py-8 text-center text-gray-400">
                <Shield size={48} className="mx-auto mb-4 opacity-50" />
                <p>Security settings coming soon.</p>
              </div>
            )}

            {activeMenu === 'billing' && (
              <div className="py-8 text-center text-gray-400">
                <Wallet size={48} className="mx-auto mb-4 opacity-50" />
                <p>Billing configuration coming soon.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
