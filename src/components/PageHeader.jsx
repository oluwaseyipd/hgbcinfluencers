import React from 'react';
import { Link } from 'react-router-dom';
import showcase from "../assets/images/hero/showcase.png";

const PageHeader = ({ 
  title, 
  breadcrumb, 
  backgroundImage = showcase,
  subtitle = null 
}) => {
  return (
    <div 
      className="relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      {/* Content */}
      <div className="relative z-10 px-[20px] md:px-[100px] py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              {title}
            </h1>
            
            {subtitle && (
              <p className="text-lg md:text-xl mb-6 opacity-90">
                {subtitle}
              </p>
            )}
            
            <div className="flex items-center justify-center space-x-2 text-sm md:text-base">
              <Link 
                to="/" 
                className="hover:text-orange-500 transition-colors duration-200"
              >
                Home
              </Link>
              <span className="text-gray-300">|</span>
              <span className="text-gray-200">{breadcrumb}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;