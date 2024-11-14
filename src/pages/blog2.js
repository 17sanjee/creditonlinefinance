import React from 'react';

const Blog3 = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto">
        {/* Blog Image */}
        <div className="mb-8">
          <img 
            src="/images/image1.png" 
            alt="Blog Post" 
            className="w-full h-80 object-cover rounded-lg shadow-md" 
          />
        </div>

        {/* Blog Title */}
        <h1 className="text-4xl font-bold mb-4">The Blog Title Goes Here</h1>

        {/* Author & Date Info */}
        <div className="flex items-center text-gray-600 mb-8">
          <div className="flex items-center space-x-4">
            <img 
              src="/images/author-image.png" 
              alt="Author" 
              className="w-10 h-10 rounded-full"
            />
            <p className="font-semibold">John Doe</p>
          </div>
          <span className="mx-4">|</span>
          <p>Published on October 11, 2024</p>
        </div>

        {/* Blog Content */}
        <div className="text-lg leading-relaxed text-gray-700">
          <p className="mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </p>
          <p className="mb-6">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Blog3;
