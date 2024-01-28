// pages/index.js
import React, { useState, useEffect } from 'react';
import '../styles/Home.css';

const Home = () => {
  const [jobTitle, setJobTitle] = useState('Java Developer');

  useEffect(() => {
    const changeJobTitleAutomatically = () => {
      const jobTitles = ['Backend Developer.', 'UI/UX Designer.', 'Full-Stack Developer.'];
      let currentIndex = 0;

      const intervalId = setInterval(() => {
        setJobTitle(jobTitles[currentIndex]);
        currentIndex = (currentIndex + 1) % jobTitles.length;
      }, 3000);

      // Clear the interval when the component is unmounted
      return () => clearInterval(intervalId);
    };

    changeJobTitleAutomatically();

  }, []);

  return (
    <section id="home">
      <div className="index-row">
        <div className='col-sm-12'>
          <div className="">
            <div className="text-container">
              <h1>WELCOME TO MY WORLD</h1>
              <p>I’m Vikramsingh Bayasthakur</p>
              <p className="fontcolour">{jobTitle}</p>
              <p>Based in India.</p>
              <button className="download-btn">
                <a href="../pdf/Vikramsingh_Bayasthakur_cv.pdf" target="_blank" rel="noopener noreferrer" download>
                  Download CV
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
