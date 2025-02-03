import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// Slider images
import slide1 from "../../../public/slider/slider1.jpg";
import slide2 from "../../../public/slider/slider2.jpg";
import slide3 from "../../../public/slider/slider3.jpg";
import slide4 from "../../../public/slider/slider4.jpg";
import slide5 from "../../../public/slider/slider5.jpg";
import slide6 from "../../../public/slider/slider6.jpg";
import slide7 from "../../../public/slider/slider7.jpg";
import slide8 from "../../../public/slider/slider8.jpg";
import slide9 from "../../../public/slider/slider9.jpg";
import slide10 from "../../../public/slider/slider10.jpg";
import slide11 from "../../../public/slider/slider11.jpg";
import slide12 from "../../../public/slider/slider12.jpg";

const Slider = () => {
  return (
    <div className="w-full md:h-[500px] h-[400px]">
        
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        effect="fade"
        loop={true}
        className="w-full h-full"
      >
        <SwiperSlide className="relative">
          <img src={slide1} alt="Fresh & Green Plants" className="w-full h-full brightness-75 object-cover" />
          <div className="absolute inset-0  bg-opacity-40 flex flex-col justify-center items-center text-center text-white p-6">
            <h2 className="text-3xl font-bold">Fresh & Green Plants</h2>
            <p className="text-lg mt-2 max-w-xl">Discover a variety of healthy plants for your home and garden.</p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative">
          <img src={slide2} alt="Indoor Plants" className="w-full h-full object-cover brightness-75" />
          <div className="absolute inset-0  bg-opacity-40 flex flex-col justify-center items-center text-center text-white p-6">
            <h2 className="text-3xl font-bold">Indoor Plants</h2>
            <p className="text-lg mt-2 max-w-xl">Perfect air-purifying plants to enhance your indoor environment.</p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative">
          <img src={slide3} alt="Outdoor Garden Collection" className="w-full h-full object-cover brightness-75" />
          <div className="absolute inset-0  bg-opacity-40 flex flex-col justify-center items-center text-center text-white p-6">
            <h2 className="text-3xl font-bold">Outdoor Garden Collection</h2>
            <p className="text-lg mt-2 max-w-xl">Brighten up your outdoor spaces with our beautiful garden plants.</p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative">
          <img src={slide4} alt="Exotic Plant Species" className="w-full h-full object-cover brightness-75" />
          <div className="absolute inset-0  bg-opacity-40 flex flex-col justify-center items-center text-center text-white p-6">
            <h2 className="text-3xl font-bold">Exotic Plant Species</h2>
            <p className="text-lg mt-2 max-w-xl">Rare and exotic plants to add uniqueness to your collection.</p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative">
          <img src={slide5} alt="Bonsai Collection" className="w-full h-full object-cover brightness-75" />
          <div className="absolute inset-0  bg-opacity-40 flex flex-col justify-center items-center text-center text-white p-6">
            <h2 className="text-3xl font-bold">Bonsai Collection</h2>
            <p className="text-lg mt-2 max-w-xl">Miniature trees to bring nature into your home.</p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative">
          <img src={slide6} alt="Cactus & Succulents" className="w-full h-full object-cover brightness-75" />
          <div className="absolute inset-0  bg-opacity-40 flex flex-col justify-center items-center text-center text-white p-6">
            <h2 className="text-3xl font-bold">Cactus & Succulents</h2>
            <p className="text-lg mt-2 max-w-xl">Low-maintenance plants perfect for busy plant lovers.</p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative">
          <img src={slide7} alt="Flowering Plants" className="w-full h-full object-cover brightness-75" />
          <div className="absolute inset-0  bg-opacity-40 flex flex-col justify-center items-center text-center text-white p-6">
            <h2 className="text-3xl font-bold">Flowering Plants</h2>
            <p className="text-lg mt-2 max-w-xl">Vibrant and colorful plants to brighten up your space.</p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative">
          <img src={slide8} alt="Ferns & Foliage" className="w-full h-full object-cover brightness-75" />
          <div className="absolute inset-0  bg-opacity-40 flex flex-col justify-center items-center text-center text-white p-6">
            <h2 className="text-3xl font-bold">Ferns & Foliage</h2>
            <p className="text-lg mt-2 max-w-xl">Lush greenery to create a natural ambiance.</p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative">
          <img src={slide9} alt="Tropical Plants" className="w-full h-full object-cover brightness-75" />
          <div className="absolute inset-0  bg-opacity-40 flex flex-col justify-center items-center text-center text-white p-6">
            <h2 className="text-3xl font-bold">Tropical Plants</h2>
            <p className="text-lg mt-2 max-w-xl">Add an exotic touch with vibrant tropical plants.</p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative">
          <img src={slide10} alt="Herbs & Greens" className="w-full h-full object-cover brightness-75" />
          <div className="absolute inset-0  bg-opacity-40 flex flex-col justify-center items-center text-center text-white p-6">
            <h2 className="text-3xl font-bold">Herbs & Greens</h2>
            <p className="text-lg mt-2 max-w-xl">Fresh herbs and greens for your kitchen or garden.</p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative">
          <img src={slide11} alt="Trees & Shrubs" className="w-full h-full object-cover brightness-75" />
          <div className="absolute inset-0  bg-opacity-40 flex flex-col justify-center items-center text-center text-white p-6">
            <h2 className="text-3xl font-bold">Trees & Shrubs</h2>
            <p className="text-lg mt-2 max-w-xl">Shade and structure for your garden with our trees and shrubs.</p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative">
          <img src={slide12} alt="Seasonal Plants" className="w-full h-full object-cover brightness-75" />
          <div className="absolute inset-0  bg-opacity-40 flex flex-col justify-center items-center text-center text-white p-6">
            <h2 className="text-3xl font-bold">Seasonal Plants</h2>
            <p className="text-lg mt-2 max-w-xl">Plants that bloom with the changing seasons.</p>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Slider;
