import { useState, useEffect } from 'react';

const Loader = ({ onLoadingComplete }) => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [showMountains, setShowMountains] = useState(false);
  const [showCross, setShowCross] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // Animation sequence timing
    const timers = [
      setTimeout(() => setShowMountains(true), 300),
      setTimeout(() => setShowCross(true), 1200),
      setTimeout(() => setShowText(true), 500),
    ];

    // Progress bar animation
    const progressInterval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 60);

    // Complete loading after 4 seconds
    const completeTimer = setTimeout(() => {
      setIsComplete(true);
      setTimeout(() => {
        onLoadingComplete && onLoadingComplete();
      }, 500);
    }, 4000);

    return () => {
      timers.forEach(timer => clearTimeout(timer));
      clearInterval(progressInterval);
      clearTimeout(completeTimer);
    };
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-purple-800 flex items-center justify-center overflow-hidden z-50">
      
      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-white/60 rounded-full animate-pulse`}
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: '4s'
            }}
          />
        ))}
      </div>

      {/* Main Loader Container */}
      <div className={`text-center relative z-10 transition-all duration-500 ${
        isComplete ? 'opacity-0 scale-75' : 'opacity-100 scale-100'
      }`}>
        
        {/* Logo Container */}
        <div className="relative inline-block mb-8 animate-bounce" style={{ animationDuration: '3s' }}>
          
          {/* Pulsing Border */}
          <div className="absolute -inset-1 rounded-full border-3 border-orange-500 animate-ping opacity-75"></div>
          
          {/* Logo */}
          <div className="relative w-32 h-32 rounded-full overflow-hidden shadow-2xl hover:shadow-orange-500/50 transition-shadow duration-300">
            
            {/* Orange Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600"></div>
            
            {/* Mountains */}
            <div className="absolute bottom-0 -right-12 transform -translate-x-1/2 w-4/5 h-3/5">
              
              {/* Mountain 1 */}
              <div 
                className={`absolute bottom-0 left-2 w-8 h-8 bg-purple-600 transition-transform duration-500 ease-out ${
                  showMountains ? 'translate-y-0' : 'translate-y-full'
                }`}
                style={{
                  clipPath: 'polygon(0 100%, 50% 0, 100% 100%)',
                  transitionDelay: '0.3s'
                }}
              ></div>
              
              {/* Mountain 2 */}
              <div 
                className={`absolute bottom-0 left-6 w-12 h-10 bg-purple-600 transition-transform duration-500 ease-out ${
                  showMountains ? 'translate-y-0' : 'translate-y-full'
                }`}
                style={{
                  clipPath: 'polygon(0 100%, 50% 0, 100% 100%)',
                  transitionDelay: '0.6s'
                }}
              ></div>
              
              {/* Mountain 3 */}
              <div 
                className={`absolute bottom-0 right-2 w-14 h-16 bg-purple-600 transition-transform duration-500 ease-out ${
                  showMountains ? 'translate-y-0' : 'translate-y-full'
                }`}
                style={{
                  clipPath: 'polygon(0 100%, 50% 0, 100% 100%)',
                  transitionDelay: '0.9s'
                }}
              ></div>
            </div>
            
            {/* Cross */}
            <div className={`absolute top-6 right-10 transition-all duration-500 ${
              showCross ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-0 -rotate-180'
            }`}>
              <div className="relative w-1 h-8 bg-white">
                <div className="absolute top-1.5 -left-[6px] w-4 h-1 bg-white"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Loading Text */}
        {/* <div className={`transition-all duration-500 ${
          showText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}>
          <div className="text-white text-2xl font-light mb-4">Loading...</div>
        </div> */}

        {/* Church Name */}
        <div className={`transition-all duration-500 delay-1000 ${
          showText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}>
          <h1 className="text-white text-3xl font-bold mb-2">
            Higher Ground Baptist Church
          </h1>
        </div>

        {/* Tagline */}
        <div className={`transition-all duration-500 delay-1500 ${
          showText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}>
          <p className="text-white/90 text-lg font-light mb-8">
            ...Building Men of Influence
          </p>
        </div>

        {/* Progress Bar */}
        {/* <div className="w-48 h-1 bg-white/20 rounded-full mx-auto overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-orange-400 via-orange-500 to-purple-600 rounded-full transition-all duration-100 ease-out"
            style={{ width: `${loadingProgress}%` }}
          ></div>
        </div> */}

        {/* Progress Percentage */}
        {/* <div className="text-white/80 text-sm mt-2 font-medium">
          {loadingProgress}%
        </div> */}
      </div>
    </div>
  );
};

export default Loader;