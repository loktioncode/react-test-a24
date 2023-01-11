import React, { useState, useEffect } from 'react';

const WindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div style={{border: '1px solid black'}}>
      <span>Width: {width}</span>
    </div>
  );
};

export default WindowWidth;