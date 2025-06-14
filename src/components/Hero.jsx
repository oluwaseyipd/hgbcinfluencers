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
      className="w-full h-[80vh] md:h-[60vh] lg:h-[80vh]"
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
            <div className="relative z-10 flex flex-col justify-center items-start h-full px-[20px] md:px-[100px]">
              <h1 className="text-4xl md:text-8xl text-white font-bold">
                {item.title}
              </h1>
              <p className="w-full lg:w-1/3 text-white text-xl md:text-2xl font-medium mt-5">
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
