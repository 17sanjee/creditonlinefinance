import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules'; // Ensure correct import

const Brand = () => {
  const brands = [
    '/images/image1.png',
    '/images/image2.png',
    '/images/image3.png',
    '/images/image1.png',
    '/images/image2.png',
    '/images/image3.png',
  ];

  return (
    <section id="brands" className="py-12 bg-gray-50">
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
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5 },
          }}
        >
          {brands.map((brand, index) => (
            <SwiperSlide key={index} className="flex items-center justify-center">
              <img
                src={brand}
                alt={`Brand ${index + 1}`}
                className="w-full h-auto object-contain"
                style={{ maxHeight: '100px' }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Brand;
