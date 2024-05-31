import React, { useEffect, useRef, useState } from 'react';
import * as PIXI from 'pixi.js';

const About = () => {
  const [showPixi, setShowPixi] = useState(true);
  const pixiContainer = useRef(null);
  const pixiApp = useRef(null);

  useEffect(() => {
    if (showPixi && !pixiApp.current) {
      try {
        // Initialize PixiJS application
        pixiApp.current = new PIXI.Application({
          width: 800,
          height: 600,
          backgroundColor: 0x1099bb,
        });
        pixiContainer.current.appendChild(pixiApp.current.view);

        // Create a new loader instance
        const loader = new PIXI.Loader();

        // Load a sprite and add it to the stage
        loader.add('bunny', 'https://pixijs.io/examples/examples/assets/bunny.png').load((loader, resources) => {
          const bunny = new PIXI.Sprite(resources.bunny.texture);
          bunny.anchor.set(0.5);
          bunny.x = pixiApp.current.screen.width / 2;
          bunny.y = pixiApp.current.screen.height / 2;
          pixiApp.current.stage.addChild(bunny);

          // Add a simple animation
          pixiApp.current.ticker.add(() => {
            bunny.rotation += 0.01;
          });
        });

      } catch (error) {
        console.error("Error initializing PixiJS:", error);
      }

      // Cleanup function to remove PixiJS application
      return () => {
        if (pixiApp.current) {
          pixiApp.current.destroy(true, { children: true });
          pixiApp.current = null;
        }
      };
    }
  }, [showPixi]);

  const togglePixi = () => {
    setShowPixi((prevShowPixi) => !prevShowPixi);
    if (pixiApp.current) {
      pixiApp.current.destroy(true, { children: true });
      pixiApp.current = null;
    }
  };

  return (
    <section id="about" className="min-h-screen flex flex-col items-center justify-center bg-transparent backdrop-blur-md	rounded-3xl py-8 relative">
      {/* Add a relative positioning to the container */}
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="mb-4">This is a description about me.</p>
      {showPixi && (
        <div
          ref={pixiContainer}
          className="w-full h-full absolute top-0 left-0"
          style={{ zIndex: 10 }} // Set a higher z-index
        >
          {/* PixiJS canvas will be appended here */}
        </div>
      )}
      <button onClick={togglePixi} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
        Toggle Pixi.js Rendering
      </button>
    </section>
  );
};

export default About;