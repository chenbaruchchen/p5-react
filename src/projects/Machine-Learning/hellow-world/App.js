import React from "react";
import Sketch from "react-p5";

export default (props) => {
  const setup = (p5, canvasParentRef) => {
    // use parent to render the canvas in this ref
    // (without that p5 will render the canvas outside of your component)
    p5.createCanvas(500, 500);
    p5.background(0);
  };

  const draw = (p5) => {
    p5.stroke(255);
  };
  return <Sketch setup={setup} draw={draw} />;
};
