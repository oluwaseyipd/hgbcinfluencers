import React from 'react';
import { FaCalendarDays, FaGlobe, FaBuilding } from 'react-icons/fa6';
import give1 from "../assets/images/image-2.jpg";
import give2 from "../assets/images/photizo.jpg";
import {upcomingEvent} from "../constants/data";

const UpComingEvent = () => {
  const colorMap = {
    purple: {
      badge: "from-purple-500 to-purple-600",
      hover: "group-hover:text-purple-600",
      text: "text-purple-600",
      gradient: "from-purple-900/40"
    },
    blue: {
      badge: "from-blue-500 to-indigo-600", 
      hover: "group-hover:text-blue-600",
      text: "text-blue-600",
      gradient: "from-blue-900/40"
    },
    emerald: {
      badge: "from-emerald-500 to-teal-600",
      hover: "group-hover:text-emerald-600", 
      text: "text-emerald-600",
      gradient: "from-emerald-900/40"
    }
  };

  return (
    <div className="py-20 px-[20px] md:px-[200px] bg-gradient-to-br from-slate-50 via-white to-purple-50 relative overflow-hidden">
      
      {/* Floating Background Elements */}
      <div className="absolute top-16 right-16 w-80 h-80 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-16 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl"></div>
      
      {/* Header Section */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold text-black bg-clip-text mb-6">
          Upcoming Events
        </h2>
        <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto font-light">
          Save these dates and set your reminders!
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12 items-start relative z-10">
        
        {/* Events Timeline - Mobile: Each event followed by its image */}
        <div className="lg:col-span-2 space-y-8">
          {upcomingEvent.map((event, index) => {
            const IconComponent = event.icon;
            const colors = colorMap[event.color];
            
            return (
              <div key={index} className="group">
                <div className="flex flex-col md:flex-row gap-6 bg-white/60 backdrop-blur-sm border border-white/50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500">
                  {/* Date Badge */}
                  <div className="flex-shrink-0">
                    <div className={`w-14 h-14 md:w-24 md:h-24 bg-gradient-to-br ${colors.badge} text-white rounded-2xl flex flex-col items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-xs md:text-sm font-bold opacity-90">{event.month}</span>
                      <span className="text-xl md:text-2xl font-bold">{event.day}</span>
                    </div>
                  </div>
                  
                  {/* Event Content */}
                  <div className="flex-1">
                    <a 
                      href={event.link}
                      className={`block text-2xl md:text-3xl font-bold text-gray-800 mb-4 ${colors.hover} transition-colors duration-300 hover:underline cursor-pointer`}
                    >
                      {event.title}
                    </a>
                    <p className="text-gray-600 leading-relaxed text-lg mb-4">
                      {event.content}
                    </p>
                    {event.title.includes("GLS") && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">Global Event</span>
                        <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm font-medium">120+ Countries</span>
                      </div>
                    )}
                    <div className={`flex items-center ${colors.text} font-semibold`}>
                      <IconComponent className="w-5 h-5 mr-2" />
                      {event.tag}
                    </div>
                  </div>
                </div>
                
                {/* Event Image - Only visible on mobile */}
                <div className="lg:hidden mt-6 relative group">
                  <div className="overflow-hidden rounded-3xl shadow-2xl">
                    <img 
                      src={event.img} 
                      alt={`${event.title} Event`} 
                      className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${colors.gradient} via-transparent to-transparent`}></div>
                    
                    {/* Floating Event Card */}
                    <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-xl">
                      <h5 className="font-bold text-gray-800 mb-1 text-sm">{event.title}</h5>
                      <p className="text-xs text-gray-600">{event.month} {event.day} - {event.tag}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Images Section - Only visible on desktop */}
        <div className="lg:col-span-1 hidden lg:block">
          <div className="sticky top-8 space-y-6">
            
            {/* Main Event Image */}
            <div className="relative group">
              <div className="overflow-hidden rounded-3xl shadow-2xl">
                <img 
                  src={give1} 
                  alt="Church Events" 
                  className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                
                {/* Floating Event Card */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl">
                  <h5 className="font-bold text-gray-800 mb-1">Don't Miss Out!</h5>
                  <p className="text-sm text-gray-600">Join us for these transformative events</p>
                </div>
              </div>
            </div>

            {/* Secondary Image */}
            <div className="relative group">
              <div className="overflow-hidden rounded-2xl shadow-xl">
                <img 
                  src={give2} 
                  alt="Community Gathering" 
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 via-transparent to-transparent"></div>
              </div>
            </div>

            {/* Third Image - Replaces Register Now section */}
            <div className="relative group">
              <div className="overflow-hidden rounded-2xl shadow-xl">
                <img 
                  src={give1} 
                  alt="Event Highlights" 
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 via-transparent to-transparent"></div>
                
                {/* Optional overlay text */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-3 shadow-lg">
                  <h5 className="font-bold text-gray-800 mb-1 text-sm">Event Highlights</h5>
                  <p className="text-xs text-gray-600">Transformative experiences await</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpComingEvent;