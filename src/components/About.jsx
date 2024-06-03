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
    <section 
      id="about" 
      className="relative flex flex-col items-center justify-center bg-transparent backdrop-blur-md rounded-3xl py-8" 
      style={{ minHeight: '600px', height: '600px' }}
    >
      <h2 
        className="text-5xl md:text-7xl lg:text-8xl xl:text-8xl font-bold mb-4 text-[#9ed0e6] text-center" 
        style={{ position: 'absolute', top: '10%', left: '55%', transform: 'translate(-50%, -50%)', 
        fontWeight: 'bold', alignItems: 'center', transition: '0.7s', color: '#9ed0e6' }} 
        onMouseOver={(e) => 
        { e.target.style.color = 'transparent'; e.target.style.WebkitTextStroke = '2px white'; }} 
        onMouseOut={(e) => 
        { e.target.style.color = '#9ed0e6'; e.target.style.WebkitTextStroke = 'none'; }}
      >
        About Me
      </h2>
      <p 
        className="text-2xl mt-24 ml-[230px]" 
        style={{ width: '500px', color: '#ffffff', fontWeight: 'bold' }}
      >
        I'm Art, <br />
        a passionate React developer currently working at Starlabs based on Prishtina. <br /> <br />
        I'm also pursuing my degree in Computer Science and Engineering at UBT. <br /> <br />
        I enjoy creating interactive web applications and constantly strive to enhance my skills and knowledge in the field.

      </p>
      {showPixi && (
        <div
          ref={pixiContainer}
          className="absolute top-0 left-0 w-full h-full"
          style={{ zIndex: 10 }} // Set a higher z-index
        >
          {/* PixiJS canvas will be appended here */}
        </div>
      )}
    </section>
  );
};

export default About;