import React, { useState, useEffect } from 'react';
import ContainerHeight from './ContainerHeight';
import MyHeightDiv from "./DivHeightHOC";


const LiveWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(80);
  
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <MyHeightDiv border={'1.5px solid black'} height={`${height}px`}>
      <ContainerHeight setHeight={setHeight} height={height} />
      <span>Width: {width}</span>
    </MyHeightDiv>
  );
};

export default LiveWidth;