import contact1 from "../assets/images/contact-us.jpg";

const ContactSection = () => {
  return (
    <div className="px-[20px] md:px-[200px] py-20 bg-blue-50 relative overflow-hidden">
      
      {/* Header Section */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold bg-clip-text text-black mb-6">
          Contact Us
        </h2>
        <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-light">
          We would love to hear from you.
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start relative z-10">
        
        {/* Contact Form */}
        <div className="order-2 lg:order-1">
          <div className="bg-white/60 backdrop-blur-xl border border-white/50 rounded-3xl p-8 md:p-10 shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
              Get in Touch
            </h3>
            
            <form className="space-y-6">
              {/* Form Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="group">
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    name="name" 
                    id="name" 
                    className="w-full px-6 py-4 bg-white/70 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 placeholder-gray-500 text-gray-800 group-hover:bg-white/90"
                  />
                </div>
                <div className="group">
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    name="email" 
                    id="email" 
                    className="w-full px-6 py-4 bg-white/70 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 placeholder-gray-500 text-gray-800 group-hover:bg-white/90"
                  />
                </div>
                <div className="group">
                  <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    name="phonenumber" 
                    id="phonenumber" 
                    className="w-full px-6 py-4 bg-white/70 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 placeholder-gray-500 text-gray-800 group-hover:bg-white/90"
                  />
                </div>
                <div className="group">
                  <input 
                    type="text" 
                    placeholder="Subject" 
                    name="subject" 
                    id="subject" 
                    className="w-full px-6 py-4 bg-white/70 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 placeholder-gray-500 text-gray-800 group-hover:bg-white/90"
                  />
                </div>
              </div>

              {/* Message Textarea */}
              <div className="group">
                <textarea 
                  placeholder="Your Message" 
                  name="message" 
                  id="message" 
                  rows="6"
                  className="w-full px-6 py-4 bg-white/70 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 placeholder-gray-500 text-gray-800 resize-none group-hover:bg-white/90"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-4">
                <button 
                  type="submit" 
                  className="w-full md:w-auto px-12 py-4 bg-orange-500 hover:bg-orange-600 cursor-pointer text-white font-bold text-lg rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 group"
                >
                  <span className="flex items-center justify-center">
                    Send Message
                    <svg 
                      className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Image Section */}
        <div className="order-1 lg:order-2 relative">
          <div className="relative group">
            {/* Main Image Container */}
            <div className="relative overflow-hidden rounded-3xl shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-700">
              <img 
                src={contact1} 
                alt="Contact Us" 
                className="w-full h-[500px] md:h-[600px] object-cover"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/40 via-transparent to-transparent"></div>
              

            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full opacity-70 blur-xl animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-indigo-400 to-cyan-500 rounded-full opacity-50 blur-2xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;