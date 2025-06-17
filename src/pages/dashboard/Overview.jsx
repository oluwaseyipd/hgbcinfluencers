import React, { useState, useMemo } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { Calendar, Upload, TrendingUp, Users, Filter } from 'lucide-react';
import { audioFiles } from '../../constants/latestSermon';

const Overview = () => {
  const [selectedYear, setSelectedYear] = useState('2024');
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  // Process audio files data for visualization
  const processedData = useMemo(() => {
    return audioFiles.map(file => {
      const date = new Date(file.date);
      const month = date.toLocaleDateString('en-US', { month: 'short' });
      const categoryKey = file.category.toLowerCase().replace(/\s+/g, '-');
      
      return {
        ...file,
        month,
        categoryKey,
        year: parseInt(file.year)
      };
    });
  }, []);
  
  // Get available years from the data
  const availableYears = useMemo(() => {
    const years = [...new Set(processedData.map(item => item.year))].sort((a, b) => b - a);
    return years;
  }, [processedData]);
  
  // Get available categories from the data
  const availableCategories = useMemo(() => {
    const categories = [...new Set(processedData.map(item => item.category))];
    return categories;
  }, [processedData]);
  
  // Filter and aggregate data for line chart
  const chartData = useMemo(() => {
    let filteredData = processedData.filter(item => item.year.toString() === selectedYear);
    
    if (selectedCategory !== 'all') {
      filteredData = filteredData.filter(item => item.category === selectedCategory);
    }
    
    // Group by month and count uploads
    const monthlyData = filteredData.reduce((acc, item) => {
      const key = item.month;
      if (!acc[key]) {
        acc[key] = { month: key, uploads: 0 };
      }
      acc[key].uploads += 1;
      return acc;
    }, {});
    
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return months.map(month => monthlyData[month] || { month, uploads: 0 });
  }, [processedData, selectedYear, selectedCategory]);
  
  // Calculate stats
  const stats = useMemo(() => {
    const currentYearData = processedData.filter(item => item.year.toString() === selectedYear);
    const totalUploads = currentYearData.length;
    const avgMonthly = Math.round(totalUploads / 12);
    const categories = [...new Set(currentYearData.map(item => item.category))].length;
    
    return { totalUploads, avgMonthly, categories };
  }, [processedData, selectedYear]);
  
  // Category breakdown data
  const categoryData = useMemo(() => {
    const currentYearData = processedData.filter(item => item.year.toString() === selectedYear);
    const breakdown = currentYearData.reduce((acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = 0;
      }
      acc[item.category] += 1;
      return acc;
    }, {});
    
    return Object.entries(breakdown).map(([category, uploads]) => ({
      category,
      uploads
    })).sort((a, b) => b.uploads - a.uploads);
  }, [processedData, selectedYear]);

  return (
    <div className="p-4 mt-8 lg:p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-4 md:mt-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
            Audio Library Overview
          </h1>
          <p className="text-slate-600 mt-1">Track your audio upload performance and trends</p>
        </div>

      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-600 text-sm font-medium">Total Audio Files</p>
              <h2 className="text-3xl font-bold text-slate-900 mt-1">{stats.totalUploads}</h2>
            </div>
            <div className="bg-blue-100 p-3 rounded-lg">
              <Upload className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-600 text-sm font-medium">Monthly Average</p>
              <h2 className="text-3xl font-bold text-slate-900 mt-1">{stats.avgMonthly}</h2>
            </div>
            <div className="bg-green-100 p-3 rounded-lg">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-600 text-sm font-medium">Active Categories</p>
              <h2 className="text-3xl font-bold text-slate-900 mt-1">{stats.categories}</h2>
            </div>
            <div className="bg-purple-100 p-3 rounded-lg">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Line Chart */}
        <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
          <div className="flex flex-col md:flex-row items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Upload Trends</h3>
              <p className="text-slate-600 text-sm">Monthly audio upload statistics for {selectedYear}</p>
            </div>
                    {/* Filters */}
        <div className="flex gap-3 items-center">
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
          
          <div className="h-80">
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
                <Line 
                  type="monotone" 
                  dataKey="uploads" 
                  stroke="#3b82f6" 
                  strokeWidth={3}
                  dot={{ fill: '#3b82f6', strokeWidth: 0, r: 4 }}
                  activeDot={{ r: 6, stroke: '#3b82f6', strokeWidth: 2, fill: 'white' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Category Breakdown */}
        <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
          <div className="flex flex-col md:flex-row items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Category Breakdown</h3>
              <p className="text-slate-600 text-sm">Audio files by category in {selectedYear}</p>
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
          
          <div className="h-80">
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
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  width={120}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }}
                />
                <Bar 
                  dataKey="uploads" 
                  fill="#8b5cf6"
                  radius={[0, 4, 4, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;