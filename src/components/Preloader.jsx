import React from 'react';

function Preloader() {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black z-50">
      <h1 className="text-2xl text-white font-bold">Loading...</h1>
    </div>
  );
}

export default Preloader;