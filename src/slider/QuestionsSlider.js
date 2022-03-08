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

  return (
    <div className="questions--slider--section">
      {/* header section - router links and routes */}
      {/* transform */}
      {/* header links to components */}
      <div className="questions--slider__personal">
        {/* <Header /> */}
        {/* <h2>Hello</h2> */}
        {/* <Button variant="contained">Personal</Button> */}
        {/* <button className="personal slider--button">Personal</button> */}
        <SliderButton title="Personal"></SliderButton>
        {/* <button>Employment</button>
        <button>Education</button>
        <button>Skills</button> */}
        {/* {showSlider && <Personal />}
        <button
          onClick={() => setShowSearch(!showSearch)}
          className="banner__searchButton"
          variant="outlined"
        >
          {showSearch ? "Personal" : "Search Dates"}
        </button> */}
      </div>
      {/* <div className="questions--slider__education">
        <button className="education slider--button">education</button>
      </div>
      <div className="questions--slider__employment">
        <button className="employment slider--button">employment</button>
      </div>
      <div className="questions--slider__skills">
        <button className="skills slider--button">skills</button>
      </div> */}
    </div>
  );
}

export default QuestionsSlider;
