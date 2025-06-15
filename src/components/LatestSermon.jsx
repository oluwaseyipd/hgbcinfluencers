import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { latestSermon } from "../constants/latestSermon"; 
import { FaAngleRight } from "react-icons/fa6";

const LatestSermon = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="px-[20px] md:px-[200px]">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Latest Sermon
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Stay current with our latest sermons and messages that inspire and transform lives.
          </p>
        </div>

        {/* Sermon Slider */}
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
          {latestSermon.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <img 
                    src={item.img} 
                    alt={item.title}
                    className="w-full h-48 md:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-orange-100 text-orange-500 text-sm font-medium rounded-full">
                      {item.category}
                    </span>
                  </div>
                  
                  <a 
                    href={item.link} 
                    className="block cursor-pointer group-hover:text-orange-600 transition-colors duration-200"
                  >
                    <h4 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 leading-tight">
                      {item.title}
                    </h4>
                  </a>


                  {item.date && (
                    <div className="text-sm text-gray-500 mb-4">
                      <i className="fas fa-calendar-alt mr-2"></i>
                      {item.date}
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <a 
                      href={item.link || "#"} 
                      className="text-orange-600 hover:text-orange-800 font-medium text-sm flex items-center group-hover:translate-x-1 transition-transform duration-200"
                    >
                      Listen Now
                       <FaAngleRight className="" />
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* View All Button */}
        <div className="text-center mt-8">
          <a 
            href="/sermon" 
            className="inline-flex items-center px-8 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            View All Sermons
            <FaAngleRight className="" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default LatestSermon;