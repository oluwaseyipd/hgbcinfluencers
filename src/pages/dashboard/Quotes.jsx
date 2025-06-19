import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Clock, Users, ArrowRight, Search, Filter, Plus, Eye, Edit, Trash2, MoreVertical } from 'lucide-react';
import { FaPlus, FaMagnifyingGlass, FaChevronDown, FaChevronLeft, FaChevronRight, FaTrash } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { quotes } from "../../constants/allQuoteData"


// Quote Card Component
const QuoteCard = ({ quote, onDelete }) => {
  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this quote?')) {
      onDelete(quote.id);
    }
  };

  return (
    <div className="relative bg-white rounded-lg shadow-sm overflow-hidden">
      {/* Quote Image */}
      <div className="relative">
        <img 
          src={quote.url} 
          alt={quote.title}
          className="w-full h-64 object-cover"
        />
        
        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="px-2 py-1 bg-blue-600 text-white text-xs font-medium rounded">
            {quote.category}
          </span>
        </div>

        {/* Year Badge */}
        <div className="absolute top-3 right-3">
          <span className="px-2 py-1 bg-gray-800 text-white text-xs font-medium rounded">
            {quote.year}
          </span>
        </div>

        {/* Delete Button */}
        <button 
          onClick={handleDelete}
          className="absolute bottom-3 right-3 p-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors"
        >
          <FaTrash className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

const Quotes = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [quotesData, setQuotesData] = useState(quotes);

  const itemsPerPage = 10;
  const categories = ["Conference", "Leadership Training", "Sunday Service", "Evangelism", "Bible Study"];
  const years = ["2024", "2025"];

  // Filter quotes
  const filteredQuotes = quotesData.filter(quote => {
    return (
      quote.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === '' || quote.category === selectedCategory) &&
      (selectedYear === '' || quote.year === selectedYear)
    );
  });

  // Handle delete
  const handleDeleteQuote = (quoteId) => {
    setQuotesData(prevQuotes => prevQuotes.filter(quote => quote.id !== quoteId));
  };

  // Pagination
  const totalPages = Math.ceil(filteredQuotes.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedQuotes = filteredQuotes.slice(startIndex, startIndex + itemsPerPage);

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory, selectedYear]);

  return (
    <div className="p-4 mt-10 lg:p-6 space-y-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Inspirational Quotes</h1>
            <p className="text-gray-600 mt-2">Discover and share meaningful quotes from our church community</p>
          </div>

          {/* Add Quote Button */}
           <Link 
        to="/admin/addquote" 
         className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl flex items-center space-x-2 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            <FaPlus className="w-4 h-4" />
            <span className="font-medium">Add Quote</span>
            </Link>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search Bar */}
          <div className="flex-1">
            <div className="relative">
              <FaMagnifyingGlass className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search quotes by title, author, or content..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Category Filter */}
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="appearance-none bg-white border border-slate-300 rounded-lg px-4 py-3 pr-10 outline-none focus:ring-2 focus:ring-blue-500 transition-all min-w-[180px]"
              >
                <option value="">All Categories</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4 pointer-events-none" />
            </div>

            {/* Year Filter */}
            <div className="relative">
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="appearance-none bg-white border border-slate-300 rounded-lg px-4 py-3 pr-10 outline-none focus:ring-2 focus:ring-blue-500 transition-all min-w-[120px]"
              >
                <option value="">All Years</option>
                {years.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
              <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Results Counter */}
      <div className="flex items-center justify-between mb-6">
        <p className="text-gray-600">
          Showing {filteredQuotes.length} {filteredQuotes.length === 1 ? 'quote' : 'quotes'}
        </p>
        
        {/* View Toggle - Could add list/grid view options */}
        <div className="text-sm text-gray-500">
          {searchTerm || selectedCategory || selectedYear ? 'Filtered results' : 'All quotes'}
        </div>
      </div>

      {/* Quotes Grid */}
      <div className="mb-8">
        {paginatedQuotes.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-xl shadow-sm">
            <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
              <Calendar className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No quotes found</h3>
            <p className="text-gray-500 mb-8 max-w-md mx-auto">
              Try adjusting your search terms or filters to find what you're looking for.
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-medium transition-all shadow-lg hover:shadow-xl">
              Add Your First Quote
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedQuotes.map((quote) => (
              <QuoteCard key={quote.id} quote={quote} onDelete={handleDeleteQuote} />
            ))}
          </div>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between bg-white rounded-xl shadow-sm p-6">
          <div className="text-sm text-gray-700">
            Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredQuotes.length)} of {filteredQuotes.length} quotes
          </div>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <FaChevronLeft className="w-4 h-4" />
            </button>
            
            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              let page;
              if (totalPages <= 5) {
                page = i + 1;
              } else if (currentPage <= 3) {
                page = i + 1;
              } else if (currentPage >= totalPages - 2) {
                page = totalPages - 4 + i;
              } else {
                page = currentPage - 2 + i;
              }
              
              return (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                    currentPage === page
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {page}
                </button>
              );
            })}
            
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <FaChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quotes;