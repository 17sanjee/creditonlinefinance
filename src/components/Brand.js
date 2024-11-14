import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules'; // Ensure correct import

const Brand = () => {
  const brands = [
    '/images/2.png',
    '/images/3.png',
    '/images/1.png',
    '/images/4.png',
    '/images/5.png',
    
  ];

  return (
    <section id="brands" className="py-12 bg-highlightgreen">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Trusted Partners</h2>

        <Swiper
          modules={[Autoplay]}  // Ensure Autoplay is used here
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={3000}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {brands.map((brand, index) => (
            <SwiperSlide key={index} className="flex items-center justify-center">
              <img
                src={brand}
                alt={`Brand ${index + 1}`}
                className="w-full h-auto object-contain"
                style={{ maxWidth: '220px', maxHeight: '220px' }} 
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Brand;
