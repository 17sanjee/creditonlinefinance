import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import PricingPlan from './components/PricingPlan';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import Brand from './components/Brand';
import Testimonials from './components/Testimonials';



function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      
      <Services />
      <Brand/>
      <About />
      <Testimonials />
      <PricingPlan />
      <Blogs />
      
      <Contact />
      <Footer />
    </div>
    
  );
}

export default App;
