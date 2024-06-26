import { BrowserRouter } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Preloader from './components/Preloader';
import Footer from "./components/Footer";
import Experience from "./components/Experience";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  console.log("Loading:", loading); 

  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      {loading ? (
        <Preloader />
      ) : (
        <div>
          <Home />
          <About />
          <Projects />
          <Experience/>
          <Contact />
          <Footer/>
        </div>
      )}
    </div>
    </BrowserRouter>
  );
}

export default App;