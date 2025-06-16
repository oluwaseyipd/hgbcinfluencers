import React, { useState, useEffect } from 'react';
import { FaYoutube, FaFacebookF, FaTelegram, FaCalendar, FaClock, FaBell, FaPlay } from "react-icons/fa6";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const WatchLive = () => {
 const [isLive, setIsLive] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [nextService, setNextService] = useState(null);
  const [countdown, setCountdown] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(now);
      
      // Define service times
      const services = [
        { day: 0, time: '07:30', name: 'Sunday First Service' }, // Sunday
        { day: 0, time: '10:30', name: 'Sunday Second Service' }, // Sunday
        { day: 3, time: '18:00', name: 'Wednesday Bible Study' }, // Wednesday
        { day: 4, time: '17:45', name: 'Thursday Face to Face' }, // Thursday
      ];
      
      // Find next service
      let nextServiceTime = null;
      let nextServiceName = '';
      
      for (let i = 0; i < 7; i++) {
        const targetDate = new Date(now);
        targetDate.setDate(now.getDate() + i);
        
        services.forEach(service => {
          if (targetDate.getDay() === service.day) {
            const [hours, minutes] = service.time.split(':');
            const serviceTime = new Date(targetDate);
            serviceTime.setHours(parseInt(hours), parseInt(minutes), 0, 0);
            
            if (serviceTime > now && (!nextServiceTime || serviceTime < nextServiceTime)) {
              nextServiceTime = serviceTime;
              nextServiceName = service.name;
            }
          }
        });
      }
      
      if (nextServiceTime) {
        setNextService(nextServiceName);
        const timeDiff = nextServiceTime - now;
        
        // Check if we're within 30 minutes of service time
        if (timeDiff <= 30 * 60 * 1000 && timeDiff > 0) {
          setIsLive(true);
        } else {
          setIsLive(false);
        }
        
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
        
        if (days > 0) {
          setCountdown(`${days}d ${hours}h ${minutes}m`);
        } else if (hours > 0) {
          setCountdown(`${hours}h ${minutes}m ${seconds}s`);
        } else {
          setCountdown(`${minutes}m ${seconds}s`);
        }
      }
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  const platforms = [
    {
      name: 'Facebook Live',
      icon: FaFacebookF,
      color: 'from-blue-600 to-blue-700',
      hoverColor: 'hover:from-blue-700 hover:to-blue-800',
      url: 'https://facebook.com/hgbcinfluencers',
      description: 'Join our Facebook community'
    },
    {
      name: 'YouTube Live',
      icon: FaYoutube,
      color: 'from-red-600 to-red-700',
      hoverColor: 'hover:from-red-700 hover:to-red-800',
      url: 'https://youtube.com/@hgbcinfluencers',
      description: 'Watch in HD quality'
    },
    {
      name: 'Telegram',
      icon: FaTelegram,
      color: 'from-sky-500 to-sky-600',
      hoverColor: 'hover:from-sky-600 hover:to-sky-700',
      url: 'https://t.me/hgbcinfluencers',
      description: 'Get instant updates'
    }
  ];

  const weeklyServices = [
    {
      title: 'Sunday First Service',
      time: '7:30 AM',
      date: 'Every Sunday',
      type: 'Main Service'
    },
    {
      title: 'Sunday Second Service',
      time: '10:30 AM',
      date: 'Every Sunday',
      type: 'Main Service'
    },
    {
      title: 'Wednesday Bible Study',
      time: '6:00 PM',
      date: 'Every Wednesday',
      type: 'Bible Study'
    },
    {
      title: 'Thursday Face to Face',
      time: '5:45 PM',
      date: 'Every Thursday',
      type: 'Face To Face'
    }
  ];

  return (
    <>
    <Navbar />
 <div className="min-h-screen py-16 px-6 md:px-12 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-4 -right-4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-8 -left-8 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              {isLive && (
                <div className="flex items-center bg-red-500/20 backdrop-blur-sm border border-red-500/30 rounded-full px-4 py-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse mr-2"></div>
                  <span className="text-red-400 font-medium text-sm">LIVE NOW</span>
                  <Wifi className="w-4 h-4 text-red-400 ml-2" />
                </div>
              )}
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white my-8 tracking-tight">
              Watch Us Live
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-5 max-w-3xl mx-auto leading-relaxed">
              Experience worship, fellowship, and God's word from anywhere in the world. 
              Join our global community of believers.
            </p>

            {(isLive || nextService) && (
              <div className="flex flex-wrap items-center justify-center space-x-6 text-white/80 mb-8">
                {nextService && (
                  <div className="flex items-center">
                    <FaCalendar className="w-5 h-5 mr-2" />
                    <span className="font-medium">Next: {nextService}</span>
                  </div>
                )}
                <div className="flex items-center mt-3 md:mt-0">
                  <FaClock className="w-5 h-5 mr-2" />
                  <span className="font-medium">{countdown ? `${countdown}` : currentTime.toLocaleTimeString()}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Live Stream Platforms */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Platform</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Connect with us on your preferred platform and never miss a moment of worship
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {platforms.map((platform, index) => {
              const IconComponent = platform.icon;
              return (
                <div
                  key={platform.name}
                  className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                  style={{
                    animationDelay: `${index * 200}ms`,
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${platform.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{platform.name}</h3>
                    <p className="text-gray-600 mb-6">{platform.description}</p>
                    
                    <a 
                    href={platform.url} target='_blank'>
                    <button className={`w-full py-4 px-6 rounded-xl cursor-pointer bg-gradient-to-r ${platform.color} ${platform.hoverColor} text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95`}>
                      <div className="flex items-center justify-center">
                        <FaPlay className="w-5 h-5 mr-2" />
                        Watch Live
                      </div>
                     </button>
                    </a>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-400/10 to-blue-400/10 rounded-full blur-2xl"></div>
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-indigo-400/10 rounded-full blur-2xl"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Service Schedule */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Weekly Service Schedule</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Mark your calendar and join us for these transformative gatherings
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {weeklyServices.map((service, index) => (
              <div
                key={service.title}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    {service.type}
                  </span>
                  <FaBell className="w-5 h-5 text-blue-500 cursor-pointer transition-colors" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                
                <div className="space-y-2 text-gray-600">
                  <div className="flex items-center">
                    <FaClock className="w-4 h-4 mr-2" />
                    <span>{service.time}</span>
                  </div>
                  <div className="flex items-center">
                    <FaCalendar className="w-4 h-4 mr-2" />
                    <span>{service.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    
    <Footer />
    </>
  );
};

export default WatchLive;