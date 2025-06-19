import React, { useState, useRef } from 'react';
import { FaPlus, FaTrash, FaImage, FaUpload, FaCheck } from "react-icons/fa6";
import { ArrowLeft, Upload, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AddQuote = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [category, setCategory] = useState('');
  const [year, setYear] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef(null);
  const [showNotification, setShowNotification] = useState(false);
  const navigate = useNavigate();

  const categories = ["Conference", "Leadership Training", "Sunday Service", "Evangelism", "Bible Study"];
  const years = ["2024", "2025"];
  const maxImages = 7;

  const handleFileSelect = (event) => {
    const files = Array.from(event.target.files);
    const remainingSlots = maxImages - selectedImages.length;
    const filesToAdd = files.slice(0, remainingSlots);

    filesToAdd.forEach(file => {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const newImage = {
            id: Date.now() + Math.random(),
            file: file,
            url: e.target.result,
            name: file.name,
            size: file.size
          };
          setSelectedImages(prev => [...prev, newImage]);
        };
        reader.readAsDataURL(file);
      }
    });

    // Reset input
    event.target.value = '';
  };

  const handleRemoveImage = (imageId) => {
    setSelectedImages(prev => prev.filter(img => img.id !== imageId));
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    const files = Array.from(e.dataTransfer.files);
    const remainingSlots = maxImages - selectedImages.length;
    const filesToAdd = files.slice(0, remainingSlots);

    filesToAdd.forEach(file => {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const newImage = {
            id: Date.now() + Math.random(),
            file: file,
            url: e.target.result,
            name: file.name,
            size: file.size
          };
          setSelectedImages(prev => [...prev, newImage]);
        };
        reader.readAsDataURL(file);
      }
    });
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (selectedImages.length === 0) {
      alert('Please select at least one image.');
      return;
    }

    if (!category || !year) {
      alert('Please select both category and year.');
      return;
    }

    setIsUploading(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Show notification instead of alert
      setShowNotification(true);

      // Reset form
      setSelectedImages([]);
      setCategory('');
      setYear('');

      // Redirect after 1.5s
      setTimeout(() => {
        setShowNotification(false);
        navigate('/admin/quotes');
      }, 1500);
    } catch (error) {
      alert('Upload failed. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 mt-14 p-4 lg:p-6">
          {/* Notification */}
      {showNotification && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 transition-all">
          <div className="bg-white rounded-xl shadow-lg px-8 py-6 flex items-center space-x-3">
            <FaCheck className="text-green-500 w-7 h-7" />
            <span className="text-lg font-semibold text-gray-800">Quotes added successfully</span>
          </div>
        </div>
      )}
      
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
              <a 
          href='/admin/quotes'
            className="p-2 bg-blue-500 hover:bg-blue-400 rounded-lg transition-colors">
              <ArrowLeft className="w-5 h-5 text-white" />
            </a>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Add New Quotes</h1>
              <p className="text-gray-600">Upload up to {maxImages} inspirational quote images</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side - Upload Form */}
          <div className="space-y-6">
            {/* Category and Year Selection */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Quote Details</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Category Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-4 py-3 border text-gray-800 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    required
                  >
                    <option value="">Select Category</option>
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                {/* Year Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Year <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    className="w-full px-4 py-3 text-gray-800 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    required
                  >
                    <option value="">Select Year</option>
                    {years.map(yr => (
                      <option key={yr} value={yr}>{yr}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Image Upload Area */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-900">Upload Images</h2>
                <span className="text-sm text-gray-500">
                  {selectedImages.length} / {maxImages} images
                </span>
              </div>

              {/* Upload Area */}
              <div
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                className={`border-2 border-dashed rounded-xl p-8 text-center transition-all ${
                  selectedImages.length >= maxImages
                    ? 'border-gray-200 bg-gray-50'
                    : 'border-blue-300 hover:border-blue-400 bg-blue-50/50'
                }`}
              >
                {selectedImages.length >= maxImages ? (
                  <div className="text-gray-500">
                    <FaCheck className="w-12 h-12 mx-auto mb-4 text-green-500" />
                    <p className="text-lg font-medium">Maximum images reached</p>
                    <p className="text-sm">You can upload up to {maxImages} images at once</p>
                  </div>
                ) : (
                  <div>
                    <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                      <Upload className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      Drop your images here, or{' '}
                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        className="text-blue-600 hover:text-blue-700 cursor-pointer font-semibold"
                      >
                        browse
                      </button>
                    </h3>
                    <p className="text-sm text-gray-500 mb-4">
                      Supports: JPG, PNG, GIF (Max 10MB each)
                    </p>
                    <p className="text-xs text-gray-400">
                      {maxImages - selectedImages.length} more images can be added
                    </p>
                  </div>
                )}

                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleFileSelect}
                  className="hidden"
                  disabled={selectedImages.length >= maxImages}
                />
              </div>

              {/* Browse Button */}
              {selectedImages.length < maxImages && (
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all flex items-center justify-center space-x-2"
                >
                  <FaPlus className="w-4 h-4" />
                  <span>Add More Images</span>
                </button>
              )}
            </div>

            {/* Submit Button */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <button
                onClick={handleSubmit}
                disabled={isUploading || selectedImages.length === 0 || !category || !year}
                className={`w-full px-8 py-4 rounded-lg font-semibold transition-all flex items-center justify-center space-x-2 ${
                  isUploading || selectedImages.length === 0 || !category || !year
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl'
                }`}
              >
                {isUploading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Uploading...</span>
                  </>
                ) : (
                  <>
                    <FaUpload className="w-5 h-5" />
                    <span>Upload {selectedImages.length} Quote{selectedImages.length !== 1 ? 's' : ''}</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Side - Preview */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Preview</h2>
              {selectedImages.length > 0 && (
                <button
                  onClick={() => setSelectedImages([])}
                  className="text-red-600 hover:text-red-700 text-sm font-medium flex items-center space-x-1"
                >
                  <FaTrash className="w-4 h-4" />
                  <span>Clear All</span>
                </button>
              )}
            </div>

            {selectedImages.length === 0 ? (
              <div className="text-center py-16">
                <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                  <FaImage className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No images selected</h3>
                <p className="text-gray-500">Upload images to see them here</p>
              </div>
            ) : (
              <div className="space-y-4 max-h-[600px] overflow-y-auto">
                {selectedImages.map((image, index) => (
                  <div key={image.id} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
                    {/* Image Preview */}
                    <div className="relative">
                      <img
                        src={image.url}
                        alt={`Preview ${index + 1}`}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div className="absolute -top-2 -right-2">
                        <button
                          onClick={() => handleRemoveImage(image.id)}
                          className="w-6 h-6 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center text-xs transition-colors"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </div>
                    </div>

                    {/* Image Info */}
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium text-gray-900 truncate">
                        {image.name}
                      </h4>
                      <p className="text-xs text-gray-500 mt-1">
                        {formatFileSize(image.size)}
                      </p>
                      <div className="flex items-center space-x-2 mt-2">
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">
                          {category || 'No category'}
                        </span>
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                          {year || 'No year'}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddQuote;