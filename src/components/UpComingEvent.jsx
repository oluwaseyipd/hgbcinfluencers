import React from 'react';
import { FaCalendarDays, FaGlobe, FaBuilding } from 'react-icons/fa6';
import give1 from "../assets/images/image-2.jpg";
import give2 from "../assets/images/photizo.jpg";
// import {upcomingEvent} from "../constants/data";
import { events, colorMap } from '../constants/allEventData';

const UpComingEvent = () => {

  return (
    <div className="py-20 px-4 md:px-12 lg:px-[200px] bg-gradient-to-br from-slate-50 via-white to-purple-50 relative overflow-hidden">
      
      {/* Floating Background Elements */}
      <div className="absolute top-16 right-16 w-80 h-80 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-16 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl"></div>
      
      {/* Header Section */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-3xl md:text-6xl font-bold text-black bg-clip-text mb-6">
          Upcoming Events
        </h2>
        <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto font-light">
          Save these dates and set your reminders!
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="mx-auto grid grid-cols-1 gap-12 items-start relative z-10">
        
        {/* Events Timeline - Mobile: Each event followed by its image */}
        <div className="col-span-1 space-y-8">
          {events.slice(0,3).map((event, index) => {
            // const IconComponent = event.icon;
            const colors = colorMap[event.color] || colorMap.red; 
            
            return (
              <div key={index} >
               
                <div className='flex flex-col md:flex-row gap-4'>
                         {/* Event Box */}
                <div className="group flex flex-col md:flex-row gap-6 bg-white/60 backdrop-blur-sm border border-white/50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500">
                  {/* Date Badge */}
                  <div className="flex-shrink-0">
                    <div className={`w-14 h-14 md:w-16 lg:w-24 md:h-16 lg:h-24 bg-gradient-to-br ${colors.badge} text-white rounded-2xl flex flex-col items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-xs md:text-sm font-bold opacity-90">{event.month}</span>
                      <span className="text-xl md:text-2xl font-bold">{event.day}</span>
                    </div>
                  </div>
                  
                  {/* Event Content */}
                  <div className="md:w-[300px] lg:w-full">
                    <a 
                      href={event.link}
                      className={`block text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-4 ${colors.hover} transition-colors duration-300 hover:underline cursor-pointer`}
                    >
                      {event.title}
                    </a>
                    <p className="text-gray-600 leading-relaxed text-sm lg:text-lg mb-4">
                      {event.content}
                    </p>
                    {event.title.includes("GLS") && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">Global Event</span>
                        <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm font-medium">120+ Countries</span>
                      </div>
                    )}
                    <div className={`flex items-center ${colors.text} font-semibold`}>
                      {/* <IconComponent className="w-5 h-5 mr-2" /> */}
                      {event.tag}
                    </div>
                  </div>
                </div>

                        {/* Event Image */}
                <div className="relative group md:w-[500px]">
                  <div className="overflow-hidden rounded-t-3xl shadow-2xl">
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
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default UpComingEvent;