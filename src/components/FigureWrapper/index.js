import React from "react";
import "./style.css";

function FigureWrapper(props) {
  return (
    <div className="figure">{props.children}
    </div>
  );
}

export default FigureWrapper;