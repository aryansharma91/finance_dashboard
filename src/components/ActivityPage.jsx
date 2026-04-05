import React from 'react';
import { 
  ArrowUpRight, ArrowDownRight, UserPlus, 
  Settings, CreditCard, ShieldAlert 
} from 'lucide-react';

const mockActivities = [
  {
    id: 1,
    type: 'transaction_out',
    title: 'Payment sent to AWS',
    description: 'Cloud infrastructure monthly billing',
    time: '2 hours ago',
    date: 'Oct 24, 2026',
    icon: ArrowUpRight,
    color: 'text-orange-500',
    bg: 'bg-orange-500/10'
  },
  {
    id: 2,
    type: 'transaction_in',
    title: 'Invoice #INV-2041 Paid',
    description: 'Payment received from Apple Inc.',
    time: '5 hours ago',
    date: 'Oct 24, 2026',
    icon: ArrowDownRight,
    color: 'text-green-500',
    bg: 'bg-green-500/10'
  },
  {
    id: 3,
    type: 'user',
    title: 'New Team Member Added',
    description: 'Sarah Jenkins accepted your invitation',
    time: 'Yesterday',
    date: 'Oct 23, 2026',
    icon: UserPlus,
    color: 'text-blue-500',
    bg: 'bg-blue-500/10'
  },
  {
    id: 4,
    type: 'security',
    title: 'New Login Detected',
    description: 'Login from a new device in San Francisco, CA',
    time: 'Yesterday',
    date: 'Oct 23, 2026',
    icon: ShieldAlert,
    color: 'text-red-500',
    bg: 'bg-red-500/10'
  },
  {
    id: 5,
    type: 'card',
    title: 'Virtual Card Created',
    description: 'New card created for Marketing Expenses',
    time: 'Oct 21, 2026',
    date: 'Oct 21, 2026',
    icon: CreditCard,
    color: 'text-purple-500',
    bg: 'bg-purple-500/10'
  },
  {
    id: 6,
    type: 'settings',
    title: 'Workspace Settings Updated',
    description: 'Billing email address changed',
    time: 'Oct 20, 2026',
    date: 'Oct 20, 2026',
    icon: Settings,
    color: 'text-gray-400',
    bg: 'bg-gray-500/10'
  }
];

const ActivityPage = () => {
  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Header Area */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center bg-[#1a1b20] p-6 rounded-3xl border border-gray-800/60 shadow-lg gap-4">
        <div>
          <h2 className="text-2xl font-semibold text-white">Activity Log</h2>
          <p className="text-gray-400 mt-1 text-sm">Track all events, transactions, and changes.</p>
        </div>
      </div>
      
      {/* Feed Area */}
      <div className="bg-[#1a1b20] rounded-3xl border border-gray-800/60 shadow-lg p-6 lg:p-8">
        <div className="max-w-3xl mx-auto relative px-4">
          {/* Vertical Timeline Line */}
          <div className="absolute left-[2.35rem] top-4 bottom-4 w-px bg-gray-800/60 hidden sm:block"></div>

          <div className="space-y-8">
            {mockActivities.map((activity) => {
              const Icon = activity.icon;
              return (
                <div key={activity.id} className="relative flex gap-4 sm:gap-6 group">
                  {/* Timeline Node */}
                  <div className="hidden sm:flex flex-col items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center border-4 border-[#1a1b20] z-10 ${activity.bg} ${activity.color} ring-1 ring-gray-800 transition-transform group-hover:scale-110`}>
                       <Icon size={16} />
                    </div>
                  </div>

                  {/* Activity Card */}
                  <div className="flex-1 bg-[#131418] hover:bg-bg-card border border-gray-800/60 hover:border-gray-700/60 p-5 rounded-2xl transition-all shadow-sm">
                    <div className="flex justify-between items-start mb-2 gap-4">
                      <div className="flex items-center gap-3">
                        {/* Mobile Icon */}
                        <div className={`sm:hidden p-2 rounded-lg ${activity.bg} ${activity.color}`}>
                          <Icon size={16} />
                        </div>
                        <h4 className="text-white font-medium">{activity.title}</h4>
                      </div>
                      <span className="text-xs text-gray-500 whitespace-nowrap bg-[#1a1b20] px-2.5 py-1 rounded-md border border-gray-800">
                        {activity.time}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm ml-0 sm:ml-0">{activity.description}</p>
                    <div className="mt-3 text-xs text-gray-500">
                       {activity.date}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Load More Button */}
        <div className="mt-10 flex justify-center pb-4">
          <button className="px-5 py-2.5 bg-[#131418] border border-gray-800 hover:border-gray-600 rounded-xl text-white text-sm font-medium transition-colors shadow-sm">
            Load More Activity
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActivityPage;
