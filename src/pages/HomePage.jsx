import React from 'react';
import '../styles/HomePage.css';
import heroImage from '../assets/hero-bg.jpg';
import Banner from '../assets/HomeBanner.jpg'
import SchoolBanner from '../assets/SchoolMedia/ai2group2.jpg'
import AdmissionSection from '../components/AdmissionSteps.jsx'; // Adjust the import path as necessary

export default function HomePage() {
  return (
    <div className="homepage">
      <section>
      <img src={SchoolBanner} alt="Hero" className="homepage__hero-image" />
     </section>
      <section className="homepage__intro">
       <div className="intro__left">
         <p>Discover Your <br />
          Education Potential</p>
       </div>
       <div className="intro__right">
        <p>Welcome to BrightBlend Academy where every student shines bright and achieves their dreams. 
          Our school provides a dynamic environment that empowers students to new heights.</p>
         <a href="/admission" className="btn btn--primary">Learn More</a>
       </div>
     </section>
     
     <section className="homepage__intro">
       <div className="intro__left">
         <p>Unleash the students possibilities with us</p>
       </div>
       <div className="intro__right">
        <p>Welcome to BrightBlend Academy where every student shines bright and achieves their dreams. 
          Our school provides a dynamic environment that empowers students to new heights.</p>
       </div>
     </section>
     <AdmissionSection />
      <section className="homepage__about">
        <h2 className="about__heading">Unleash students possibilities with us</h2>
      </section>

      {/* Feature Highlights */}
      <section className="homepage__features">
        <div className="feature">
          <div className="feature-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
              <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
              <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
            </svg>
          </div>
          <h3>Academic Excellence</h3>
          <p>
            Our rigorous curriculum ensures students are well-prepared for college and beyond.
          </p>
        </div>
        <div className="feature">
          <div className="feature-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
              <path d="M20 17a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H9.46c.35.61.54 1.3.54 2h10v11h-9v2h9zM15 7v2H9v13H7v-6H5v6H3v-8.5h8V7h4z" />
            </svg>
          </div>
          <h3>Experienced Faculty</h3>
          <p>
            Our dedicated teachers are passionate about education and student success.
          </p>
        </div>
        <div className="feature">
          <div className="feature-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z" />
            </svg>
          </div>
          <h3>Supportive Community</h3>
          <p>
            We foster a sense of community and belonging for all students on board.
          </p>
        </div>
      </section>
    </div>
  );
}