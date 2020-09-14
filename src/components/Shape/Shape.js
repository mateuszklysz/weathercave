import React from "react";
import { Shape } from "./Shape.styles";

const Shapes = ({ width, height, top, bottom, left, right, opacity, blue }) => {
  return (
    <Shape
      width={width}
      height={height}
      top={top}
      bottom={bottom}
      left={left}
      right={right}
      opacity={opacity}
      blue={blue}
    />
  );
};

export default Shapes;
