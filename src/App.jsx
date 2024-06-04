import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Preloader from './components/Preloader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  console.log("Loading:", loading);  // Add this line to check the loading state

  return (
    <div className="App">
      <Navbar />
      {loading ? (
        <Preloader />
      ) : (
        <div>
          <Home />
          <About />
          <Projects />
          <Contact />
        </div>
      )}
    </div>
  );
}

export default App;