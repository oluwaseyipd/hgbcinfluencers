import React, { useState, useRef, useEffect } from 'react';
import { Download, Link, Headphones, Search, Play, Pause, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { sermonData } from '../constants/sermonData';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Toast Notification Component
const Toast = ({ message, isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed top-4 right-4 z-50 animate-in slide-in-from-right duration-300">
      <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-4 flex items-center space-x-3">
        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
        <span className="text-gray-700 font-medium">{message}</span>
      </div>
    </div>
  );
};

// Sermon Details Modal Component
const SermonModal = ({ sermon, isOpen, onClose }) => {
  if (!isOpen || !sermon) return null;

  const formatSermonNote = (note) => {
    return note.split('\n').map((line, index) => {
      if (line.trim() === '') {
        return <br key={index} />;
      }
      if (line.startsWith('•')) {
        return (
          <li key={index} className="ml-4 mb-1">
            {line.substring(1).trim()}
          </li>
        );
      }
      if (line.startsWith('-')) {
        return (
          <li key={index} className="ml-4 mb-1">
            {line.substring(1).trim()}
          </li>
        );
      }
      return (
        <p key={index} className="mb-2">
          {line}
        </p>
      );
    });
  };

  return (
    <div className="fixed inset-0 bg-white/20 backdrop-blur-md flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-800">{sermon.title}</h2>
          <button
            onClick={onClose}
            className="bg-orange-500 cursor-pointer hover:bg-amber-600 text-white transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6">
          {/* Cover Photo */}
          <div className="mb-6">
            <img
              src={sermon.audioCover}
              alt={sermon.title}
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Sermon Details */}
          <div className="space-y-4 mb-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">Topic:</h3>
              <p className="text-gray-600">{sermon.sermonDetails.topic}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">Bible Scripture:</h3>
              <p className="text-gray-600">{sermon.sermonDetails.bibleText}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">Minister:</h3>
              <p className="text-gray-600">{sermon.sermonDetails.minister}</p>
            </div>
          </div>

          {/* Sermon Notes */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Sermon Notes & Key Points:</h3>
            <div className="text-gray-700 leading-relaxed">
              {formatSermonNote(sermon.sermonDetails.sermonNote)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Audio Player Modal Component
const AudioPlayerModal = ({ sermon, isOpen, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (e) => {
    const clickX = e.nativeEvent.offsetX;
    const width = e.currentTarget.offsetWidth;
    const newTime = (clickX / width) * duration;

    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    if (isOpen && audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  }, [isOpen]);

  if (!isOpen || !sermon) return null;

  return (
    <div className="fixed inset-0 bg-white/10 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6">
        {/* Modal Header */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg  text-gray-800 font-semibold">Now Playing</h3>
          <button
            onClick={onClose}
            className="text-white cursor-pointer bg-orange-500 hover:bg-orange-600 rounded-full p-2"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Album Art */}
        <img
          src={sermon.audioCover}
          alt={sermon.title}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />

        {/* Song Info */}
        <div className="text-center mb-4">
          <h4 className="font-semibold text-black text-lg">{sermon.title}</h4>
          <p className="text-gray-600">{sermon.sermonDetails.minister}</p>
          <p className="text-sm text-gray-500">{sermon.sermonDetails.bibleText}</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-4">
          <div
            className="w-full bg-gray-200 rounded-full h-2 cursor-pointer"
            onClick={handleSeek}
          >
            <div
              className="bg-orange-600 h-2 rounded-full"
              style={{ width: `${(currentTime / duration) * 100 || 0}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-sm text-gray-500 mt-1">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex justify-center items-center space-x-4">
          <button
            onClick={togglePlayPause}
            className="bg-orange-600 cursor-pointer hover:bg-orange-700 text-white p-3 rounded-full text-xl"
          >
            {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
          </button>
        </div>

        {/* Hidden Audio Element */}
        <audio
          ref={audioRef}
          src={sermon.audioSource}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onEnded={() => setIsPlaying(false)}
        />
      </div>
    </div>
  );
};

// Main Sermon Component
const Sermon = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedYear, setSelectedYear] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [isSermonModalOpen, setIsSermonModalOpen] = useState(false);
  const [isAudioModalOpen, setIsAudioModalOpen] = useState(false);
  const [selectedSermon, setSelectedSermon] = useState(null);
  const [showToast, setShowToast] = useState(false);

  const itemsPerPage = 8;

  // Get unique categories and years
  const categories = ['All', ...new Set(sermonData.map(sermon => sermon.category))];
  const years = ['All', ...new Set(sermonData.map(sermon => sermon.year))];

// Filter sermons based on search and filters
const filteredSermons = [...sermonData] // create a copy to avoid mutating the original
  .reverse() // show latest first
  .filter(sermon => {
    const matchesSearch = sermon.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sermon.sermonDetails.minister.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sermon.sermonDetails.topic.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || sermon.category === selectedCategory;
    const matchesYear = selectedYear === 'All' || String(sermon.year) === selectedYear;

    return matchesSearch && matchesCategory && matchesYear;
  });

  // Pagination
  const totalPages = Math.ceil(filteredSermons.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentSermons = filteredSermons.slice(startIndex, startIndex + itemsPerPage);

  const handleSermonClick = (sermon) => {
    setSelectedSermon(sermon);
    setIsSermonModalOpen(true);
  };

  const handleAudioPlay = (sermon) => {
    setSelectedSermon(sermon);
    setIsAudioModalOpen(true);
  };

  const handleDownload = (sermon) => {
    const link = document.createElement('a');
    link.href = sermon.audioSource;
    link.download = `${sermon.title}.mp3`;
    link.click();
  };

  const handleShare = async (sermon) => {
    const url = `${window.location.origin}/sermon/${sermon.id}`;
    try {
      await navigator.clipboard.writeText(url);
      setShowToast(true);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory, selectedYear]);

  return (
    <>
    <Navbar />

    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Sermon 
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Nourish your spirit with the Word of God. Listen to our latest sermons and be transformed!
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Search and Filter Section */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 md:mb-16">
          <div className='flex-1 '>
            <div className="relative md:w-1/2">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search sermons..."
                className="w-full pl-10 text-gray-800 outline-0 pr-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          
          <div className="flex gap-2 md:w-auto">
            <select
              className="px-4 py-2 border text-gray-800 border-gray-300 rounded-lg outline-0 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
            
            <select
              className="px-4 py-2 text-gray-800 border border-gray-300 rounded-lg outline-0 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
            >
              {years.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Sermon Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {currentSermons.map(sermon => (
            <div key={sermon.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative">
                <img 
                  src={sermon.audioCover} 
                  alt={sermon.title}
                  className="w-full h-48 object-cover cursor-pointer"
                  onClick={() => handleSermonClick(sermon)}
                />
                <div className="absolute top-4 left-4 bg-white rounded-lg p-2 text-center shadow-md">
                  <div className="text-2xl font-bold text-orange-600">{sermon.day}</div>
                  <div className="text-xs text-gray-600 uppercase">{sermon.month}</div>
                </div>
                <div className="absolute top-4 right-4 bg-orange-600 text-white px-2 py-1 rounded-full text-xs">
                  {sermon.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 
                  className="text-xl font-bold text-gray-800 mb-2 cursor-pointer hover:text-blue-600 transition-colors"
                  onClick={() => handleSermonClick(sermon)}
                >
                  {sermon.title}
                </h3>
                <p className="text-gray-600 mb-1">
                  <strong>Topic:</strong> {sermon.sermonDetails.topic}
                </p>
                <p className="text-gray-600 mb-1">
                  <strong>Scripture:</strong> {sermon.sermonDetails.bibleText}
                </p>
                <p className="text-gray-600 mb-4">
                  <strong>Minister:</strong> {sermon.sermonDetails.minister}
                </p>
                
                <div className="flex justify-start space-x-4">
                  <button
                    onClick={() => handleAudioPlay(sermon)}
                    className="bg-orange-600 hover:bg-orange-700 cursor-pointer text-white p-2 rounded-full transition-colors duration-200"
                    title="Listen"
                  >
                    <Headphones className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDownload(sermon)}
                    className="bg-orange-600 hover:bg-orange-700 cursor-pointer text-white p-2 rounded-full transition-colors duration-200"
                    title="Download"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleShare(sermon)}
                    className="bg-orange-600 hover:bg-orange-700 cursor-pointer text-white p-2 rounded-full transition-colors duration-200"
                    title="Share"
                  >
                    <Link className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-2">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="p-2 rounded-lg bg-white shadow-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
            >
              <ChevronLeft className="text-black w-4 h-4" />
            </button>
            
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index + 1}
                onClick={() => setCurrentPage(index + 1)}
                className={`px-4 py-2 rounded-lg ${
                  currentPage === index + 1
                    ? 'bg-orange-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                } shadow-md`}
              >
                {index + 1}
              </button>
            ))}
            
            <button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="p-2 rounded-lg bg-white shadow-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
            >
              <ChevronRight className="text-black w-4 h-4" />
            </button>
          </div>
        )}

        {/* No Results */}
        {filteredSermons.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">🎵</div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No Sermons Found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>

      {/* Modals */}
      <SermonModal
        sermon={selectedSermon}
        isOpen={isSermonModalOpen}
        onClose={() => setIsSermonModalOpen(false)}
      />

      <AudioPlayerModal
        sermon={selectedSermon}
        isOpen={isAudioModalOpen}
        onClose={() => setIsAudioModalOpen(false)}
      />

      {/* Toast Notification */}
      <Toast
        message="Link copied to clipboard!"
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
    </div>

    <Footer />
    </>
  );
};

export default Sermon;