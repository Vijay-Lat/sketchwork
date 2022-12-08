import React, { useRef, useLayoutEffect } from "react";

const Square = () => {
  const squareRef = useRef();
  const thickness = 40;
  const x = 0;
  const y = 0;
  const w = 400;
  const h = 400;

  useLayoutEffect(() => {
    const context = squareRef?.current?.getContext("2d");
    context.beginPath();
    context.rect(x, y, w, h);
    // context.lineWidth = thickness;
    // context.strokeStyle='blue'
    context.fillStyle='blue'
    // context.stroke()
    context.fill()

    context.beginPath()
    context.rect(40,40,320,320)
    context.fillStyle='white'
    context.fill()

  }, []);
  return <canvas ref={squareRef}></canvas>;
};

export default Square;
