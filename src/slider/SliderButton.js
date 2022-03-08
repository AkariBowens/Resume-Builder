import React from "react";
import "./SliderButton.css";

function SliderButton({ title }) {
  return (
    <div className="sliderButton">
      <div className="sliderTitle">
        <p>{title}</p>
      </div>
    </div>
  );
}

export default SliderButton;
