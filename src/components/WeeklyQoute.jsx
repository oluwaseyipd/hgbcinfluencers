import { weeklyQuote } from "../constants/data";
import { FaLink, FaDownload } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

const WeeklyQoute = () => {
  // Function to copy image URL to clipboard
  const copyImageURL = async (imageUrl) => {
    try {
      await navigator.clipboard.writeText(imageUrl);
      // You can add a toast notification here
      console.log('URL copied to clipboard');
    } catch (err) {
      console.error('Failed to copy URL: ', err);
    }
  };

  // Function to download image
  const downloadImage = async (imageUrl, filename = 'image') => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Failed to download image: ', err);
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="px-4 md:px-12 lg:px-[200px]">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Word of the Day
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Start your day with these enlightening words.
          </p>
        </div>

        {/* Quote Slider */}
        <Swiper
          loop
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ 
            clickable: true,
            dynamicBullets: true 
          }}
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="pb-12"
        >
          {weeklyQuote.map((item, id) => (
            <SwiperSlide key={id}> 
              <div className="relative group overflow-hidden rounded-lg shadow-lg">
                <img 
                  src={item.img} 
                  alt="Weekly Quote Image"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Overlay - appears on hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-6">
                    {/* Copy URL Button */}
                    <button
                      onClick={() => copyImageURL(item.img)}
                      className="flex flex-col items-center gap-2 cursor-pointer text-white hover:text-orange-400 transition-colors duration-200 p-3 rounded-lg hover:bg-white hover:bg-opacity-20"
                      title="Copy Image URL"
                    >
                      <FaLink className="text-2xl" />
                      <span className="text-xs font-medium">Copy URL</span>
                    </button>
                    
                    {/* Download Button */}
                    <button
                      onClick={() => downloadImage(item.img, `quote-${id + 1}`)}
                      className="flex flex-col items-center gap-2 cursor-pointer text-white hover:text-orange-400 transition-colors duration-200 p-3 rounded-lg hover:bg-white hover:bg-opacity-20"
                      title="Download Image"
                    >
                      <FaDownload className="text-2xl" />
                      <span className="text-xs font-medium">Download</span>
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default WeeklyQoute;