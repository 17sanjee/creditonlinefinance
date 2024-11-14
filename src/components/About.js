import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  // Animation variants for flip-in effect
  const flipIn = {
    hidden: { opacity: 0, rotateY: -90 },
    visible: { opacity: 1, rotateY: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="about"
      className=" min-h-screen bg-cover bg-center bg-no-repeat flex items-center"
      style={{ backgroundImage: "url('/images/aboutus_background.png')" }}
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 mt-10">
        
        {/* First Column: Title and Description (Center) */}
        <motion.div
          className="flex flex-col justify-center items-center text-center"
          initial="hidden"
          whileInView="visible"
          variants={flipIn}
          viewport={{ once: true }} // Set to true if you only want animation once
        >
          <h1 className="text-3xl font-semibold mb-4 pb-2">Our Mission 
            <span className="block h-1 w-1/2 bg-lightGreen mt-2 mx-auto"></span>
          </h1>
          <p className="text-md">
            Harness AI to simplify finance, drive innovation, improve security , and provide personalized solutions that foster financial grants and long-term success.
          </p>
        </motion.div>
        
        {/* Center Column: Card with Title and Description, Image below the Card */}
        <motion.div
          className="flex flex-col justify-start items-center"
          initial="hidden"
          whileInView="visible"
          variants={flipIn}
          viewport={{ once: true }}
        >
          <motion.div
            className="bg-highlightgreen shadow-lg p-6 rounded-lg w-full relative mb-5"
            initial="hidden"
            whileInView="visible"
            variants={flipIn}
            viewport={{ once: true }}
          >
            {/* Top Border */}
            <div className="absolute top-0 left-0 right-0 h-4 bg-lightGreen rounded-t-lg"></div>
            
            {/* Card Content */}
            <h2 className="text-4xl font-bold mb-2 text-center pb-4">About Us
              <span className="block h-1 w-1/4 bg-lightGreen mt-2 mx-auto"></span>
            </h2>
            <h5 className="text-xl font-medium mb-2 text-center">Innovating Finance with AI</h5>
            <p className="text-md mb-2 text-center">
              At Credit Online Finance, we are dedicated to transforming the financial landscape by leveraging the power of artificial intelligence. Our AI-driven solutions give individuals and businesses more innovative, secure financial services, simplifying complex processes, enhancing decision-making, and driving sustainable growth. Delegating Financial Success with AI-Powered Innovation.
            </p>
          </motion.div>

          {/* Image Below the Card */}
          <motion.img
            src="/images/aboutus.png"
            alt="Our Mission"
            className="w-full h-auto object-contain rounded-md"
            initial="hidden"
            whileInView="visible"
            variants={flipIn}
            viewport={{ once: true }}
          />
        </motion.div>
        
        {/* Last Column: Title and Description (Center) */}
        <motion.div
          className="flex flex-col justify-center items-center text-center"
          initial="hidden"
          whileInView="visible"
          variants={flipIn}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold mb-4">Our Vision
            <span className="block h-1 w-1/2 bg-lightGreen mt-2 mx-auto"></span>
          </h2>
          <p className="text-md">
            To revolutionize finance through innovative AI, delivering intelligent, personalized, and secure financial solutions that delegate global growth and financial accessibility for all.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
