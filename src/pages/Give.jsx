import { useState } from 'react';
import { Heart, Building, GraduationCap, DollarSign, Copy, CheckCircle, X, ChevronRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'

const Give = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [copiedField, setCopiedField] = useState(null);

  const givingOptions = [
    {
      id: 'tithe',
      title: 'Tithe & Offering',
      description: 'Your faithful tithes and offerings support our ministry and community outreach programs.',
      icon: Heart,
      color: 'from-purple-600 to-pink-600',
      bgColor: 'bg-gradient-to-br from-purple-50 to-pink-50',
      accounts: {
        bankName: 'First National Bank',
        accountName: 'Grace Community Church - General Fund',
        accountNumber: '1234567890',
        routingNumber: '987654321',
        swiftCode: 'FNBKUS33'
      }
    },
    {
      id: 'building',
      title: 'Influence 363',
      description: 'Church building project to expand our facilities and reach more souls for Christ.',
      icon: Building,
      color: 'from-blue-600 to-cyan-600',
      bgColor: 'bg-gradient-to-br from-blue-50 to-cyan-50',
      accounts: {
        bankName: 'Community Trust Bank',
        accountName: 'Grace Community Church - Building Fund',
        accountNumber: '2345678901',
        routingNumber: '876543210',
        swiftCode: 'CTBKUS44'
      }
    },
    {
      id: 'scholarship',
      title: 'Scholarship Fund',
      description: 'Support education by sponsoring students in their academic journey and spiritual growth.',
      icon: GraduationCap,
      color: 'from-green-600 to-emerald-600',
      bgColor: 'bg-gradient-to-br from-green-50 to-emerald-50',
      accounts: {
        bankName: 'Education Credit Union',
        accountName: 'Grace Community Church - Scholarship Fund',
        accountNumber: '3456789012',
        routingNumber: '765432109',
        swiftCode: 'ECUNUS55'
      }
    },
    {
      id: 'dollar',
      title: 'Church Dollar Account',
      description: 'Special giving account for emergency needs and community assistance programs.',
      icon: DollarSign,
      color: 'from-orange-600 to-red-600',
      bgColor: 'bg-gradient-to-br from-orange-50 to-red-50',
      accounts: {
        bankName: 'Metropolitan Bank',
        accountName: 'Grace Community Church - Dollar Account',
        accountNumber: '4567890123',
        routingNumber: '654321098',
        swiftCode: 'METBUS66'
      }
    }
  ];

  const copyToClipboard = async (text, field) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const closeModal = () => {
    setSelectedCard(null);
    setCopiedField(null);
  };

  return (
    <>
    <Navbar />

        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-8 animate-bounce">
            <Heart className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Give with Purpose
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Your generosity transforms lives and builds God's kingdom. Choose how you'd like to make a difference today.
          </p>
          
          {/* Bible Verse */}
          <div className="mt-12 p-6 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 max-w-2xl mx-auto">
            <p className="text-lg text-gray-200 italic">
              "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver."
            </p>
            <p className="text-purple-300 font-semibold mt-2">2 Corinthians 9:7</p>
          </div>
        </div>

        {/* Giving Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {givingOptions.map((option, index) => {
            const IconComponent = option.icon;
            return (
              <div
                key={option.id}
                className="group relative"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                <div className={`relative ${option.bgColor} p-8 rounded-2xl border border-white/20 backdrop-blur-sm hover:scale-105 transition-all duration-300 cursor-pointer h-full`}>
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${option.color} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{option.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{option.description}</p>
                  
                  <button
                    onClick={() => setSelectedCard(option)}
                    className={`w-full bg-gradient-to-r ${option.color} text-white font-semibold py-3 px-6 rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center group`}
                  >
                    View Account Details
                    <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {selectedCard && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-3xl max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl transform animate-in fade-in-0 zoom-in-95 duration-300">
            <div className="sticky top-0 bg-white rounded-t-3xl border-b border-gray-200 p-6 flex items-center justify-between">
              <div className="flex items-center">
                <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${selectedCard.color} rounded-xl mr-4`}>
                  <selectedCard.icon className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">{selectedCard.title}</h2>
              </div>
              <button
                onClick={closeModal}
                className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            
            <div className="p-6">
              <p className="text-gray-600 mb-8 leading-relaxed">{selectedCard.description}</p>
              
              <div className="space-y-4">
                {Object.entries(selectedCard.accounts).map(([key, value]) => (
                  <div key={key} className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors duration-200">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-500 uppercase tracking-wide mb-1">
                          {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                        </label>
                        <p className="text-lg font-semibold text-gray-800">{value}</p>
                      </div>
                      <button
                        onClick={() => copyToClipboard(value, key)}
                        className={`ml-4 w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200 ${
                          copiedField === key
                            ? 'bg-green-500 text-white'
                            : 'bg-gray-200 hover:bg-gray-300 text-gray-600'
                        }`}
                      >
                        {copiedField === key ? (
                          <CheckCircle className="w-5 h-5" />
                        ) : (
                          <Copy className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-blue-50 rounded-xl border border-blue-200">
                <p className="text-sm text-blue-800">
                  <strong>Note:</strong> Please include your name and "{selectedCard.title}" in the transaction reference for proper allocation.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>

    <Footer />
    </>

  );
};

export default Give;