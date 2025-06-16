import React, { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, Users, Heart, Share2, Bell, Star, Globe, Building, ArrowRight, Bookmark, Filter } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const SpecialEvents = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [filter, setFilter] = useState('all');
  const [bookmarkedEvents, setBookmarkedEvents] = useState(new Set());

  // Sample events data (you can replace with your actual data)
  const specialEvents = [
    {
      id: 1,
      title: "Global Leadership Summit",
      date: "2025-08-15",
      time: "09:00",
      location: "Main Auditorium",
      type: "Global Event",
      category: "leadership",
      description: "Join leaders from around the world for an inspiring summit focused on transformational leadership in the modern age.",
      image: "/api/placeholder/400/300",
      color: "purple",
      featured: true,
      capacity: 500,
      registered: 347,
      tags: ["Global", "Leadership", "Networking"],
      speaker: "International Speakers",
      price: "Free"
    },
    {
      id: 2,
      title: "Annual Conference 2025",
      date: "2025-09-20",
      time: "08:00",
      location: "Convention Center",
      type: "Conference",
      category: "conference",
      description: "Our biggest event of the year featuring powerful worship, inspiring messages, and life-changing connections.",
      image: "/api/placeholder/400/300",
      color: "blue",
      featured: true,
      capacity: 1200,
      registered: 856,
      tags: ["Annual", "Worship", "Community"],
      speaker: "Pastor John Smith",
      price: "Free"
    },
    {
      id: 3,
      title: "Christmas Celebration",
      date: "2025-12-24",
      time: "19:00",
      location: "Main Sanctuary",
      type: "Holiday Event",
      category: "holiday",
      description: "Celebrate the joy of Christmas with special music, candlelight service, and a message of hope.",
      image: "/api/placeholder/400/300",
      color: "red",
      featured: true,
      capacity: 800,
      registered: 234,
      tags: ["Christmas", "Celebration", "Family"],
      speaker: "Senior Pastor",
      price: "Free"
    },
    {
      id: 4,
      title: "Youth Summit 2025",
      date: "2025-07-10",
      time: "18:00",
      location: "Youth Center",
      type: "Youth Event",
      category: "youth",
      description: "An exciting gathering for young people to connect, learn, and grow together in faith and purpose.",
      image: "/api/placeholder/400/300",
      color: "emerald",
      featured: false,
      capacity: 300,
      registered: 189,
      tags: ["Youth", "Connection", "Growth"],
      speaker: "Youth Pastor Sarah",
      price: "Free"
    }
  ];

  const colorMap = {
    purple: {
      gradient: "from-purple-500 to-purple-700",
      light: "from-purple-50 to-purple-100",
      text: "text-purple-600",
      bg: "bg-purple-100",
      border: "border-purple-200",
      hover: "hover:bg-purple-50"
    },
    blue: {
      gradient: "from-blue-500 to-blue-700",
      light: "from-blue-50 to-blue-100",
      text: "text-blue-600",
      bg: "bg-blue-100",
      border: "border-blue-200",
      hover: "hover:bg-blue-50"
    },
    emerald: {
      gradient: "from-emerald-500 to-emerald-700",
      light: "from-emerald-50 to-emerald-100",
      text: "text-emerald-600",
      bg: "bg-emerald-100",
      border: "border-emerald-200",
      hover: "hover:bg-emerald-50"
    },
    red: {
      gradient: "from-red-500 to-red-700",
      light: "from-red-50 to-red-100",
      text: "text-red-600",
      bg: "bg-red-100",
      border: "border-red-200",
      hover: "hover:bg-red-50"
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const calculateCountdown = (eventDate, eventTime) => {
    const [hours, minutes] = eventTime.split(':');
    const eventDateTime = new Date(eventDate);
    eventDateTime.setHours(parseInt(hours), parseInt(minutes), 0, 0);
    
    const now = new Date();
    const timeDiff = eventDateTime - now;
    
    // Only show countdown if event is within 30 days
    if (timeDiff <= 0 || timeDiff > 30 * 24 * 60 * 60 * 1000) {
      return null;
    }
    
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours_remaining = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes_remaining = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
    
    return { days, hours: hours_remaining, minutes: minutes_remaining, seconds };
  };

  const toggleBookmark = (eventId) => {
    const newBookmarks = new Set(bookmarkedEvents);
    if (newBookmarks.has(eventId)) {
      newBookmarks.delete(eventId);
    } else {
      newBookmarks.add(eventId);
    }
    setBookmarkedEvents(newBookmarks);
  };

  const filteredEvents = filter === 'all' 
    ? specialEvents 
    : specialEvents.filter(event => event.category === filter);

  const featuredEvents = specialEvents.filter(event => event.featured);

  return (
    <>
    <Navbar />

        <div className="min-h-screen py-16 px-6 md:px-12 bg-gradient-to-br from-slate-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900">
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-4 -right-4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-8 -left-8 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white my-8 tracking-tight">
              Special Events
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
              Transformative gatherings that inspire, connect, and empower young minds
            </p>

            <div className="flex flex-wrap items-center justify-center space-x-8 text-white/80">
              <div className="flex items-center">
                <Calendar className="w-6 h-6 mr-2" />
                <span className="font-medium">{specialEvents.length} Upcoming Events</span>
              </div>
              <div className="flex items-center mt-5 md:mt-0">
                <Users className="w-6 h-6 mr-2" />
                <span className="font-medium">Join Thousands</span>
              </div>
              <div className="flex items-center mt-5 md:mt-0">
                <Globe className="w-6 h-6 mr-2" />
                <span className="font-medium">Global Impact</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Featured Events Carousel */}
        {featuredEvents.length > 0 && (
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Featured Events</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredEvents.map((event) => {
                const colors = colorMap[event.color];
                const countdown = calculateCountdown(event.date, event.time);
                
                return (
                  <div
                    key={event.id}
                    className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
                  >
                    {/* Featured Badge */}
                    <div className="absolute top-4 left-4 z-20">
                      <div className="flex items-center bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold">
                        <Star className="w-4 h-4 mr-1" />
                        Featured
                      </div>
                    </div>

                    {/* Event Image */}
                    <div className="relative h-48 overflow-hidden">
                      <div
                        className={`w-full h-full bg-gradient-to-br ${colors.gradient}`}
                      ></div>
                      <div
                        className={`absolute inset-0 bg-gradient-to-t ${colors.light} opacity-90`}
                      ></div>

                      {/* Event Info Overlay */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4">
                          <h3 className="text-xl font-bold text-gray-900 mb-1">
                            {event.title}
                          </h3>
                          <div className="flex items-center text-gray-600 text-sm">
                            <Calendar className="w-4 h-4 mr-1" />
                            {new Date(event.date).toLocaleDateString("en-US", {
                              weekday: "long",
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Event Details */}
                    <div className="p-6">
                      {/* Countdown Timer */}
                      {countdown && (
                        <div className="mb-4 p-4 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl border border-red-100">
                          <div className="text-center">
                            <div className="text-sm text-red-600 font-medium mb-2">
                              EVENT STARTS IN
                            </div>
                            <div className="grid grid-cols-4 gap-2 text-center">
                              <div className="bg-white rounded-lg p-2 shadow-sm">
                                <div className="text-2xl font-bold text-red-600">
                                  {countdown.days}
                                </div>
                                <div className="text-xs text-gray-600">
                                  Days
                                </div>
                              </div>
                              <div className="bg-white rounded-lg p-2 shadow-sm">
                                <div className="text-2xl font-bold text-red-600">
                                  {countdown.hours}
                                </div>
                                <div className="text-xs text-gray-600">
                                  Hours
                                </div>
                              </div>
                              <div className="bg-white rounded-lg p-2 shadow-sm">
                                <div className="text-2xl font-bold text-red-600">
                                  {countdown.minutes}
                                </div>
                                <div className="text-xs text-gray-600">Min</div>
                              </div>
                              <div className="bg-white rounded-lg p-2 shadow-sm">
                                <div className="text-2xl font-bold text-red-600">
                                  {countdown.seconds}
                                </div>
                                <div className="text-xs text-gray-600">Sec</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {event.description}
                      </p>

                      {/* Event Meta */}
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-gray-600">
                          <Clock className="w-4 h-4 mr-2" />
                          <span className="text-sm">
                            {event.time} - {event.location}
                          </span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Users className="w-4 h-4 mr-2" />
                          <span className="text-sm">
                            {event.registered}/{event.capacity} registered
                          </span>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="mb-4">
                        <div className="bg-gray-200 rounded-full h-2">
                          <div
                            className={`bg-gradient-to-r ${colors.gradient} h-2 rounded-full transition-all duration-500`}
                            style={{
                              width: `${
                                (event.registered / event.capacity) * 100
                              }%`,
                            }}
                          ></div>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {event.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className={`px-2 py-1 ${colors.bg} ${colors.text} rounded-full text-xs font-medium`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex space-x-2">
                        <button
                          className={`flex-1 py-3 px-4 bg-gradient-to-r ${colors.gradient} text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95`}
                        >
                          <div className="flex items-center justify-center">
                            <Calendar className="w-4 h-4 mr-2" />
                            Register Now
                          </div>
                        </button>
                        <button className="p-3 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors">
                          <Share2 className="w-4 h-4 text-gray-600" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* All Events Grid */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">All Events</h2>

                                {/* Desktop FIlter Functionality */}
                      <div className="hidden md:flex flex-wrap items-center justify-between gap-4 mb-8">
                        <div className="flex items-center space-x-4">
                          <Filter className="w-5 h-5 text-gray-600" />
                          <span className="text-gray-700 font-medium">
                            Filter Events:
                          </span>
                          <div className="flex space-x-2">
                            {[
                              "all",
                              "leadership",
                              "conference",
                              "youth",
                              "holiday",
                            ].map((category) => (
                              <button
                                key={category}
                                onClick={() => setFilter(category)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                                  filter === category
                                    ? "bg-purple-600 text-white shadow-lg"
                                    : "bg-white text-gray-600 hover:bg-purple-50 border border-gray-200"
                                }`}
                              >
                                {category.charAt(0).toUpperCase() +
                                  category.slice(1)}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>

                               {/* MObile  FIlter Functionality */}
                               <div className="md:hidden flex flex-wrap items-center justify-between gap-4 mb-8">
                                <div className="flex items-center space-x-4">
                          <Filter className="w-5 h-5 text-gray-600" />
                          <span className="text-gray-700 font-medium">
                            Filter Events:
                          </span>
                          </div>
                          <div>
                          <div className="flex space-x-1">
                            {[
                              "all",
                              "leadership",
                              "conference",
                              "youth",
                              "holiday",
                            ].map((category) => (
                              <button
                                key={category}
                                onClick={() => setFilter(category)}
                                className={`px-2 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                                  filter === category
                                    ? "bg-purple-600 text-white shadow-lg"
                                    : "bg-white text-gray-600 hover:bg-purple-50 border border-gray-200"
                                }`}
                              >
                                {category.charAt(0).toUpperCase() +
                                  category.slice(1)}
                              </button>
                            ))}
                          </div>
                        </div>
                               </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => {
              const colors = colorMap[event.color];
              const countdown = calculateCountdown(event.date, event.time);
              
              return (
                <div
                  key={event.id}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-purple-200"
                >
                  {/* Event Header */}
                  <div className={`p-4 bg-gradient-to-r ${colors.light} border-b border-gray-100`}>
                    <div className="flex items-center justify-between mb-2">
                      <span className={`px-3 py-1 ${colors.bg} ${colors.text} rounded-full text-sm font-medium`}>
                        {event.type}
                      </span>
                      <span className="text-lg font-bold text-gray-700">{event.price}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{event.title}</h3>
                    <p className="text-gray-600 text-sm">{event.speaker}</p>
                  </div>

                  {/* Event Body */}
                  <div className="p-4">
                    {/* Countdown for events within 30 days */}
                    {countdown && (
                      <div className="mb-4 p-3 bg-red-50 rounded-lg border border-red-100">
                        <div className="text-center">
                          <div className="text-xs text-red-600 font-medium mb-1">STARTS IN</div>
                          <div className="text-sm font-bold text-red-700">
                            {countdown.days}d {countdown.hours}h {countdown.minutes}m {countdown.seconds}s
                          </div>
                        </div>
                      </div>
                    )}

                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">{event.description}</p>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-gray-600 text-sm">
                        <Calendar className="w-4 h-4 mr-2" />
                        {new Date(event.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center text-gray-600 text-sm">
                        <MapPin className="w-4 h-4 mr-2" />
                        {event.location}
                      </div>
                    </div>

                    <button className={`w-full py-2 px-4 bg-gradient-to-r ${colors.gradient} text-white rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-300 group-hover:scale-105`}>
                      <div className="flex items-center justify-center">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>

    <Footer />
    </>
  );
};

export default SpecialEvents;