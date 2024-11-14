import React from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const blogs = [
  {
    id: 1,
    image: '/images/image1.png', // Replace with your image paths
    title: 'Blog Title 1',
   
    
  },
  {
    id: 2,
    image: '/images/image2.png',
    title: 'Blog Title 2',
    
  },
  {
    id: 3,
    image: '/images/image3.png',
    title: 'Blog Title 3',
    
  },
  {
    id: 4,
    image: '/images/image1.png',
    title: 'Blog Title 4',
    
  },
];

const Blogs = () => {
  const settings = {
    dots: true, // Show dots at the bottom
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 slides at once
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Slide every 3 seconds
    ltr: true, // Slide from right to left
    responsive: [
      {
        breakpoint: 1024, // For medium-sized screens
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // For smaller screens
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section
      id="blogs"
      className="bg-cover bg-center py-12"
      style={{ backgroundImage: 'url("/images/headbg.png")' }} // Replace with your background image path
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Our Latest Blogs</h2>

        <Slider {...settings} className="flex-row-reverse">
          {blogs.map((blog) => (
            <div key={blog.id} className="px-2">
            
                <div className="bg-white rounded-lg overflow-hidden shadow-md" style={{ height: '400px' }}>
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full object-cover"
                    style={{ height: '300px' }} // Increased image height
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold">{blog.title}</h3>
                  </div>
                </div>
              
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Blogs;  