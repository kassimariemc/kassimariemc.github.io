import React from "react";
import "./style.css";
import Background from '../../images/background.jpg';

function FigureWrapper() {
  return (
    <div className="figure" style={ { backgroundImage:`url(${Background})` }}>
    </div>
  );
}

export default FigureWrapper;