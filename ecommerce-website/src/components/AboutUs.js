import React from 'react';

const AboutUs = ({ setCurrentView }) => {
  return (
    <div className="page-container">
      <div className="page-header">
        <button className="back-btn" onClick={() => setCurrentView('menu')}>
          ← Back to Menu
        </button>
        <h1 className="page-title">🏡 About Us</h1>
      </div>
      
      <div className="page-content">
        <div className="about-section">
          <div className="about-intro">
            <h2>Welcome to NXew</h2>
            <p>
              <strong>NXew</strong> is a premium e-commerce platform dedicated to bringing you the best products at unbeatable prices.
            </p>
            <p>
              Founded in 2024, we focus on quality, customer satisfaction, and fast delivery. Our team handpicks every product to ensure you get only the best.
            </p>
          </div>

          <div className="about-stats">
            <h3>Our Achievements</h3>
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">10K+</div>
                <div className="stat-label">Happy Customers</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">500+</div>
                <div className="stat-label">Products</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">4.8★</div>
                <div className="stat-label">Customer Rating</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Support</div>
              </div>
            </div>
          </div>

          <div className="about-mission">
            <h3>Our Mission</h3>
            <p>
              To provide customers with high-quality products at competitive prices while delivering exceptional customer service and a seamless shopping experience.
            </p>
          </div>

          <div className="about-values">
            <h3>Our Values</h3>
            <div className="values-list">
              <div className="value-item">
                <span className="value-icon">🎯</span>
                <div className="value-content">
                  <h4>Quality First</h4>
                  <p>We carefully select every product to ensure it meets our high standards.</p>
                </div>
              </div>
              <div className="value-item">
                <span className="value-icon">💝</span>
                <div className="value-content">
                  <h4>Customer Satisfaction</h4>
                  <p>Your happiness is our priority. We go the extra mile to exceed expectations.</p>
                </div>
              </div>
              <div className="value-item">
                <span className="value-icon">🚀</span>
                <div className="value-content">
                  <h4>Fast Delivery</h4>
                  <p>Quick and reliable shipping to get your orders to you as soon as possible.</p>
                </div>
              </div>
              <div className="value-item">
                <span className="value-icon">🔒</span>
                <div className="value-content">
                  <h4>Trust & Security</h4>
                  <p>Your data and payments are protected with industry-leading security.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
