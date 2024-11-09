import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import './Testimonials.css'; // Custom styles

const testimonialsData = [
  {
    id: 1,
    backgroundImage: '/images/headbg.png',
    icon: '/images/image1.png',
    name: 'Andrew Foster',
    position: 'Software Engineer',
    review: 'Their AI tools are advanced, and the customer support is exceptional. I recommend Credit Online Finance to anyone looking to improve their financial operations.',
  },
  {
    id: 2,
    backgroundImage: '/images/testimonial2.jpg',
    icon: '/images/image2.png',
    name: 'Sandra Green',
    position: 'Project Manager',
    review: 'The AI-enhanced loan approval system has transformed how we handle our loan applications. Faster processing times have led to happier clients.',
  },
  {
    id: 3,
    backgroundImage: '/images/testimonial3.jpg',
    icon: '/images/image3.png',
    name: 'Robert Mitchell',
    position: 'CEO',
    review: 'The predictive analytics have significantly improved our investment strategy. We are seeing better results, and it is all thanks to Credit Online Finance.',
  },
  {
    id: 4,
    backgroundImage: '/images/testimonial4.jpg',
    icon: '/images/image1.png',
    name: 'Jessica Wong',
    position: 'Product Manager',
    review: 'The AI-powered tools have streamlined our processes and saved us a lot of time. We couldn’t be happier with the results.',
  },
  {
    id: 5,
    backgroundImage: '/images/testimonial5.jpg',
    icon: '/images/image2.png',
    name: 'John Marshall',
    position: 'Designer',
    review: 'AI-powered investment analytics have helped us make smarter, data-driven decisions, significantly boosting our portfolio performance.',
  },
  {
    id: 6,
    backgroundImage: '/images/testimonial6.jpg',
    icon: '/images/image3.png',
    name: 'Emily Richards',
    position: 'Business Analyst',
    review: 'The AI-powered payment processing is incredibly smooth and secure. We have reduced transaction times and improved our customer experience.',
  },
];

const Testimonials = () => {
  
  return (
    <section
      className="testimonials-section min-h-screen content-center"
      style={{
        backgroundImage: 'url("/images/headbg.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '60px 0',
      }}
    >
      <h2 className="text-center text-2xl font-bold underline-blue mb-4">WHAT CLIENTS SAY ABOUT US</h2>
      <p className="text-center text-lg mb-10">What our customers are saying about us!</p>

      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 800,
          disableOnInteraction: false,
          
          
        }}
        spaceBetween={25} // Reduced gap between cards
        slidesPerView={3.25} // Display 3 cards at a time
        loop={true}
      >
        {testimonialsData.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div
              className="testimonial-card"
              style={{
                backgroundImage: `url(${testimonial.backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="testimonial-content">
                <div className="testimonial-header">
                  <img
                    src={testimonial.icon}
                    alt={testimonial.name}
                    className="testimonial-icon"
                  />
                  <div className="testimonial-info">
                    <h3 className="name">{testimonial.name}</h3>
                    <p className="position">{testimonial.position}</p>
                  </div>
                </div>
                <p className="review">{testimonial.review}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
