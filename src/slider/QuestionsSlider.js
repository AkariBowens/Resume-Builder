import React from "react";
import Personal from "./Personal";
import Employment from "./Employment";
import Education from "./Education";
import Skills from "./Skills";
import { Router, Route, Link, Switch } from "react-router-dom";
import { Button } from "@mui/material";
import "./QuestionsSlider.css";
import SliderButton from "./SliderButton";
import { useState } from "react";
// import Personal from "./Personal";

function QuestionsSlider() {
  const [showSlider, setShowSlider] = useState(true);
  // const [showEducation, setShowEducation] = useState(true);

  return (
    <div className="questions--slider--section">
      {/* header section - router links and routes */}
      {/* transform */}
      {/* header links to components */}
      <div className="questions--slider__personal">
        {/* <Personal /> */}
        {showSlider && <Personal />}
        {/* <SliderButton
          title="Personal"
          onClick={() => setShowSlider(!showSlider)}
        > */}
        <Button
          className="sliderButton"
          onClick={() => setShowSlider(!showSlider)}
        >
          Personal
        </Button>
        {/* </SliderButton> */}
        {/* <button>Employment</button>
        <button>Education</button>
        <button>Skills</button> */}
        {/* {showSlider && <Personal />}
        <button
          onClick={() => setShowSlider(--buttonpressed)}
          className="banner__searchButton"
          variant="outlined"
        >
          {showSearch ? "Personal" : "Search Dates"}
        </button> */}
      </div>
      {/* <div className="questions--slider__education"> */}
      {/* {showSlider && <Education />} */}
      {/* <SliderButton
          title={"Education"}
          onClick={() => setShowEducation(!showEducation)}
        ></SliderButton> */}
      {/* </div> */}
      {/*<div className="questions--slider__employment">
        <button className="employment slider--button">employment</button>
      </div>
      <div className="questions--slider__skills">
        <button className="skills slider--button">skills</button>
      </div> */}
    </div>
  );
}

export default QuestionsSlider;
