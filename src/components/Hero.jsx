import { heroTexts } from "../constants/data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const Hero = () => {
  return (
    <Swiper
      loop
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      modules={[Autoplay]}
      className="w-full h-[80vh] md:h-[40vh] lg:h-[80vh]"
    >
      {heroTexts.map((item, index) => (
        <SwiperSlide key={index}>
          <div
            className="w-full h-full bg-cover bg-center relative"
            style={{
              backgroundImage: `url(${item.img})`,
            }}
          >
            {/* Dark Overlay */}
<div className="absolute inset-0 bg-black/60"></div>

            {/* Text Content */}
            <div className="relative z-10 flex flex-col justify-center items-start h-full px-4 md:px-12 lg:px-[200px] ">
              <h1 className="text-4xl md:text-6xl lg:text-8xl text-white font-bold">
                {item.title}
              </h1>
              <p className="w-full md:w-[600px] lg:w-[700px] text-white text-xl md:text-2xl font-medium mt-5">
                {item.subtitle}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Hero;
