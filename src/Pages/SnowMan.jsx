import React, { useRef, useLayoutEffect } from "react";
import styles from "./Drawing.module.css";

const SnowMan = () => {
  const snowManRef = useRef();
  useLayoutEffect(() => {
    const ctx = snowManRef?.current?.getContext("2d");
    ctx.fillStyle="#22E7F9"
    ctx.rect(0,0,snowManRef?.current?.width,snowManRef?.current?.height)
    ctx.fill()
    ctx.beginPath();
    ctx.arc(250, 400, 80, 0, 2 * Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.beginPath();
    ctx.arc(250, 300, 60, 0, 2 * Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.beginPath();
    ctx.arc(250, 200, 40, 0, 2 * Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.beginPath();
    ctx.arc(230, 180, 5, 0, 2 * Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.beginPath();
    ctx.arc(270, 180, 5, 0, 2 * Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.beginPath();
    ctx.arc(250, 200, 3, 0, 2 * Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.beginPath();
    ctx.arc(250, 210, 12.5, 0,  Math.PI);
    ctx.lineStyle = "red";
    ctx.stroke();
    ctx.beginPath();
    ctx.rect(200,150,100,20);
    ctx.fill();
    ctx.beginPath();
    ctx.rect(220,100,60,60);
    ctx.fill();

  }, []);
  return (
    <div className={styles.snowManContainer}>
      <canvas ref={snowManRef} width={500} height={500}></canvas>
      <button onClick={()=>window.print()}>Print</button>
    </div>
  );
};

export default SnowMan;
