const CommonCanvas = (props) => {
  const { canvasRef, width, height, canvasClass, containerClass } = props;
  return (
    <div className={containerClass}>
      <canvas
        className={canvasClass}
        ref={canvasRef}
        width={width}
        height={height}
      ></canvas>
    </div>
  );
};

export default CommonCanvas;
