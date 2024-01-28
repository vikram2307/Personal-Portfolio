// Header.js
import React, { useEffect, useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import '../styles/Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
    closeMobileMenu();
  };

  return (
    <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="logo" onClick={scrollToTop}>
        
        <img src="/images/logo.png" alt="Logo" className={scrolled ? 'logo-scrolled' : ''} />
      </div>


      
      <ul className={`nav ${scrolled ? 'nav-scrolled' : ''} ${mobileMenuOpen ? 'nav-mobile-open' : ''}`}>
        <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="nav-selected"
            className={scrolled ? 'nav-scrolled' : ''}
            onClick={closeMobileMenu}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="nav-selected"
            className={scrolled ? 'nav-scrolled' : ''}
            onClick={closeMobileMenu}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="service"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="nav-selected"
            className={scrolled ? 'nav-scrolled' : ''}
          >
            Service
          </Link>
        </li>
        <li>
          <Link
            to="portfolio"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="nav-selected"
            className={scrolled ? 'nav-scrolled' : ''}
          >
            Portfolio
          </Link>
        </li>
          <li>
            <Link
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="nav-selected"
            
            className={scrolled ? 'nav-scrolled' : ''}
          >
            Contact
          </Link>
        </li>
      </ul>

      <div className={`social-icons ${scrolled ? 'social-icons-scrolled' : ''}`}>
      
      <div className="social-icons">
        <a href="https://www.facebook.com/" className="social-icon">
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
          </svg>
        </a>
        <a href="https://twitter.com/Vikramsigh2307" className="social-icon">
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
          </svg>
        </a>
       <a href="https://www.instagram.com/v_i_.c._k_y" className="social-icon">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01"/>
  </svg>
</a>

        <a href="https://www.linkedin.com/in/vikramsingh-bayasthakur-581651240" className='social-icon'>
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
          </svg>
        </a>
      </div>
      </div>

          <div className={`hire-me ${scrolled ? 'hire-me-scrolled' : ''}`}>
      <a href="mailto:vikramthakur2323@gmail.com">
        <button>Hire me</button>
      </a>
    </div>
      <div className="hamburger-menu d-block d-lg-none pl--20 pl_sm--10" onClick={toggleMobileMenu}>
        <span className="menutrigger text-white">
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </span>
      </div>
    </header>
  );
};

export default Header;
