import React, { useRef, useLayoutEffect } from "react";
import CommonCanvas from "../CommonCanvas/CommonCanvas";
import bgImg from '../CommonCanvas/img.jpg'
import styles from './Drawing.module.css'

const GifCreator = () => {
  const gifRef = useRef();


  useLayoutEffect(() => {
    const ctx = gifRef?.current?.getContext('2d')
    ctx.rect(0,0,gifRef?.current?.width,gifRef?.current?.height)
    ctx.fillStyle='transparent'
    ctx.fill()
    const img = new Image()
    img.src='https://images.pexels.com/photos/728462/pexels-photo-728462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    // img.src=bgImg
    img.onload=()=>{  ctx.globalCompositeOperation='destination-over';ctx.drawImage(img,250,0,300,600)}
    // ctx.textAlign='center'
    // ctx.beginPath()
    // ctx.arc(600,100,50,0,2*Math.PI)
    // ctx.fillStyle='red'
    // ctx.fill()
    // ctx.beginPath()
    // ctx.textBaseline='top'
    // ctx.fillStyle='blue'
    // ctx.font='30px arial'
    // ctx.textAlign='center'
    // ctx.fillText('Kaali',550,100)
  }, []);

  return (
    <div>
      <CommonCanvas containerClass={styles.gifContainer} canvasRef={gifRef} width={500} height={500} />
    </div>
  );
};

export default GifCreator;
