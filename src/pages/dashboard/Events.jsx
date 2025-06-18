import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Clock, Users, ArrowRight, Search, Filter, Plus, Eye, Edit, Trash2, MoreVertical } from 'lucide-react';
import { FaPlus, FaMagnifyingGlass, FaChevronDown, FaChevronLeft, FaChevronRight, FaPen , FaTrash, FaPlay, FaPause } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import {events, colorMap} from "../../constants/dashboardEvents";

const EventsDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState('grid'); // grid or list
  const [showFilters, setShowFilters] = useState(false);

  const itemsPerPage = 3;
  const categories = ["Conference", "Leadership Training", "Revival", "Evangelism"];
  const years = ["2024", "2025"];


  const calculateCountdown = (date, time) => {
    const eventDateTime = new Date(`${date}T${time}`);
    const now = new Date();
    const diff = eventDateTime.getTime() - now.getTime();

    if (diff <= 0) return null;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    if (days > 30) return null;

    return { days, hours, minutes };
  };

  // Filter events
  const filteredEvents = events.filter(event => {
    return (
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === '' || event.type === selectedCategory) &&
      (selectedYear === '' || event.date.startsWith(selectedYear))
    );
  });

  // Pagination
  const totalPages = Math.ceil(filteredEvents.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedEvents = filteredEvents.slice(startIndex, startIndex + itemsPerPage);

  const getStatusBadge = (event) => {
    const attendeePercentage = (event.attendees / event.maxAttendees) * 100;
    
    if (attendeePercentage >= 90) {
      return <span className="px-2 py-1 bg-red-100 text-red-700 text-xs font-medium rounded-full">Almost Full</span>;
    } else if (attendeePercentage >= 50) {
      return <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs font-medium rounded-full">Filling Up</span>;
    } else {
      return <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">Available</span>;
    }
  };

  const EventCard = ({ event }) => {
    const colors = colorMap[event.color];
    const countdown = calculateCountdown(event.date, event.time);
    const attendeePercentage = (event.attendees / event.maxAttendees) * 100;

    return (
      <div className="group bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 hover:border-gray-200">
        {/* Event Image */}
        <div className="relative h-48 overflow-hidden">
          <img 
            src={event.image} 
            alt={event.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
            <span className={`px-3 py-1 ${colors.bg} ${colors.text} rounded-full text-sm font-medium backdrop-blur-sm`}>
              {event.type}
            </span>
            <div className="relative">
              <button className="p-2 bg-white bg-opacity-90 rounded-full hover:bg-opacity-100 transition-all">
                <MoreVertical className="w-4 h-4 text-gray-600" />
              </button>
            </div>
          </div>
          {countdown && (
            <div className="absolute bottom-4 left-4 right-4">
              <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-lg p-3">
                <div className="text-center">
                  <div className="text-xs text-red-600 font-medium mb-1">STARTS IN</div>
                  <div className="text-sm font-bold text-red-700">
                    {countdown.days}d {countdown.hours}h {countdown.minutes}m
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Event Content */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-bold text-gray-900 line-clamp-1">{event.title}</h3>
            <span className="text-lg font-bold text-gray-700">{event.price}</span>
          </div>
          
          <p className="text-gray-600 text-sm mb-1">{event.speaker}</p>
          <p className="text-gray-500 text-sm mb-4 line-clamp-2">{event.description}</p>

          {/* Event Details */}
          <div className="space-y-2 mb-4">
            <div className="flex items-center text-gray-600 text-sm">
              <Calendar className="w-4 h-4 mr-2 text-gray-400" />
              {new Date(event.date).toLocaleDateString()} at {event.time}
            </div>
            <div className="flex items-center text-gray-600 text-sm">
              <MapPin className="w-4 h-4 mr-2 text-gray-400" />
              {event.location}
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center text-gray-600 text-sm">
                <Users className="w-4 h-4 mr-2 text-gray-400" />
                {event.attendees}/{event.maxAttendees} attendees
              </div>
              {getStatusBadge(event)}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-4">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className={`h-2 rounded-full bg-gradient-to-r ${colors.gradient}`}
                style={{ width: `${attendeePercentage}%` }}
              ></div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2">
            <button className="flex-1 py-2 px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2">
              <Eye className="w-4 h-4" />
              View
            </button>
            <button className="flex-1 py-2 px-4 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2">
              <Edit className="w-4 h-4" />
              Edit
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
        <div className="p-4 mt-10 lg:p-6 space-y-6">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
          <h1 className="text-2xl md:text-4xl font-bold text-slate-900">Events</h1>
              <p className="text-gray-600">Manage and monitor all church events</p>
            </div>

              
                   {/* New Upload Button */}
        <Link 
        to="/admin/addevent" 
            // onClick={handleNavItemClick}
        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl flex items-center space-x-2 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
          <FaPlus className="w-4 h-4" />
          <span className="font-medium">Add Event</span>
        </Link>
       
          </div>
        </div>

        

        {/* Search and Filters */}
             <div className="mt-1 md:mt-[100px]">
        <div className="flex flex-col md:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1">
              <div className="relative">
                <FaMagnifyingGlass className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search events by title, speaker, or location..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full lg:w-1/3 pl-10 pr-4 py-2 border text-gray-800  border-slate-300 rounded-full outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Filters */}
            <div className="flex justify-end  flex-row gap-4">
              {/* Category Filter */}
              <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="appearance-none bg-white border text-black outline-none border-slate-300 rounded-lg px-4 py-2 pr-10 items-center transition-all min-w-[150px]"
              >
                <option value="">All Categories</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              <FaChevronDown className="absolute right-3 top-[20px] transform -translate-y-1/2 text-slate-400 w-4 h-4 pointer-events-none" />
              
              </div>

              {/* Year Filter */}
              <div className="relative">
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="appearance-none bg-white border text-black outline-none border-slate-300 rounded-lg px-4 py-2 pr-10 items-center transition-all min-w-[120px]"
              >
                <option value="">All Years</option>
                {years.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
              <FaChevronDown className="absolute right-3 top-[20px] transform -translate-y-1/2 text-slate-400 w-4 h-4 pointer-events-none" />
              
              </div>
            </div>
          </div>
        </div>

        {/* Events Grid */}
        <div className="mb-8">
          {paginatedEvents.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <Calendar className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No events found</h3>
              <p className="text-gray-500 mb-6">Try adjusting your search or filter criteria</p>
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all">
                Create Your First Event
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {paginatedEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-700">
              Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredEvents.length)} of {filteredEvents.length} events
            </div>
            
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-3 py-2 text-sm font-medium rounded-lg ${
                    currentPage === page
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {page}
                </button>
              ))}
              
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>

  );
};

export default EventsDashboard;