import React, { useState, useRef } from 'react';
import { Upload, Image, Calendar, MapPin, User, Clock, DollarSign, Users, FileText, Tag, ArrowLeft } from 'lucide-react';

const AddNewEvent = () => {
  const [coverImage, setCoverImage] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    speaker: '',
    date: '',
    time: '',
    endDate: '',
    endTime: '',
    location: '',
    price: '',
    maxAttendees: '',
    category: '',
    description: '',
    registrationDeadline: '',
    contactEmail: '',
    contactPhone: '',
    requirements: '',
    isRecurring: false,
    recurringType: 'weekly'
  });
  
  const coverInputRef = useRef(null);

  const categories = [
    'Conference',
    'Leadership Training', 
    'Revival',
    'Evangelism',
    'Workshop',
    'Retreat',
    'Youth Event',
    'Women\'s Event',
    'Men\'s Event',
    'Community Outreach'
  ];

  // Handle drag events for cover image
  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  // Handle drop for cover image
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    const files = e.dataTransfer.files;
    if (files && files[0]) {
      handleImageUpload(files[0]);
    }
  };

  // Handle cover image upload
  const handleImageUpload = (file) => {
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setCoverImage(e.target.result);
      };
      reader.readAsDataURL(file);
    } else {
      alert('Please upload an image file');
    }
  };

  // Handle file input change
  const handleCoverChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      handleImageUpload(file);
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

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Event Data:', formData);
    console.log('Cover Image:', coverImage);
    alert('Event created successfully!');
  };

  // Get preview color based on category
  const getCategoryColor = (category) => {
    const colorMap = {
      'Conference': 'from-blue-500 to-blue-600',
      'Leadership Training': 'from-orange-500 to-orange-600',
      'Revival': 'from-purple-500 to-purple-600',
      'Evangelism': 'from-green-500 to-green-600',
      'Workshop': 'from-indigo-500 to-indigo-600',
      'Retreat': 'from-teal-500 to-teal-600',
      'Youth Event': 'from-pink-500 to-pink-600',
      'Women\'s Event': 'from-rose-500 to-rose-600',
      'Men\'s Event': 'from-gray-500 to-gray-600',
      'Community Outreach': 'from-emerald-500 to-emerald-600'
    };
    return colorMap[category] || 'from-blue-500 to-purple-600';
  };

  return (
    <div className="p-4 lg:p-6 mt-8 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center mt-5 md:mt-0 gap-4 mb-4">
          <a 
          href='/admin/events'
          className="p-2 bg-blue-500 hover:bg-blue-400 rounded-lg transition-colors">
            <ArrowLeft className="h-5 w-5 text-white" />
          </a>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Create New Event</h1>
            <p className="text-gray-600 mt-1">Fill in the details to create your event</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col xl:flex-row gap-8">
        {/* Left Side - Form */}
        <div className="flex-1">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Cover Image Upload */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Event Cover Image</h3>
              
              <div
                className={`border-2 border-dashed rounded-xl p-8 transition-all duration-300 ${
                  dragActive 
                    ? 'border-blue-500 bg-blue-50' 
                    : 'border-gray-300 hover:border-gray-400 hover:bg-gray-50'
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                {coverImage ? (
                  <div className="text-center">
                    <img 
                      src={coverImage} 
                      alt="Event cover" 
                      className="mx-auto h-32 w-48 object-cover rounded-lg mb-4"
                    />
                    <button
                      type="button"
                      onClick={() => coverInputRef.current?.click()}
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Change Image
                    </button>
                  </div>
                ) : (
                  <div className="text-center">
                    <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                    <h4 className="text-lg font-medium text-gray-700 mb-2">
                      Upload Event Cover Image
                    </h4>
                    <p className="text-gray-500 mb-4">
                      Drag and drop an image here, or click to browse
                    </p>
                    <button
                      type="button"
                      onClick={() => coverInputRef.current?.click()}
                      className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Choose Image
                    </button>
                  </div>
                )}
                
                <input
                  ref={coverInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleCoverChange}
                  className="hidden"
                />
              </div>
            </div>

            {/* Basic Information */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-6">Basic Information</h3>
              
              <div className="space-y-6">
                {/* Event Title */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Event Title *
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border text-gray-800 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter event title"
                  />
                </div>

                {/* Speaker and Category */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Speaker/Host *
                    </label>
                    <input
                      type="text"
                      name="speaker"
                      value={formData.speaker}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border text-gray-800 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter speaker name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Category *
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border text-gray-800 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select category</option>
                      {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Event Description *
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Describe your event, what attendees can expect, and any important details"
                  />
                </div>
              </div>
            </div>

            {/* Date, Time & Location */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-6">Date, Time & Location</h3>
              
              <div className="space-y-6">
                {/* Start Date and Time */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Start Date *
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Start Time *
                    </label>
                    <input
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* End Date and Time */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      End Date
                    </label>
                    <input
                      type="date"
                      name="endDate"
                      value={formData.endDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      End Time
                    </label>
                    <input
                      type="time"
                      name="endTime"
                      value={formData.endTime}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Location */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location *
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border text-gray-800 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter event location or venue"
                  />
                </div>
              </div>
            </div>

            {/* Registration & Pricing */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-6">Registration & Pricing</h3>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Price *
                    </label>
                    <input
                      type="text"
                      name="price"
                      value={formData.price}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border text-gray-800 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="e.g., ₦25,000 or Free"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Max Attendees
                    </label>
                    <input
                      type="number"
                      name="maxAttendees"
                      value={formData.maxAttendees}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="e.g., 500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Registration Deadline
                    </label>
                    <input
                      type="date"
                      name="registrationDeadline"
                      value={formData.registrationDeadline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-6">Contact Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Contact Email
                  </label>
                  <input
                    type="email"
                    name="contactEmail"
                    value={formData.contactEmail}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border text-gray-800 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="contact@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Contact Phone
                  </label>
                  <input
                    type="tel"
                    name="contactPhone"
                    value={formData.contactPhone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border text-gray-800 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+234 xxx xxx xxxx"
                  />
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-6">Additional Information</h3>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Requirements or What to Bring
                </label>
                <textarea
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Any special requirements, items to bring, dress code, etc."
                />
              </div>
            </div>

            {/* Submit Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="button"
                className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
              >
                Save as Draft
              </button>
              <button
                type="submit"
                className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Create Event
              </button>
            </div>
          </form>
        </div>

        {/* Right Side - Live Preview */}
        <div className="xl:w-96">
          <div className="sticky top-8">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Live Preview</h3>
            
            {/* Preview Card */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
              {/* Cover Image */}
              <div className={`relative h-48 bg-gradient-to-r ${getCategoryColor(formData.category)} flex items-center justify-center`}>
                {coverImage ? (
                  <img 
                    src={coverImage} 
                    alt="Event cover" 
                    className="w-full h-full object-cover" 
                  />
                ) : (
                  <div className="text-center text-white">
                    <Calendar className="h-12 w-12 mx-auto mb-2 opacity-70" />
                    <p className="text-sm opacity-70">Event Cover Image</p>
                  </div>
                )}
                
                {formData.category && (
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white bg-opacity-90 text-gray-800 rounded-full text-sm font-medium">
                      {formData.category}
                    </span>
                  </div>
                )}
                
                {formData.price && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-white bg-opacity-90 text-gray-800 rounded-full text-sm font-bold">
                      {formData.price}
                    </span>
                  </div>
                )}
              </div>

              {/* Card Content */}
              <div className="p-6">
                <h4 className="font-bold text-lg text-gray-800 mb-2 line-clamp-2">
                  {formData.title || 'Event Title'}
                </h4>
                
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-2" />
                    <span>{formData.speaker || 'Speaker Name'}</span>
                  </div>
                  
                  {formData.date && (
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>
                        {new Date(formData.date).toLocaleDateString()}
                        {formData.time && ` at ${formData.time}`}
                      </span>
                    </div>
                  )}
                  
                  {formData.location && (
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span className="truncate">{formData.location}</span>
                    </div>
                  )}
                  
                  {formData.maxAttendees && (
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2" />
                      <span>Up to {formData.maxAttendees} attendees</span>
                    </div>
                  )}
                </div>

                {formData.description && (
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                    {formData.description}
                  </p>
                )}

                <button className={`w-full py-2 px-4 bg-gradient-to-r ${getCategoryColor(formData.category)} text-white rounded-lg text-sm font-medium transition-all duration-300`}>
                  Register Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewEvent;