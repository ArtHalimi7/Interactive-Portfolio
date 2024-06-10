import React, { useEffect, useRef, useState } from 'react';
import * as PIXI from 'pixi.js';
import planet2 from '../assets/ashowcase.png';

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
          backgroundAlpha: 0,
        });
        pixiContainer.current.appendChild(pixiApp.current.view);

        // Create a new loader instance
        const loader = new PIXI.Loader();

        // Load planet image
        loader.add('planet2', planet2);

        // Load image and add it to the stage
        loader.load((loader, resources) => {
          // Create second planet sprite
          const planet2Sprite = new PIXI.Sprite(resources.planet2.texture);
          planet2Sprite.anchor.set(0.5);
          planet2Sprite.x = pixiApp.current.screen.width / 2;
          planet2Sprite.y = pixiApp.current.screen.height / 2;

          // Calculate scaling factor to maintain aspect ratio
          const scaleFactor = Math.min(
            pixiApp.current.screen.width / planet2Sprite.texture.width,
            pixiApp.current.screen.height / planet2Sprite.texture.height
          );
          planet2Sprite.scale.set(scaleFactor);

          pixiApp.current.stage.addChild(planet2Sprite);

          // Add a simple rotation animation to the planet
          pixiApp.current.ticker.add(() => {
            planet2Sprite.rotation += 0.003;
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

  return (
    <section 
      id="about" 
      className="relative flex flex-col items-center justify-center bg-transparent backdrop-blur-md rounded-3xl py-8" 
      style={{ minHeight: '600px', height: '600px' }}
    >
<h2 
  className="text-5xl md:text-7xl lg:text-8xl xl:text-8xl font-bold mb-4 text-[#9ed0e6] text-center" 
  style={{ 
    position: 'absolute', 
    top: '50%', /* Adjusted top position */
    left: '50%', 
    transform: 'translate(-50%, -50%) rotate(-90deg)', /* Rotate the text */
    fontWeight: 'bold', 
    alignItems: 'center', 
    transition: '0.7s', 
    color: '#9ed0e6' 
  }} 
  onMouseOver={(e) => { 
    e.target.style.color = 'transparent'; 
    e.target.style.WebkitTextStroke = '2px white'; 
  }} 
  onMouseOut={(e) => { 
    e.target.style.color = '#9ed0e6'; 
    e.target.style.WebkitTextStroke = 'none'; 
  }}
>
  About Me
</h2>
<p 
  className="text-2xl mt-4 ml-[790px]" 
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
          style={{ zIndex: 10 }} 
        >
        </div>
      )}
    </section>
  );
};

export default About;