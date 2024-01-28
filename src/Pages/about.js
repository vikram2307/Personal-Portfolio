// About.js
import React, { useState } from 'react';
import '../styles/About.css';
import { skillsData, certificationsData,experiencesData,educationData } from '../components/data';


const ITEMS_PER_PAGE = 4;

const About = () => {
  const [activeTab, setActiveTab] = useState('mainSkills');
  const [currentPage, setCurrentPage] = useState(1);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setCurrentPage(1); // Reset page when switching tabs
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(1, prevPage - 1));
  };

  const renderContent = () => {
    const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIdx = startIdx + ITEMS_PER_PAGE;

    switch (activeTab) {
      case 'mainSkills':
        return (
          <div className="tab-content">
            {skillsData.slice(startIdx, endIdx).map((skill) => (
              <div key={skill.skill} className="skill-item">
               <div className="paragraph">
                <p >{skill.skill} </p>
                <p >{skill.percentage}%</p>
                </div>
                <div className="progress-bar">
                  <div className="progress" style={{ width: `${skill.percentage}%` }}>{skill.percentage}%</div>
                </div>
              </div>
            ))}
            <div className="page-navigation">
              <button onClick={handlePrevPage} disabled={currentPage === 1}>{'<'}</button>
              <button onClick={handleNextPage} disabled={endIdx >= skillsData.length}>{'>'}</button>
            </div>
          </div>

        );
      case 'Certifications':
        return (
          <div className="tab-content">
            {/* Content for the "Certifications" section */}
            {/* Render certifications based on the currentPage */}
            {certificationsData.slice(startIdx, endIdx).map((certification, index) => (
              <div key={index}>
                <h5>{certification.title}</h5>
                <a href={certification.link} target="_blank" rel="noopener noreferrer">
                {certification.link}
              </a>
              <p></p>
              </div>
            ))}
            <div className="page-navigation">
              <button onClick={handlePrevPage} disabled={currentPage === 1}>{'<'}</button>
              <button onClick={handleNextPage} disabled={endIdx >= certificationsData.length}>{'>'}</button>
            </div>
          </div>
        );
      case 'Experience':
        return (
          <div className="tab-content">
            {/* Content for the "Experience" section */}
            {/* Render experiences based on the currentPage */}
            {experiencesData.slice(startIdx, endIdx).map((experience, index) => (
              <div key={index}>
                <h5>{experience.title}</h5>
                <p>{experience.date}</p>
              </div>
            ))}
            <div className="page-navigation">
              <button onClick={handlePrevPage} disabled={currentPage === 1}>{'<'}</button>
              <button onClick={handleNextPage} disabled={endIdx >= experiencesData.length}>{'>'}</button>
            </div>
          </div>
        );
      case 'Education':
        return (
          <div className="tab-content">
            {/* Content for the "Education" section */}
            {/* Render education details based on the currentPage */}
            {educationData.slice(startIdx, endIdx).map((education, index) => (
              <div key={index}>
                <h5>{education.title}</h5>
                <p></p>
                <small>{education.date}</small>
              </div>
            ))}
            <div className="page-navigation">
              <button onClick={handlePrevPage} disabled={currentPage === 1}>{'<'}</button>
              <button onClick={handleNextPage} disabled={endIdx >= educationData.length}>{'>'}</button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="about">
    <div className='about-Wrapper'>
      <div className="about-container">
      
       <div className="row row--43">
       
          <div className="col-lg-5">
            <div className='thumbnail1'>
            <img src="../images/vicky3.JPG" alt="Profile" className="img-fluid" />
        </div>
        </div>

        {/* Text column */}
        <div className="col-lg-7 ">
          <div className='about-inner inner'></div>
         <div className="section-tittle">
          <p className="rainbow-text">My About Details</p>
          <h2>About Me</h2>
          <p>
          Dynamic Java Developer with Advanced Java and MySQL expertise, backed by 6-month internship experience at Cravita Technologies and Skilled Software Developer Creating Robust and Efficient Code
            </p>
            
          <div className=' mt--40'>
          <div className='tabs-area'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-12'>

          <div className='react-tabs' data-rttabs="true">    
          <ul className="tab-style--1">
          <li
              className={`react-tabs__tab ${activeTab === 'mainSkills' ? 'react-tabs__tab--selected' : ''}`}
              onClick={() => handleTabClick('mainSkills')}
            >
              Main Skills
            </li>
            <li
              className={`react-tabs__tab ${activeTab === 'Certifications' ? 'react-tabs__tab--selected' : ''}`}
              onClick={() => handleTabClick('Certifications')}
            >
              Certifications
            </li>
            <li
              className={`react-tabs__tab ${activeTab === 'Experience' ? 'react-tabs__tab--selected' : ''}`}
              onClick={() => handleTabClick('Experience')}
            >
              Experience
            </li>
            <li
              className={`react-tabs__tab ${activeTab === 'Education' ? 'react-tabs__tab--selected' : ''}`}
              onClick={() => handleTabClick('Education')}
            >
              Education
            </li>
            
          
          </ul>
          
          {renderContent()}
          </div>
          </div>
              </div>
            </div>
          </div>
          
          </div>
          </div>
        </div>
      </div>
      </div>

    </div>
  </section>
  );
};

export default About;
