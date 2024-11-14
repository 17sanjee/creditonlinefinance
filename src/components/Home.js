import React from 'react';

const Home = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen bg-highlightgreen flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/Home_background.png')" }}  // Corrected
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 mb-8">
        
        {/* Left Column: Centered Content */}
        <div className="flex flex-col justify-center items-left text-left md:items-left md:text-left pl-16">
          <h1 className="text-5xl font-bold mb-8">Delegating Financial Success with AI-Powered Innovation</h1>
          <p className="text-lg mb-6">
          Achieve financial success with personalized, AI-driven tools that simplify and delegate money management.

          </p>
          <a 
            href="#about"
            className="bg-lightGreen hover:bg-blue-700 text-white font-semibold py-3 px-9 rounded-lg w-max"
          >
            Explore
          </a>
        </div>
        
        {/* Right Column with Transparent Image */}
        <div className="flex justify-center">
          <img 
            src='/images/Home.png' 
            alt="Transparent" 
            className="w-4/4 h-auto object-contain opacity-80"
          />
        </div>

      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 pb-16">
        
        {/* Card 1 */}
        <div 
          className=" bg-lightGreen bg-cover bg-center rounded-lg shadow-md text-center h-full flex flex-col justify-center items-center p-6"
          style={{ backgroundImage: "url('/images/card_bg.png')" }}
          
        >
          <div className="mb-4">
            <img 
              src="/images/feature1.png"  // Replace with your icon image path
              alt="Icon 1"
              className="w-16 h-16 rounded-full object-cover"
            />
          </div>
          <h3 className="text-xl font-bold mb-2 text-white">AI-Driven Insights</h3>
          <p className="text-gray-200">Harness the power of real-time data with our AI analytics, which delivers actionable insights tailored to your financial situation. Get an edge on market trends and optimize your financial strategies.
          </p>
        </div>

        {/* Card 2 */}
        <div 
          className="bg-lightGreen bg-cover bg-center rounded-lg shadow-md text-center h-full flex flex-col justify-center items-center p-6"
          style={{ backgroundImage: "url('/images/card_bg.png')" }}
        >
          <div className="mb-4">
            <img 
              src="/images/feature2.png"  // Replace with your icon image path
              alt="Icon 2"
              className="w-16 h-16 rounded-full object-cover"
            />
          </div>
          <h3 className="text-xl font-bold mb-2 text-white">Real-Time Monitoring</h3>
          <p className="text-gray-200">Our system provides 24/7 monitoring of transactions, market data, and risk factors. You’ll always have up-to-date information to make informed decisions, from investments to expense tracking.
          </p>
        </div>

        {/* Card 3 */}
        <div 
          className="bg-lightGreen bg-cover bg-center rounded-lg shadow-md text-center h-full flex flex-col justify-center items-center p-6"
          style={{ backgroundImage: "url('/images/card_bg.png')" }}
        >
          <div className="mb-4">
            <img 
              src="/images/feature3.png"  // Replace with your icon image path
              alt="Icon 3"
              className="w-16 h-16 rounded-full object-cover"
            />
          </div>
          <h3 className="text-xl font-bold mb-2 text-white">Predictive Modeling</h3>
          <p className="text-gray-200">Make more brilliant financial moves with predictive modeling that uses historical and real-time data to forecast market trends, helping you stay ahead of potential risks and opportunities.
          </p>
        </div>

        {/* Card 4 */}
        <div 
          className="bg-lightGreen bg-cover bg-center rounded-lg shadow-md text-center h-full flex flex-col justify-center items-center p-6"
          style={{ backgroundImage: "url('/images/card_bg.png')" }}
        >
          <div className="mb-4">
            <img 
              src="/images/feature4.png"  // Replace with your icon image path
              alt="Icon 4"
              className="w-16 h-16 rounded-full object-cover"
            />
          </div>
          <h3 className="text-xl font-bold mb-2 text-white">Customizable Dashboards</h3>
          <p className="text-gray-200">Track your financial performance with intuitive, customizable dashboards. Visualize critical data such as investments, savings, loans, and spending habits in a straightforward, easy-to-use interface.
          </p>
        </div>

      </div>

      
    </section>
  );
};

export default Home;
