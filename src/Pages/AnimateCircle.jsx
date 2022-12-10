import React, { createRef, useRef, useLayoutEffect } from "react";
import CommonCanvas from "../CommonCanvas/CommonCanvas";
import classes from './Drawing.module.css'

const AnimateCircle = () => {
  const circleRef = useRef();
  const val = createRef();
  useLayoutEffect(() => {
    const currentCanvas =circleRef?.current
    const ctx = currentCanvas?.getContext('2d')
    ctx.rect(0,0,currentCanvas?.width,currentCanvas?.height)
    ctx.strokeStyle='red'
    ctx.stroke()
    let x = 25
    let y = 250
    let r =25
    function animate(){
    console.log("animate",x)
    ctx.clearRect(0,0,currentCanvas?.width,currentCanvas?.height)
    ctx.rect(0,0,currentCanvas?.width,currentCanvas?.height)
    ctx.strokeStyle='red'
    ctx.stroke()
    if(x>475) x = 25
    ctx.beginPath()
    ctx.arc(x,y,r,0,2*Math.PI)
    ctx.strokeStyle='blue'
    ctx.stroke()
    x=x+5
    requestAnimationFrame(animate)
    }
    animate()
  }, []);

  return (
    <div>
      <CommonCanvas containerClass={classes.circleContainer} canvasRef={circleRef} width={500} height={500} />
    </div>
  );
};

export default AnimateCircle;
