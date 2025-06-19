import React, { useState, useRef } from 'react';
import { Upload, File, Loader, Music, Image, Play, Clock, User, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


const AudioUploadForm = () => {
  const [uploadStep, setUploadStep] = useState('upload'); // 'upload', 'form'
  const [audioFile, setAudioFile] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
   const [showNotification, setShowNotification] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    speaker: '',
    date: '',
    duration: '',
    description: '',
    category: '',
    audioCoverPhoto: ''
  });
  
  const fileInputRef = useRef(null);
  const coverInputRef = useRef(null);
  const navigate = useNavigate();

  // Handle drag events
  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  // Handle drop
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    const files = e.dataTransfer.files;
    if (files && files[0]) {
      handleFileUpload(files[0]);
    }
  };

  // Handle file upload
  const handleFileUpload = (file) => {
    if (file && file.type.startsWith('audio/')) {
      setAudioFile(file);
      setIsProcessing(true);
      setUploadStep('form');
      
      // Simulate processing for 3 seconds
      setTimeout(() => {
        setIsProcessing(false);
      }, 3000);
    } else {
      alert('Please upload an audio file');
    }
  };

  // Handle file input change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      handleFileUpload(file);
    }
  };

  // Handle cover image upload
  const handleCoverUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setCoverImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

// Handle form submission with validation and notification
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (
      !audioFile ||
      !formData.title.trim() ||
      !formData.speaker.trim() ||
      !formData.date ||
      !formData.category ||
      !coverImage ||
      !formData.description.trim()
    ) {
      alert('Please fill in all required fields and upload audio and cover image.');
      return;
    }

    setShowNotification(true);

    setTimeout(() => {
      setShowNotification(false);
      // Optionally reset form here
      setAudioFile(null);
      setCoverImage(null);
      setFormData({
        title: '',
        speaker: '',
        date: '',
        duration: '',
        description: '',
        category: '',
        audioCoverPhoto: ''
      });
      setUploadStep('upload');
      navigate('/admin/audio');
    }, 1500);
  };


  return (
    <div className="p-4 lg:p-6 mt-8 bg-gray-50">
            {/* Notification */}
      {showNotification && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 transition-all">
          <div className="bg-white rounded-xl shadow-lg px-8 py-6 flex items-center space-x-3">
            <Check className="text-green-500 w-7 h-7" />
            <span className="text-lg font-semibold text-gray-800">Audio uploaded successfully</span>
          </div>
        </div>
      )}
      {/* Upload Step - Full Screen */}
      {uploadStep === 'upload' && (
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center max-w-lg mx-auto p-8">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Upload Audio File</h2>
            
            <div
              className={`border-2 border-dashed rounded-xl p-16 transition-all duration-300 ${
                dragActive 
                  ? 'border-blue-500 bg-blue-50 scale-105' 
                  : 'border-gray-300 hover:border-gray-400 hover:bg-gray-50'
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <Upload className="mx-auto h-20 w-20 text-gray-400 mb-6" />
              <h3 className="text-xl font-medium text-gray-700 mb-3">
                Drag and drop your audio file here
              </h3>
              <p className="text-gray-500 mb-6">
                or click to browse files (MP3, WAV, M4A supported)
              </p>
              
              <button
                onClick={() => fileInputRef.current?.click()}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-lg font-medium"
              >
                Choose File
              </button>
              
              <input
                ref={fileInputRef}
                type="file"
                accept="audio/*"
                onChange={handleFileChange}
                className="hidden"
              />
            </div>
          </div>
        </div>
      )}

      {/* Form Step - Split Layout */}
      {uploadStep === 'form' && (
        <div className="flex min-h-screen">
          {/* Left Side - Form */}
          <div className="flex-1 p-8">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Audio Details</h2>
              
              <div className="space-y-6">
                {/* Title */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Title *
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border text-gray-800 border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                    placeholder="Enter audio title"
                  />
                </div>

                {/* Speaker */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Speaker *
                  </label>
                  <input
                    type="text"
                    name="speaker"
                    value={formData.speaker}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border text-gray-800 border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter speaker name"
                  />
                </div>

                {/* Date and Duration */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Date *
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 text-gray-800 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Duration
                    </label>
                    <input
                      type="text"
                      name="duration"
                      value={formData.duration}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border text-gray-800 border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="e.g., 45:30"
                    />
                  </div>
                </div>

                {/* Series and Category */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Category
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border text-gray-800 border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="evening-watch">Evening Watch</option>
                      <option value="sunday-service">Sunday Service</option>
                      <option value="bible-study">Bible Study</option>
                      <option value="face-to-face">Face To Face</option>
                      <option value="conference">Conference</option>
                       <option value="uplifting-hour">Uplifting Hour</option>
                    </select>
                  </div>

                                 {/* Cover Image Upload */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Cover Image
                  </label>
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => coverInputRef.current?.click()}
                      className="flex items-center px-4 py-2 text-gray-800 cursor-pointer border border-gray-300 rounded-lg outline-none hover:bg-gray-50 transition-colors duration-200"
                    >
                      <Image className="h-5 w-5 mr-2" />
                      Upload Cover
                    </button>
                    {coverImage && (
                      <span className="text-sm text-green-600">✓ Image uploaded</span>
                    )}
                  </div>
                  <input
                    ref={coverInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleCoverUpload}
                    className="hidden"
                    value={formData.audioCoverPhoto}
                  />
                </div>
                </div>

 

                {/* Description */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 text-gray-800 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter description or summary"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <button
                    onClick={handleSubmit}
                    className="w-full bg-blue-600 text-white py-3 rounded-lg outline-none hover:bg-blue-700 transition-colors duration-200 font-medium text-lg"
                  >
                    Upload Audio
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Live Preview Card */}
          <div className="w-96 p-8">
            <div className="sticky top-8">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Preview</h3>
              
              {/* Preview Card */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                {/* Cover Image */}
                <div className="relative h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                  {coverImage ? (
                    <img 
                      src={coverImage} 
                      alt="Cover" 
                      className="w-full h-full object-cover" 
                    />
                  ) : (
                    <div className="text-center text-white">
                      <Music className="h-12 w-12 mx-auto mb-2 opacity-70" />
                      <p className="text-sm opacity-70">No cover image</p>
                    </div>
                  )}
                  
                  {/* Processing Overlay */}
                  {isProcessing && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                      <div className="text-center text-white">
                        <Loader className="h-8 w-8 animate-spin mx-auto mb-2" />
                        <p className="text-sm">Processing...</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h4 className="font-bold text-lg text-gray-800 mb-2 line-clamp-2">
                    {formData.title || 'Audio Title'}
                  </h4>
                  
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-2" />
                      <span>{formData.speaker || 'Speaker Name'}</span>
                    </div>
                    
                    {formData.date && (
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{new Date(formData.date).toLocaleDateString()}</span>
                      </div>
                    )}
                    
                    {formData.duration && (
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>{formData.duration}</span>
                      </div>
                    )}
                  </div>

                  {formData.series && (
                    <div className="mb-3">
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                        {formData.category}
                      </span>
                    </div>
                  )}

                  {formData.description && (
                    <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                      {formData.description}
                    </p>
                  )}

                  {/* Audio File Info */}
                  {audioFile && (
                    <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center text-sm text-gray-600">
                        <File className="h-4 w-4 mr-2" />
                        <span className="truncate">{audioFile.name}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AudioUploadForm;