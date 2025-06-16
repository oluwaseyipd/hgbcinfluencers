import Tehillah from "../assets/images/tehilla.png";
import { FaXTwitter, FaFacebookF, FaInstagram, FaLocationPin } from "react-icons/fa6";

const LocationSection = () => {
  return (
    <div className="py-20 px-4 md:px-12 lg:px-[200px] bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden">
      
      {/* Header Section */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-3xl md:text-6xl font-bold bg-black bg-clip-text text-transparent mb-6">
          Find us Here
        </h2>
        <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto font-light">
          Check out our locations, get to choose your preferred site for worship.
        </p>
      </div>

      {/* Main Campus Section */}
      <div className="mx-auto mb-20">
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            We're small enough to reach you and big enough to accommodate you.
          </h3>
        </div>

        <div className="bg-white/60 backdrop-blur-sm border border-white/50 rounded-3xl overflow-hidden shadow-2xl">
          <div className="relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d956.7226045527757!2d4.264685797732026!3d8.164173505962271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10370da637004d75%3A0xcba433a8c5a10ad5!2sHigher%20Ground%20Baptist%20Church!5e0!3m2!1sen!2sng!4v1708510731262!5m2!1sen!2sng"
              width="100%" 
              height="450" 
              style={{border: 0}} 
              allowFullScreen="" 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full rounded-3xl"
            ></iframe>
            
            {/* Map Overlay Card */}
            <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl">
              <h4 className="font-bold text-gray-800 text-lg">Main Campus</h4>
              <p className="text-sm text-gray-600">Higher Ground Baptist Church</p>
            </div>
          </div>
        </div>
      </div>

      {/* Other Campus Section */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Other Campus</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Check out our locations, get to choose your preferred site for worship.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          
          {/* Map Section */}
          <div className="order-2 lg:order-1">
            <div className="bg-white/60 backdrop-blur-sm border border-white/50 rounded-3xl overflow-hidden shadow-2xl h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15797.995287930997!2d4.2668189!3d8.1523918!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10370dad95acfb9d%3A0x90b211af416dcc05!2sTehillah%20Baptist%20Church!5e0!3m2!1sen!2sng!4v1718639359959!5m2!1sen!2sng"
                width="100%" 
                height="100%" 
                style={{border: 0, minHeight: "450px"}} 
                allowFullScreen="" 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full rounded-3xl"
              ></iframe>
            </div>
          </div>

          {/* Campus Info Section */}
          <div className="order-1 lg:order-2 space-y-8">
            
            {/* Church Image & Header */}
            <div className="bg-white/60 backdrop-blur-sm border border-white/50 rounded-3xl p-8 shadow-xl">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="flex-shrink-0">
                  <img 
                    src={Tehillah} 
                    alt="Tehillah Baptist Church" 
                    className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-2xl shadow-lg"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                    Tehillah Baptist Church, Ogbomoso
                  </h3>
                  <div className="flex items-start gap-3 text-gray-600">
                    <FaLocationPin className="text-blue-500 mt-1 flex-shrink-0" />
                    <p className="text-base leading-relaxed">
                      Adekehin Close, Behind Alata Milk & Honey, Under G,
                      Ogbomoso, Oyo State, Nigeria.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Description Card */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-3xl p-8 shadow-lg">
              <h4 className="text-xl font-bold text-gray-800 mb-3">
                Same experience different location
              </h4>
              <p className="text-lg text-blue-600 font-semibold mb-4">
                Join us at our other campus.
              </p>
              <p className="text-gray-700 leading-relaxed">
                If you're unable to join us at our main church, we invite you
                to visit our campus, Tehillah Baptist Church. We share the
                same vision and values, with a convenient and accessible
                location. Come experience the warmth and connection of our
                church at either location.
              </p>
            </div>

            {/* Social Media Links */}
            <div className="bg-white/60 backdrop-blur-sm border border-white/50 rounded-3xl p-8 shadow-xl">
              <h4 className="text-lg font-bold text-gray-800 mb-6 text-center">
                Follow Tehillah Baptist Church
              </h4>
              <div className="flex justify-center gap-4">
                <a 
                  href="https://www.facebook.com/tehillahnation/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 hover:from-blue-600 hover:to-blue-700"
                >
                  <FaFacebookF className="text-lg" />
                </a>
                <a 
                  href="https://x.com/TehillahNation" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-br from-gray-800 to-black text-white rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 hover:from-gray-900 hover:to-gray-800"
                >
                  <FaXTwitter className="text-lg" />
                </a>
                <a 
                  href="https://www.instagram.com/tehillahnation/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 text-white rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 hover:from-pink-600 hover:via-red-600 hover:to-yellow-600"
                >
                  <FaInstagram className="text-lg" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationSection;