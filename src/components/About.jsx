import React from 'react';
import { Stage, Sprite, useTick } from '@inlet/react-pixi';

function About() {
  let rotation = 0;
  useTick(delta => {
    rotation += 0.1 * delta;
  });

  return (
    <section id="about" className="min-h-screen flex flex-col items-center justify-center bg-white py-8">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="mb-4">This is a description about me.</p>
      <Stage width={300} height={300} options={{ backgroundColor: 0xeef1f5 }}>
        <Sprite
          image="path/to/your/image.jpg"
          anchor={0.5}
          x={150}
          y={150}
          rotation={rotation}
        />
      </Stage>
    </section>
  );
}

export default About;