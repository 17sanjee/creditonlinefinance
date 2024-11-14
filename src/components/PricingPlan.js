import React from 'react';
import './PricingPlan.css'; // Custom styles

const pricingPlans = [
  {
    id: 1,
    backgroundImage: '/images/headbg.png', // Replace with actual image paths
    title: 'Basic Plan',
    price: '$49/month',
    features: [
      'AI-Powered Financial Insights',
      'Automated Payment Processing',
      'Real-Time Transaction Monitoring',
      'Personalized Customer Support',
      'Access to Financial Dashboards',
      'User-Friendly Reporting Tools',
    ],
  },
  {
    id: 2,
    backgroundImage: '/images/headbg.png',
    title: 'Professional Plan',
    price: '$99/month',
    features: [
      'Advanced Predictive Analytics',
      'AI-Driven Risk Management',
      'Automated Loan Approval',
      'Customizable Financial Reports',
      'Scalable Team Growth Solutions',
    ],
  },
  {
    id: 3,
    backgroundImage: '/images/headbg.png',
    title: 'Enterprise Plan',
    price: '$199/month',
    features: [
      'API Integration for Custom Systems',
      'Unlimited Users and Transactions',
      'Dedicated Account Manager',
      'Real-Time Investment Insights',
      'Scalable AI for Global Reach',
    ],
  },
];

const PricingPlan = () => {
  return (
    <section
      id="pricing"
      className="pricing-section min-h-screen "
      style={{
        backgroundImage: 'url("/images/background_pricingplan.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '60px 0',
      }}
    >
      {/* Section Title */}
      <h2 className="text-center text-3xl font-bold mb-6">Our Pricing Plans</h2>
      
      {/* Section Description */}
      <p className="text-center text-lg mb-20">
       Flexible AI-driven pricing plans to streamline and grow your finances.
      </p>
      
      {/* Pricing Cards */}
      <div className="pricing-cards-container">
  {pricingPlans.map((plan, index) => (
    <div
      key={plan.id}
      className={`pricing-card ${index === 1 ? 'middle-card' : ''}`} // Add 'middle-card' class to the second card
      style={{
       
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Plan Title with Background Box */}
      <div className="plan-title">
        {plan.title}
      </div>
      
      {/* Plan Price */}
      <div className="plan-price">
        {plan.price}
      </div>
      
      {/* Plan Features */}
      <ul className="plan-features">
        {plan.features.map((feature, index) => (
          <li key={index} className="feature-item">
            <span className="feature-icon ">✔️</span> {feature}
          </li>
        ))}
      </ul>
      
      {/* Buy Now Button */}
      <button className="buy-now-btn"><a href="https://app.creditonlinefinance.com/user/login" className="buy-now-btn" target="_blank" rel="noopener noreferrer">
  Buy Now
</a></button>
    </div>
  ))}
</div>
    </section>
  );
};

export default PricingPlan;
