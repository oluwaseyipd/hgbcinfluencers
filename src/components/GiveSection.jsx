import give1 from "../assets/images/image-2.jpg";
import give2 from "../assets/images/photizo.jpg";

const GiveSection = () => {
  return (
    <div className="px-[20px] md:px-[200px] py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-bold bg-clip-text text-black mb-6">
          Giving
        </h2>
        <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-light">
          Put your Money where your Faith is.
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Images Section */}
        <div className="relative">
          {/* Main Image */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <img 
              src={give2} 
              alt="Giving and faith" 
              className="w-full h-[400px] md:h-[500px] object-cover transform hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
          
          {/* Floating Secondary Image */}
          <div className="absolute -top-6 -right-6 w-32 h-32 md:w-40 md:h-40 overflow-hidden rounded-xl shadow-xl border-4 border-white">
            <img 
              src={give1} 
              alt="Community giving" 
              className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
            />
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 blur-xl"></div>
          <div className="absolute top-10 -left-8 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-30 blur-lg"></div>
        </div>

        {/* Content Section */}
        <div className="space-y-8">
          <div className="space-y-6">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Our giving to God is our act of love and appreciation to Him. We
              believe that our faith is reflected in our actions, including
              our generosity. By giving financially, we demonstrate our trust
              in God's provision and our commitment to advancing His kingdom.
            </p>
            
            {/* Bible Verse Card */}
            <div className="bg-white/70 backdrop-blur-sm border border-white/50 rounded-xl p-6 shadow-lg">
              <p className="text-lg md:text-xl text-gray-800 italic leading-relaxed">
                "For where your treasure is, there your heart will be also."
              </p>
              <span className="text-sm md:text-base text-orange-600 font-semibold mt-2 block">
                - Matthew 6:21
              </span>
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="pt-4">
            <a 
              href="give.php" 
              className="inline-flex items-center px-6 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-lg rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 hover:from-blue-700 hover:to-purple-700 group"
            >
              Give Now
              <svg 
                className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiveSection;