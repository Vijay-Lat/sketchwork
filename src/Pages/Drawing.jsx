import React, { useRef, useLayoutEffect } from "react";
import classes from './Drawing.module.css'

const Drawing = () => {
  const canvasRef = useRef();
  useLayoutEffect(() => {
    const ctx = canvasRef?.current?.getContext('2d')
    ctx.beginPath()
    ctx.moveTo(100,100)
    ctx.lineTo(100,350)
    ctx.lineTo(350,350)
    ctx.lineTo(350,100)
    ctx.lineTo(100,100)
    ctx.strokeStyle='blue'
    ctx.stroke()
    //  drawing a circle 
    ctx.beginPath()
    ctx.arc(200,200,175,0,2*Math.PI)
    ctx.strokeStyle='green'
    ctx.stroke()

  // drawing a rectangle 
ctx.beginPath()
ctx.rect(150,150,90,30)
ctx.lineWidth="10"
ctx.strokeStyle='red'
ctx.fillStyle='white'
ctx.fill()
ctx.stroke()


  }, []);
  return (
    <div>
      <canvas className={classes.canvas} width={500} height={500} ref={canvasRef}></canvas>
    </div>
  );
};

export default Drawing;
