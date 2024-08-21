import React, { useEffect, useRef } from 'react';
import * as PIXI from 'pixi.js';

const ViewMoreButton = ({ expanded, onClick, text }) => {
  const pixiContainer = useRef(null);
  const app = useRef(null);

  useEffect(() => {
    // Create PixiJS application with smaller width and height
    app.current = new PIXI.Application({ width: 120, height: 40, backgroundColor: 0x1099bb });
    pixiContainer.current.appendChild(app.current.view);

    // Create a smaller button using PixiJS
    const button = new PIXI.Graphics();
    button.beginFill(0x9ed0e6);
    button.drawRect(0, 0, 120, 40); // Reduced width and height
    button.endFill();
    button.interactive = true;
    button.buttonMode = true;
    button.on('pointerdown', onClick);

    // Create a smaller button text
    const buttonText = new PIXI.Text(expanded ? 'View Less' : 'View More', { fontSize: 18, fill: 0x000000, align: 'center' });
    buttonText.x = 60 - buttonText.width / 2; // Adjusted for smaller button
    buttonText.y = 20 - buttonText.height / 2;

    button.addChild(buttonText);
    app.current.stage.addChild(button);

    return () => {
      app.current.destroy(true, true);
    };
  }, [expanded, onClick]);

  return (
    <div className="text-center mt-4">
      <div ref={pixiContainer} />
      {expanded && (
        <div className="mt-4 p-4 backdrop-blur-xl rounded">
          <p className="text-white">{text}</p>
        </div>
      )}
    </div>
  );
};

export default ViewMoreButton;