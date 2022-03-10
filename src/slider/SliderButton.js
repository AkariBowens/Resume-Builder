import { Button } from "@mui/material";
import React from "react";
import "./SliderButton.css";

function SliderButton({ title }) {
  return (
    <div className="sliderButton">
      <div className="sliderTitle">
        {/* <Button> */}
        <p>{title}</p>
        {/* </Button> */}
      </div>
    </div>
  );
}

export default SliderButton;
