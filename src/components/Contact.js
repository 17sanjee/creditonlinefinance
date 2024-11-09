import React from 'react';

const Contact = () => {
  return (
    <section className="relative bg-cover bg-center" style={{ backgroundImage: 'url(/images/headbg.png)' }}>
      <div className="container mx-auto px-4 py-10">
        <h2 className="text-center text-3xl font-bold text-black">
          Contact Us
          <span className="block mt-2 w-1/12 mx-auto border-b-4 border-blue-600"></span>
        </h2>
        <p className="text-center mt-4 text-gray-700">Connect with us to unlock smarter, faster, AI-driven financial solutions.</p>

        {/* Card Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 pl-12 pr-12">
          {/* Card 1 */}
          <div className="flex rounded-lg shadow-lg overflow-hidden">
            <div
              className="w-1/5 bg-blue-300 flex justify-center items-center text-white"
              style={{ clipPath: 'polygon(0 0, 100% 0, 80% 100%, 0 100%)' }}
            >
              <img src="/images/image1.png" alt="Email Icon" className="w-16 h-16 rounded-full" /> {/* Rounded image */}

            </div>
            <div className="w-4/5 bg-white p-4 flex flex-col justify-center">
              <h3 className="font-bold text-lg">Card Title 1</h3>
              <p className="text-gray-600">Description for card 1 goes here.</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex rounded-lg shadow-lg overflow-hidden">
            <div
              className="w-1/5 bg-blue-300 flex justify-center items-center text-white"
              style={{ clipPath: 'polygon(0 0, 100% 0, 80% 100%, 0 100%)' }}
            >
              <img src="/images/image1.png" alt="Email Icon" className="w-16 h-16 rounded-full" /> {/* Rounded image */}
            </div>
            <div className="w-4/5 bg-white p-4 flex flex-col justify-center">
              <h3 className="font-bold text-lg">Card Title 2</h3>
              <p className="text-gray-600">Description for card 2 goes here.</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex rounded-lg shadow-lg overflow-hidden">
            <div
              className="w-1/5 bg-blue-300 flex justify-center items-center text-white"
              style={{ clipPath: 'polygon(0 0, 100% 0, 80% 100%, 0 100%)' }}
            >
              <img src="/images/image1.png" alt="Email Icon" className="w-16 h-16 rounded-full" /> {/* Rounded image */}
            </div>
            <div className="w-4/5 bg-white p-4 flex flex-col justify-center">
              <h3 className="font-bold text-lg">Card Title 3</h3>
              <p className="text-gray-600">Description for card 3 goes here.</p>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="mt-10 flex flex-col md:flex-row pl-12 pr-12">
          {/* Contact Form */}
          <div className="w-full md:w-7/12 p-4">
            <form className="bg-white p-6 rounded-lg shadow-md border-2 border-blue-500 h-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="Your Name" className="border border-blue-500 p-2 rounded" />
                <input type="email" placeholder="Your Email" className="border border-blue-500 p-2 rounded" />
              </div>
              <input type="text" placeholder="Subject" className="border border-blue-500 p-2 rounded w-full mt-4" />
              <textarea placeholder="Message" className="border border-blue-500 p-2 rounded w-full mt-4" rows="4"></textarea>
              <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded mt-4">Send Message</button>
            </form>
          </div>

          {/* Right Side Image */}
          <div className="w-full md:w-5/12 p-4 ">
            <img src="/images/image1.png" alt="Contact Image" className="w-full h-96 object-cover rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;