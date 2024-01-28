// App.js

import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css'; // Import the App.css file
import Home from './Pages/index';
import About from './Pages/about';
import Service from './Pages/Services';
import Portfolio from './Pages/Portfolio';
import Contact from './Pages/contact';


const App = () => 

{
  
  return (
    
    <div className="container"> 
      <Header />
      <Home />      
      <About />
      <Service />
      <Portfolio />
      <Contact/>
      <Footer />
    </div>
  );
};

export default App;
