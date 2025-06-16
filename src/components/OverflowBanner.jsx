const OverflowBanner = () => {
  return (
    <div className="relative py-16 px-6 md:px-12 lg:px-[200px] bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 overflow-hidden">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-400/15 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-bounce delay-300"></div>
        <div className="absolute top-32 right-1/3 w-3 h-3 bg-yellow-300/40 rounded-full animate-bounce delay-700"></div>
        <div className="absolute bottom-24 left-1/3 w-2 h-2 bg-pink-300/50 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-16 right-1/4 w-4 h-4 bg-white/20 rounded-full animate-bounce delay-500"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          
          {/* Icon Section */}
          <div className="flex-shrink-0">
            <div className="relative">
              {/* Main Icon Container */}
              <div className="w-24 h-24 lg:w-32 lg:h-32 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl border border-white/30 group hover:scale-110 transition-transform duration-500">
                <svg 
                  className="w-12 h-12 lg:w-16 lg:h-16 text-white group-hover:rotate-12 transition-transform duration-500" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.894A1 1 0 0018 16V3z" clipRule="evenodd" />
                </svg>
              </div>
              
              {/* Pulsing Ring */}
              <div className="absolute inset-0 w-24 h-24 lg:w-32 lg:h-32 rounded-full border-2 border-white/50 animate-ping"></div>
              <div className="absolute inset-2 w-20 h-20 lg:w-28 lg:h-28 rounded-full border border-white/30 animate-ping delay-1000"></div>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-4xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                2025,
              </span>
              <span className="block md:inline md:ml-3">
                The Overflow
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-6 max-w-3xl">
              Our word for the year in Higher Ground Baptist Church is{" "}
              <span className="font-semibold text-yellow-300">"The Overflow"</span>.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="px-8 py-3 bg-white cursor-pointer text-purple-600 font-bold rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 hover:bg-yellow-50 group">
                <span className="flex items-center justify-center">
                  Listen Now
                  <svg className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </span>
              </button>
              
              <button className="px-8 py-3 bg-transparent cursor-pointer border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-purple-600 transition-all duration-300 group">
                <span className="flex items-center justify-center">
                  Download
                  <svg className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Decorative Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg 
            className="w-full h-12 text-white/10" 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none"
          >
            <path 
              d="M0,60 C150,100 350,0 600,60 C850,120 1050,20 1200,60 L1200,120 L0,120 Z" 
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default OverflowBanner;