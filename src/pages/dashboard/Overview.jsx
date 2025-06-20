import React, { useState, useMemo } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts';
import { Calendar, Upload, TrendingUp, Users, Filter, CalendarDays } from 'lucide-react';
import {audioFiles} from '../../constants/latestSermon';
// import {events} from "../../constants/dashboardEvents";  


const events = [
  {
    day: "7",
    month: "NOV",
    year: "2024",
    title: "BISUM 2024 - Business & Investment Summit",
    tag: "Business & Ministry",
    date: "2024-11-07"
  },
  {
    day: "15",
    month: "DEC",
    year: "2024",
    title: "Youth Conference 2024",
    tag: "Youth Ministry",
    date: "2024-12-15"
  },
  {
    day: "10",
    month: "JAN",
    year: "2025",
    title: "New Year Prayer Summit",
    tag: "Prayer & Worship",
    date: "2025-01-10"
  }
];


const Overview = () => {
  const [selectedYear, setSelectedYear] = useState('2024');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDataType, setSelectedDataType] = useState('both'); // 'audio', 'events', 'both'
  
  // Process audio files data for visualization
  const processedAudioData = useMemo(() => {
    return audioFiles.map(file => {
      const date = new Date(file.date);
      const month = date.toLocaleDateString('en-US', { month: 'short' });
      
      return {
        ...file,
        month,
        year: parseInt(file.year),
        type: 'audio'
      };
    });
  }, []);

  // Process events data for visualization
  const processedEventsData = useMemo(() => {
    return events.map(event => {
      const date = new Date(event.date);
      const month = date.toLocaleDateString('en-US', { month: 'short' });
      
      return {
        ...event,
        month,
        year: parseInt(event.year || new Date(event.date).getFullYear()),
        category: event.tag,
        type: 'event'
      };
    });
  }, []);

  // Combine both datasets
  const allProcessedData = useMemo(() => {
    return [...processedAudioData, ...processedEventsData];
  }, [processedAudioData, processedEventsData]);
  
  // Get available years from the data
  const availableYears = useMemo(() => {
    const years = [...new Set(allProcessedData.map(item => item.year))].sort((a, b) => b - a);
    return years;
  }, [allProcessedData]);
  
  // Get available categories from the data
  const availableCategories = useMemo(() => {
    const categories = [...new Set(allProcessedData.map(item => item.category))];
    return categories;
  }, [allProcessedData]);
  
  // Filter and aggregate data for line chart
  const chartData = useMemo(() => {
    let filteredData = allProcessedData.filter(item => item.year.toString() === selectedYear);
    
    if (selectedCategory !== 'all') {
      filteredData = filteredData.filter(item => item.category === selectedCategory);
    }
    
    // Group by month and count uploads/events
    const monthlyData = filteredData.reduce((acc, item) => {
      const key = item.month;
      if (!acc[key]) {
        acc[key] = { month: key, audio: 0, events: 0, total: 0 };
      }
      
      if (item.type === 'audio') {
        acc[key].audio += 1;
      } else if (item.type === 'event') {
        acc[key].events += 1;
      }
      acc[key].total += 1;
      return acc;
    }, {});
    
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return months.map(month => monthlyData[month] || { month, audio: 0, events: 0, total: 0 });
  }, [allProcessedData, selectedYear, selectedCategory]);
  
  // Calculate stats
  const stats = useMemo(() => {
    const currentYearAudio = processedAudioData.filter(item => item.year.toString() === selectedYear);
    const currentYearEvents = processedEventsData.filter(item => item.year.toString() === selectedYear);
    
    const totalAudio = currentYearAudio.length;
    const totalEvents = currentYearEvents.length;
    const audioCategories = [...new Set(currentYearAudio.map(item => item.category))].length;
    const eventCategories = [...new Set(currentYearEvents.map(item => item.category))].length;
    
    return { totalAudio, totalEvents, audioCategories, eventCategories };
  }, [processedAudioData, processedEventsData, selectedYear]);
  
  // Category breakdown data
  const categoryData = useMemo(() => {
    const currentYearData = allProcessedData.filter(item => item.year.toString() === selectedYear);
    const breakdown = currentYearData.reduce((acc, item) => {
      const key = `${item.category} (${item.type})`;
      if (!acc[key]) {
        acc[key] = { category: key, audio: 0, events: 0, total: 0 };
      }
      
      if (item.type === 'audio') {
        acc[key].audio += 1;
      } else if (item.type === 'event') {
        acc[key].events += 1;
      }
      acc[key].total += 1;
      return acc;
    }, {});
    
    return Object.values(breakdown).sort((a, b) => b.total - a.total);
  }, [allProcessedData, selectedYear]);

  return (
    <div className="p-4 mt-8 lg:p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-4 md:mt-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
            Overview
          </h1>
          <p className="text-slate-600 mt-1">Track your performance and trends</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-600 text-sm font-medium">Total Audio Files</p>
              <h2 className="text-3xl font-bold text-slate-900 mt-1">{stats.totalAudio}</h2>
            </div>
            <div className="bg-blue-100 p-3 rounded-lg">
              <Upload className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-600 text-sm font-medium">Total Events</p>
              <h2 className="text-3xl font-bold text-slate-900 mt-1">{stats.totalEvents}</h2>
            </div>
            <div className="bg-green-100 p-3 rounded-lg">
              <CalendarDays className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-600 text-sm font-medium">Audio Active Categories</p>
              <h2 className="text-3xl font-bold text-slate-900 mt-1">{stats.audioCategories}</h2>
            </div>
            <div className="bg-purple-100 p-3 rounded-lg">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-600 text-sm font-medium">Event Active Categories</p>
              <h2 className="text-3xl font-bold text-slate-900 mt-1">{stats.eventCategories}</h2>
            </div>
            <div className="bg-orange-100 p-3 rounded-lg">
              <TrendingUp className="w-6 h-6 text-orange-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Line Chart */}
        <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-6 gap-4">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Activity Trends</h3>
              <p className="text-slate-600 text-sm">Monthly audio uploads and events for {selectedYear}</p>
            </div>
            
            {/* Filters */}
            <div className="flex flex-wrap gap-3 items-center">
              <div className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 border border-slate-200 shadow-sm">
                <Calendar className="w-4 h-4 text-slate-500" />
                <select 
                  value={selectedYear} 
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="bg-transparent border-none outline-none text-gray-800 text-sm font-medium"
                >
                  {availableYears.map(year => (
                    <option key={year} value={year.toString()}>{year}</option>
                  ))}
                </select>
              </div>
              
              <div className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 border border-slate-200 shadow-sm">
                <Filter className="w-4 h-4 text-slate-500" />
                <select 
                  value={selectedCategory} 
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="bg-transparent border-none outline-none text-gray-800 text-sm font-medium"
                >
                  <option value="all">All Categories</option>
                  {availableCategories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <div className="min-w-[600px] h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis 
                    dataKey="month" 
                    stroke="#64748b"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis 
                    stroke="#64748b"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: 'white',
                      border: '1px solid #e2e8f0',
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                    }}
                  />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="audio" 
                    stroke="#3b82f6" 
                    strokeWidth={3}
                    name="Audio Files"
                    dot={{ fill: '#3b82f6', strokeWidth: 0, r: 4 }}
                    activeDot={{ r: 6, stroke: '#3b82f6', strokeWidth: 2, fill: 'white' }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="events" 
                    stroke="#10b981" 
                    strokeWidth={3}
                    name="Events"
                    dot={{ fill: '#10b981', strokeWidth: 0, r: 4 }}
                    activeDot={{ r: 6, stroke: '#10b981', strokeWidth: 2, fill: 'white' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Category Breakdown */}
        <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-6 gap-4">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Category Breakdown</h3>
              <p className="text-slate-600 text-sm">Audio files and events by category in {selectedYear}</p>
            </div>

            <div className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 border border-slate-200 shadow-sm">
              <Calendar className="w-4 h-4 text-slate-500" />
              <select 
                value={selectedYear} 
                onChange={(e) => setSelectedYear(e.target.value)}
                className="bg-transparent border-none outline-none text-gray-800 text-sm font-medium"
              >
                {availableYears.map(year => (
                  <option key={year} value={year.toString()}>{year}</option>
                ))}
              </select>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <div className="min-w-[500px] h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={categoryData} layout="horizontal">
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis 
                    type="number"
                    stroke="#64748b"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis 
                    type="category"
                    dataKey="category"
                    stroke="#64748b"
                    fontSize={10}
                    tickLine={false}
                    axisLine={false}
                    width={140}
                  />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: 'white',
                      border: '1px solid #e2e8f0',
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                    }}
                  />
                  <Legend />
                  <Bar 
                    dataKey="audio" 
                    fill="#3b82f6"
                    name="Audio Files"
                    radius={[0, 2, 2, 0]}
                  />
                  <Bar 
                    dataKey="events" 
                    fill="#10b981"
                    name="Events"
                    radius={[0, 2, 2, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;