import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css'; // Import main Swiper styles
import 'swiper/css/navigation'; // Import Navigation styles
import 'swiper/css/pagination'; // Import Pagination styles

const Services = () => {
  const services = [
    {
      image: '/images/image1.png', // Replace with actual image paths
      title: 'AI-Powered Financial Advisory',
      description: 'Gain real-time, data-driven insights to make informed financial decisions. Our AI-driven advisory tools analyze market trends, customer behavior, and historical data, offering personalized financial advice tailored to your unique goals.',
    },
    {
      image: '/images/image2.png',
      title: 'Automated Risk Management',
      description: 'Our AI systems automatically detect potential risks, helping you protect your assets. We ensure your portfolio remains secure by predicting market fluctuations and identifying risks in real-time.',
    },
    {
      image: '/images/image3.png',
      title: 'Intelligent Payment Processing',
      description: 'With our AI-enhanced payment solutions, you can experience seamless, secure, and instant transactions. Our AI-powered system ensures payment accuracy, and compliance with regulatory standards.',
    },
    {
      image: '/images/image1.png',
      title: 'Predictive Investment Analytics',
      description: 'Leverage AI-powered predictive analytics to gain a competitive edge in the investment world. Our machine-learning models predict market movements and provide data-driven insights so you can maximize your investment returns.',
    },
    {
      image: '/images/image2.png',
      title: 'Streamlined Loan and Credit Approvals',
      description: 'Our Smart loan solutions and credit processing systems enable faster approvals and personalized terms. Analyzing financial data in real-time simplifies the entire process, giving you quick access to credit when needed.',
    },
    {
      image: '/images/image3.png',
      title: 'Personalized Financial Products',
      description: 'AI tailors our financial products and services to suit your individual preferences. By understanding your financial habits, we offer solutions that align with your needs and goals.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-100 min-h-screen" style={{ backgroundImage: "url('/images/headbg.png')" }}>
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Our Services</h2>
        <p className="text-gray-600 text-lg mb-8">
          We offer a wide range of financial technology solutions to help you manage and grow your business.
        </p>

        {/* Swiper Carousel for Services */}
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, speed: 800 }}  
          modules={[Navigation, Pagination, Autoplay]} // Import the necessary modules
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 }, // Show 2 cards on medium and larger screens
            1024: { slidesPerView: 2 },
          }}
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
            <div className=" bg-slate-100 rounded-lg shadow-md p-6" >  {/* Added padding */}
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2 py-4">{service.title}</h3>
              
              {/* Description with rounded corners and custom border */}
              <p className="border-4 border-blue-500 py-30 rounded-lg bg-gray-50 shadow-inner p-12" style={{ 
                    borderTopLeftRadius: '20px', 
                    borderBottomRightRadius: '20px', 
                    borderTopRightRadius: '0', 
                    borderBottomLeftRadius: '0' 
                }}>
                  
                {service.description}
              </p>
            </div>
          </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Services;
