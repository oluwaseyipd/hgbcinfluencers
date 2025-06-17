import React, { useState } from 'react';
import { FaPlus, FaMagnifyingGlass, FaChevronDown, FaChevronLeft, FaChevronRight, FaPen , FaTrash, FaPlay, FaPause } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import DeleteConfirmationModal from '../../components/dashboard/DeleteConfirmationModal';
import AudioUploadForm from './AudioUploadForm';
import {audioFiles} from '../../constants/latestSermon';

const Audio = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [editingAudio, setEditingAudio] = useState(null);
  const [audioToDelete, setAudioToDelete] = useState(null);
  
  const itemsPerPage = 12;

  const categories = ["Uplifting Hour", "Sunday Service", "Bible Study", "Conference"];
  const years = ["2024", "2025"];

  // Filter audio files
  const filteredAudio = audioFiles.filter(audio => {
    return (
      audio.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === '' || audio.category === selectedCategory) &&
      (selectedYear === '' || audio.year === selectedYear)
    );
  });

  // Pagination
  const totalPages = Math.ceil(filteredAudio.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedAudio = filteredAudio.slice(startIndex, startIndex + itemsPerPage);

  const togglePlay = (id) => {
    setPlayingId(playingId === id ? null : id);
  };

    const handleNavItemClick = () => {
    if (window.innerWidth < 768) {
      toggleSidebar();
    }
  };


   // Handle edit
  const handleEdit = (audio) => {
    setEditingAudio(audio);
    setIsUploadModalOpen(true);
  };

  // Handle delete
  const handleDelete = (audio) => {
    setAudioToDelete(audio);
    setIsDeleteModalOpen(true);
  };

  // Confirm delete
  const confirmDelete = () => {
    setAudioFiles(prev => prev.filter(audio => audio.id !== audioToDelete.id));
    setIsDeleteModalOpen(false);
    setAudioToDelete(null);
  };

  // Handle save (both new and edit)
  const handleSave = (audioData) => {
    if (editingAudio) {
      // Update existing audio
      setAudioFiles(prev => prev.map(audio => 
        audio.id === editingAudio.id ? audioData : audio
      ));
    } else {
      // Add new audio
      setAudioFiles(prev => [...prev, audioData]);
    }
    setEditingAudio(null);
  };

  // Close modals
  const closeUploadModal = () => {
    setIsUploadModalOpen(false);
    setEditingAudio(null);
  };

  return (
    <div className="p-4 mt-8 lg:p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-4 md:mt-6">
        <div>
          <h1 className="text-2xl md:text-4xl font-bold text-slate-900">Uploaded Audio</h1>
        </div>
        
        {/* New Upload Button */}
        <Link 
        to="/admin/audioupload" 
            onClick={handleNavItemClick}
        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl flex items-center space-x-2 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
          <FaPlus className="w-4 h-4" />
          <span className="font-medium">New Upload</span>
        </Link>
      </div>

      {/* Search and Filters */}
      <div className="mt-1 md:mt-[100px]">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search Bar */}
          <div className="flex-1">
            <div className="relative">
              <FaMagnifyingGlass className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search audio files..."
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
                className="appearance-none bg-white border border-slate-300 text-black outline-none rounded-lg px-4 py-2 pr-10 transition-all min-w-[120px]"
              >
                <option value="">All Years</option>
                {years.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
              <FaChevronDown className="absolute right-3  top-[20px] transform -translate-y-1/2 text-slate-400 w-4 h-4 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Table Header */}
        <div className="px-6 pb-2 pt-4 border-b border-gray-200">
          <div className="grid grid-cols-12 gap-4 items-center text-sm font-medium text-black">
            <div className="col-span-5 lg:col-span-4">Title</div>
            <div className="col-span-3 hidden sm:block">Category</div>
            <div className="col-span-2 hidden lg:block">Year</div>
            <div className="col-span-2 hidden sm:block">Length</div>
            <div className="col-span-2 lg:col-span-1 text-right">Actions</div>
          </div>
        </div>
      <div className="verflow-hidden">

        {/* Audio Cards */}
        <div className="divide-y divide-slate-200">
          {paginatedAudio.map((audio) => (
            <div key={audio.id} className="p-4 hover:bg-slate-50 transition-colors">
              <div className="grid grid-cols-12 gap-4 items-center">
                {/* Image and Title */}
                <div className="col-span-5 lg:col-span-4 flex items-center space-x-4">
                  <div className="relative flex-shrink-0">
                    <img
                      src={audio.image}
                      alt={audio.title}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-slate-900 truncate">{audio.title}</h3>
                    <p className="text-sm text-slate-500 sm:hidden">{audio.category}</p>
                  </div>
                </div>

                {/* Category */}
                <div className="col-span-3 hidden sm:block">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {audio.category}
                  </span>
                </div>

                {/* Year */}
                <div className="col-span-2 hidden lg:block text-slate-600">
                  {audio.year}
                </div>

                {/* Length */}
                <div className="col-span-2 hidden sm:block text-slate-600 font-mono text-sm">
                  {audio.length}
                </div>

                {/* Actions */}
                <div className="col-span-2 lg:col-span-1 flex items-center justify-end space-x-2">
                  <button 
                   onClick={() => handleEdit(audio)}
                  className="p-2 text-slate-500 hover:text-blue-600 hover:bg-blue-50 cursor-pointer rounded-lg transition-colors">
                    <FaPen  className="w-4 h-4" />
                  </button>
                  <button 
                  onClick={() => handleDelete(audio)}
                  className="p-2 text-slate-500 hover:text-red-600 hover:bg-red-50 cursor-pointer rounded-lg transition-colors">
                    <FaTrash className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="px-6 py-4 border-t border-slate-200">
            <div className="flex items-center justify-between">
              <div className="text-sm text-slate-600">
                Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredAudio.length)} of {filteredAudio.length} results
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="p-3 text-sm font-medium text-slate-600 cursor-pointer bg-white border border-slate-300 rounded-full hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <FaChevronLeft />
                </button>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                      currentPage === page
                        ? 'bg-blue-600 text-white'
                        : 'text-slate-600 bg-white border border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    {page}
                  </button>
                ))}
                
                <button
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className="p-3 text-sm font-medium text-slate-600 cursor-pointer bg-white border border-slate-300 rounded-full hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <FaChevronRight />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Audio;