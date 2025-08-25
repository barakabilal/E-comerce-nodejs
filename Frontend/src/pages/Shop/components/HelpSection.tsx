
import { SetStateAction, useState } from 'react';
import { Search, MessageCircle, Phone, Mail,  ChevronDown, ChevronUp, Star, Award, Shield, Headphones, Book, Users, Zap } from 'lucide-react';

const HelpSection = () => {
  const [activeTab, setActiveTab] = useState('support');
  const [openFaq, setOpenFaq] = useState(null);
 

  const faqs = [
    {
      id: 1,
      question: "What's your return policy?",
      answer: "We offer a 30-day hassle-free return policy. Items must be in original condition with all accessories included."
    },
    {
      id: 2,
      question: "How long does shipping take?",
      answer: "Standard shipping takes 3-5 business days. Express shipping (1-2 days) and same-day delivery are available in select areas."
    },
    {
      id: 3,
      question: "Do you offer warranty on products?",
      answer: "Yes! All products come with manufacturer warranty. We also offer extended warranty plans for additional protection."
    },
    {
      id: 4,
      question: "Can I track my order?",
      answer: "Absolutely! You'll receive tracking information via email once your order ships. You can also track orders in your account."
    }
  ];

  const supportOptions = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Live Chat",
      subtitle: "Average response: 2 minutes",
      description: "Chat with our tech experts instantly",
      status: "Available now",
      statusColor: "text-green-500",
      action: "Start Chat"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone Support",
      subtitle: "1-800-TECH-HELP",
      description: "Speak directly with our specialists",
      status: "Mon-Fri 8AM-8PM EST",
      statusColor: "text-blue-500",
      action: "Call Now"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Support",
      subtitle: "help@b-tech-store.com",
      description: "Detailed help via email",
      status: "Response within 2 hours",
      statusColor: "text-orange-500",
      action: "Send Email"
    }
  ];

  const features = [
    {
      icon: <Shield className="w-8 h-8 text-orange-500" />,
      title: "Secure Shopping",
      description: "256-bit SSL encryption & secure payments"
    },
    {
      icon: <Award className="w-8 h-8 text-orange-500" />,
      title: "Expert Reviews",
      description: "Curated by tech professionals"
    },
    {
      icon: <Zap className="w-8 h-8 text-orange-500" />,
      title: "Fast Delivery",
      description: "Same-day delivery available"
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: "Community",
      description: "Join 50K+ tech enthusiasts"
    }
  ];

  const toggleFaq = (id:null|SetStateAction<null>) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div className="bg-slate-800 text-white">
      {/* Hero Help Section */}
      <div className="relative overflow-hidden py-20 px-3 w-full">
        <div className="absolute inset-0 bg-gradient-to-r"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Headphones className="w-5 h-5 text-orange-400" />
            <span className="text-orange-300 font-medium">24/7 Support Available</span>
          </div>
        
          <h2 className="text-5xl md:text-6xl  font-bold mb-8 bg-gradient-to-r from-orange-400 to-white bg-clip-text text-transparent">
            Need Help Finding the Perfect Product?
          </h2>
          <p className="text-xl text-slate-300 mb-12  max-w-2xl mx-auto">
            Our tech experts are here to guide you through every step of your journey
          </p>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { id: 'support', label: 'Get Support', icon: <Headphones className="w-5 h-5" /> },
            { id: 'faq', label: 'FAQ', icon: <Book className="w-5 h-5" /> },
            { id: 'features', label: 'Why Choose Us', icon: <Star className="w-5 h-5" /> }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/25'
                  : 'bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Support Options */}
      {activeTab === 'support' && (
        <div className="max-w-6xl mx-auto px-6 pb-20">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {supportOptions.map((option, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-orange-500/20 rounded-xl">
                      {option.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{option.title}</h3>
                      <p className="text-slate-400 text-sm">{option.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-slate-300 mb-4">{option.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className={`text-sm font-medium ${option.statusColor}`}>
                      {option.status}
                    </span>
                    <button className="px-4 py-2 bg-orange-500 hover:bg-orange-600 rounded-lg font-medium transition-colors duration-200">
                      {option.action}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Quick Actions</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                'Track Order',
                'Return Item',
                'Tech Support',
                'Product Guide'
              ].map((action, index) => (
                <button
                  key={index}
                  className="p-4 bg-white/10 hover:bg-white/20 rounded-xl font-medium transition-all duration-200 hover:scale-105"
                >
                  {action}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* FAQ Section */}
      {activeTab === 'faq' && (
        <div className="max-w-4xl mx-auto px-6 pb-20">
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.id} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden">
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
                >
                  <span className="text-lg font-medium">{faq.question}</span>
                  {openFaq === faq.id ? (
                    <ChevronUp className="w-5 h-5 text-orange-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400" />
                  )}
                </button>
                {openFaq === faq.id && (
                  <div className="px-6 pb-6">
                    <p className="text-slate-300 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-slate-400 mb-4">Can't find what you're looking for?</p>
            <button className="px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl font-medium hover:from-orange-600 hover:to-orange-700 transition-all duration-200 hover:scale-105 shadow-lg">
              Contact Our Experts
            </button>
          </div>
        </div>
      )}

      {/* Features Section */}
      {activeTab === 'features' && (
        <div className="max-w-6xl mx-auto px-6 pb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {features.map((feature, index) => (
              <div key={index} className="group text-center">
                <div className="relative mx-auto w-16 h-16 mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 rounded-2xl group-hover:scale-110 transition-transform duration-300"></div>
                  <div className="relative flex items-center justify-center w-full h-full">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-slate-400">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 backdrop-blur-md border border-white/20 rounded-2xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: '50K+', label: 'Happy Customers' },
                { number: '99.9%', label: 'Uptime' },
                { number: '24/7', label: 'Support' },
                { number: '4.9★', label: 'Rating' }
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl font-bold text-orange-400 mb-2">{stat.number}</div>
                  <div className="text-slate-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Footer CTA */}
      <div className="bg-gradient-to-r bg-orange-500 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Still Need Help?</h3>
          <p className="text-orange-100 mb-8 text-lg">
            Our expert team is standing by to provide personalized assistance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-orange-600 font-bold rounded-xl hover:bg-orange-50 transition-colors duration-200 flex items-center gap-2 justify-center">
              <MessageCircle className="w-5 h-5" />
              Start Live Chat
            </button>
            <button className="px-8 py-4 bg-white/20 backdrop-blur-md border border-white/20 font-bold rounded-xl hover:bg-white/30 transition-colors duration-200 flex items-center gap-2 justify-center">
              <Phone className="w-5 h-5" />
              Schedule Call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpSection;