import React from 'react';

const About = () => {
  const [showPixi, setShowPixi] = React.useState(true);

  // Toggle the Pixi.js rendering
  const togglePixi = () => {
    setShowPixi(!showPixi);
  };

  return (
    <section id="about" className="min-h-screen flex flex-col items-center justify-center bg-white py-8">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="mb-4">This is a description about me.</p>
      {/* Render Pixi.js only if showPixi state is true */}
      {showPixi && (
        <div>
          <p>Pixi.js rendering goes here...</p>
          {/* Add any Pixi.js components or functionality here */}
        </div>
      )}
      <button onClick={togglePixi}>Toggle Pixi.js Rendering</button>
    </section>
  );
};

export default About;