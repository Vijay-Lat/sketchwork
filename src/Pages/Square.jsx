import React, { useRef, useLayoutEffect } from "react";

const Square = () => {
  const squareRef = useRef();
  
// commenting it for reference 
  // useLayoutEffect(() => {
  //   const context = squareRef?.current?.getContext("2d");
  //   context.beginPath();
  //   context.rect(x, y, w, h);
  //   context.fillStyle='blue'
  //   context.fill()
  //   context.beginPath()
  //   context.rect(40,40,320,320)
  //   context.fillStyle='white'
  //   context.fill()
  //   context.beginPath();
  //   context.rect(80, 80, 280, 280);
  //   context.fillStyle='blue'
  //   context.fill()
  //   context.beginPath()
  //   context.rect(100,100,240,240)
  //   context.fillStyle='white'
  //   context.fill()
  //   context.beginPath();
  //   context.rect(140, 140, 200, 200);
  //   context.fillStyle='blue'
  //   context.fill()
  //   context.beginPath()
  //   context.rect(180,180,160,160)
  //   context.fillStyle='white'
  //   context.fill()
  //   context.beginPath();
  //   context.rect(220, 220, 120, 120);
  //   context.fillStyle='blue'
  //   context.fill()
  //   context.rect(260,260,80,80)
  //   context.fillStyle='white'
  //   context.fill()
  //   context.rect(300, 300, 40, 40);
  //   context.fillStyle='blue'
  //   context.fill()
  //   context.rect(340,340,0,0)
  //   context.fillStyle='white'
  //   context.fill()

  // }, []);
useLayoutEffect(() => {
  const thickness = 20;
  let x = 0;
  let y = 0;
  let w = 400;
  let h = 400;
  const ctx = squareRef?.current?.getContext("2d");
  let i=1
while (i <= 10) {
  console.log(x,y,w,h,"sizes")
  console.log(w-(2*thickness))
  ctx.beginPath();
  ctx.rect(x, y, w, h);
  ctx.fillStyle = i%2===0?"white":"blue";
  ctx.fill();
  // if(x>=0 && y>=0&& w>=0 && h>=0){
  x=x+thickness
  y=y+thickness
  w=w-(2*thickness)
  h=h-(2*thickness)
  // }
  // ctx.beginPath();
  // ctx.rect(x, y, w, h);
  // ctx.fillStyle = "white";
  // ctx.fill();
  i += 1;
}

}, [])

  return <canvas width={400} height={400} ref={squareRef}></canvas>;
};

export default Square;
