import React, { useState } from 'react';
import { Star, Cpu, HardDrive, Monitor, Zap, Award, Shield, Book, Settings, MessageSquare } from 'lucide-react';

const TabbedProductInfo = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Sample data
  const specs = [
    { 
      icon: <Cpu className="w-6 h-6" />, 
      title: 'Processor', 
      value: 'Intel i7-13700K', 
      performance: 95 
    },
    { 
      icon: <Zap className="w-6 h-6" />, 
      title: 'Memory', 
      value: '32GB DDR5', 
      performance: 90 
    },
    { 
      icon: <HardDrive className="w-6 h-6" />, 
      title: 'Storage', 
      value: '1TB NVMe SSD', 
      performance: 88 
    },
    { 
      icon: <Monitor className="w-6 h-6" />, 
      title: 'Graphics', 
      value: 'RTX 4080 Super', 
      performance: 98 
    }
  ];

  const reviews = [
    { 
      name: 'Alex M.', 
      rating: 5, 
      date: '2 days ago', 
      comment: 'Incredible performance! Gaming at 4K is smooth as butter. The build quality is exceptional and it runs incredibly quiet even under heavy load.', 
      verified: true 
    },
    { 
      name: 'Sarah K.', 
      rating: 5, 
      date: '1 week ago', 
      comment: 'Perfect for content creation. Renders are lightning fast and multitasking is seamless. Best investment I\'ve made this year!', 
      verified: true 
    },
    { 
      name: 'Mike R.', 
      rating: 4, 
      date: '2 weeks ago', 
      comment: 'Great value for the specs. Minor cable management issues but overall very satisfied with the performance and design.', 
      verified: true 
    },
    { 
      name: 'Emma L.', 
      rating: 5, 
      date: '3 weeks ago', 
      comment: 'Exceeded all my expectations! Setup was easy and the customer support was fantastic. Highly recommended!', 
      verified: true 
    }
  ];

  const features = [
    {
      icon: <Award className="w-12 h-12" />,
      title: "Premium Build",
      description: "High-quality components and exceptional craftsmanship"
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Peak Performance",
      description: "Optimized for maximum gaming and productivity"
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Future Proof",
      description: "Ready for next-gen games and applications"
    }
  ];

  // Tab configuration
  const tabs = [
    {
      id: 'overview',
      label: 'Overview',
      icon: <Book className="w-5 h-5" />
    },
    {
      id: 'specs',
      label: 'Specifications',
      icon: <Settings className="w-5 h-5" />
    },
    {
      id: 'reviews',
      label: 'Reviews',
      icon: <MessageSquare className="w-5 h-5" />
    }
  ];

  // Render Overview Tab
  const renderOverview = () => (
    <div className="space-y-6 animate-fadeIn">
      <h3 className="text-2xl font-bold text-white">Product Overview</h3>
      <div className="grid md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="bg-slate-700/50 rounded-xl p-6 text-center">
            <div className="w-12 h-12 text-orange-400 mx-auto mb-4">
              {feature.icon}
            </div>
            <h4 className="font-bold mb-2 text-white">{feature.title}</h4>
            <p className="text-slate-300 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );

  // Render Specs Tab
  const renderSpecs = () => (
    <div className="space-y-8 animate-fadeIn">
      <h3 className="text-2xl font-bold mb-6 text-white">Technical Specifications</h3>
      <div className="grid md:grid-cols-2 gap-6">
        {specs.map((spec, index) => (
          <div key={index} className="bg-slate-700/50 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-orange-500/20 rounded-lg text-orange-400">
                {spec.icon}
              </div>
              <div>
                <h4 className="font-bold text-white">{spec.title}</h4>
                <p className="text-slate-300 text-sm">{spec.value}</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-white">Performance</span>
                <span className="text-orange-400">{spec.performance}%</span>
              </div>
              <div className="w-full bg-slate-600 rounded-full h-2">
                <div
                  className="bg-orange-500 h-2 rounded-full transition-all duration-1000"
                  style={{ width: `${spec.performance}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Render Reviews Tab
  const renderReviews = () => (
    <div className="space-y-8 animate-fadeIn">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold text-white">Customer Reviews</h3>
        <div className="flex items-center gap-2">
          <div className="flex text-orange-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" />
            ))}
          </div>
          <span className="text-xl font-bold text-white">4.8</span>
          <span className="text-slate-400">(247 reviews)</span>
        </div>
      </div>

      <div className="space-y-6">
        {reviews.map((review, index) => (
          <div key={index} className="bg-slate-700/50 rounded-xl p-6 border border-orange-500/20">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center font-bold text-white">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-white">{review.name}</div>
                  <div className="text-sm text-slate-400">{review.date}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex text-orange-400">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                  {[...Array(5 - review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-slate-500" />
                  ))}
                </div>
                {review.verified && (
                  <span className="px-2 py-1 bg-orange-500 rounded text-xs font-medium text-white">
                    Verified
                  </span>
                )}
              </div>
            </div>
            <p className="text-slate-300">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="bg-slate-800 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-12">
        
        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 border-b border-slate-700">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 font-medium transition-all duration-300 rounded-t-lg ${
                activeTab === tab.id
                  ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/25 border-b-2 border-orange-500'
                  : 'bg-slate-700/50 text-slate-300 hover:bg-slate-600/50 hover:text-white border-b-2 border-transparent hover:border-orange-400/50'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
              {tab.id === 'reviews' && (
                <span className="ml-2 px-2 py-1 bg-orange-600 text-xs rounded-full">
                  {reviews.length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-slate-700/30 backdrop-blur-sm rounded-2xl p-8 min-h-[600px]">
          {activeTab === 'overview' && renderOverview()}
          {activeTab === 'specs' && renderSpecs()}
          {activeTab === 'reviews' && renderReviews()}
        </div>

        {/* Quick Stats Bar */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-slate-700/50 rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-orange-400">4.8★</div>
            <div className="text-slate-300 text-sm">Average Rating</div>
          </div>
          <div className="bg-slate-700/50 rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-orange-400">247</div>
            <div className="text-slate-300 text-sm">Reviews</div>
          </div>
          <div className="bg-slate-700/50 rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-orange-400">95%</div>
            <div className="text-slate-300 text-sm">Performance</div>
          </div>
          <div className="bg-slate-700/50 rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-orange-400">2yr</div>
            <div className="text-slate-300 text-sm">Warranty</div>
          </div>
        </div>
      </div>

      {/* CSS for fade animation */}
      <style >{`
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-in-out;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default TabbedProductInfo;