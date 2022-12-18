import React, { useRef, useLayoutEffect, useState } from "react";
import CommonCanvas from "../CommonCanvas/CommonCanvas";
import bgImg from "../CommonCanvas/img.jpg";
import styles from "./Drawing.module.css";
import { Button, Grid, Input, MenuItem, Select } from "@mui/material";

const GifCreator = () => {
  const gifRef = useRef();
  const [bgStyle, setBgStyle] = useState("destination-over");
  const [imgURL, setImgURL] = useState("");

  useLayoutEffect(() => {
    if(imgURL){
    const ctx = gifRef?.current?.getContext("2d");
    ctx.rect(0, 0, gifRef?.current?.width, gifRef?.current?.height);
    ctx.fillStyle = "transparent";
    ctx.fill();
    const img = new Image();
    img.src = imgURL;
    //   "https://images.pexels.com/photos/2536587/pexels-photo-2536587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
    // // img.src=bgImg
    img.onload = () => {
      ctx.globalCompositeOperation = `${bgStyle}`;
      ctx.drawImage(img, 0, 0, gifRef?.current?.width, gifRef?.current?.height);
    };
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
  }
  }, [bgStyle, imgURL]);
  console.log(bgStyle, "bgStyle");
  const bgStyleChangeHandler = (e) => {
    setBgStyle(e.target.value);
    // const ctx = gifRef?.current?.getContext("2d");
    // ctx.globalCompositeOperation = `${e.target.value}`;
  };

  const uploadImageHandler = (e) => {
    // const ctx = gifRef?.current?.getContext("2d");
    if (!imgURL) {
      console.log(imgURL, "imgURL");
      const imageReader = new FileReader();
      // const image = new Image();
      // imageReader.onload = () => {
      //   console.log(imageReader.result, "imageReader.result");
      //   image.src = imageReader.result;
      //   image.onload = () => {
      //     ctx.globalCompositeOperation = `${bgStyle}`
      //     ctx.drawImage(image, 0, 0, gifRef?.current?.width, gifRef?.current?.height);
      //   };
      // };
      imageReader.readAsDataURL(e.target.files[0]);
      imageReader.onload = () => setImgURL(imageReader.result);
    }
  };

  const downloadHandler = () => {
    if (imgURL) {
      const imgLink = gifRef?.current?.toDataURL();
      const downloadLink = document.createElement("a");
      downloadLink.setAttribute("href", imgLink);
      downloadLink.setAttribute("download", "img.png");
      downloadLink.click();
      setImgURL("");
      window.location.reload();
    }
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
        marginBottom: "100px",
        // border: "5px solid red",
      }}
    >
      {imgURL ?<CommonCanvas
        // containerClass={styles.gifContainer}
        canvasRef={gifRef}
        width={500}
        height={500}
      />:<h1>Hi,Add an Image !</h1>}
      <Grid container spacing={2}>
        <Grid item xs={12}>
          {!imgURL&&<Input type="file" onChange={uploadImageHandler} />}
        </Grid>
        <Grid item xs={12}>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={bgStyle}
            label="bgStyle"
            style={{}}
            onChange={bgStyleChangeHandler}
          >
            <MenuItem value={"multiply"}>Multiply</MenuItem>
            <MenuItem value={"lighter"}>Lighter</MenuItem>
            <MenuItem value={"destination-over"}>Normal</MenuItem>
            <MenuItem value={"screen"}>Screen</MenuItem>
            <MenuItem value={"darken"}>Darken</MenuItem>
            <MenuItem value={"color-dodge"}>Color-Dodge</MenuItem>
            <MenuItem value={"color-burn"}>Color-Burn</MenuItem>
            <MenuItem value={"hard-light"}>Hard-Light</MenuItem>
            <MenuItem value={"soft-light"}>Soft-Light</MenuItem>
            <MenuItem value={"source-in"}>Source-In</MenuItem>
            <MenuItem value={"difference"}>Difference</MenuItem>
            <MenuItem value={"exclusion"}>Exclusion</MenuItem>
            <MenuItem value={"hue"}>Hue</MenuItem>
            <MenuItem value={"saturation"}>Saturation</MenuItem>
            <MenuItem value={"color"}>Color</MenuItem>
            <MenuItem value={"luminousity"}>Luminousity</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12}>
          <Button
            disabled={!imgURL}
            className={styles.downloadButton}
            onClick={downloadHandler}
          >
            Download
          </Button>
        </Grid>
      </Grid>
      <span>&copy;VMKrishna</span>
    </div>
  );
};

export default GifCreator;
