import React from "react";
import Personal from "./Personal";
import Employment from "./Employment";
import Education from "./Education";
import Skills from "./Skills";
import { Router, Route, Link, Switch } from "react-router-dom";

function QuestionsSlider() {
  return (
    <div className="questions-slider">
      {/* header section - router links and routes */}

      {/* header links to components */}

      <Router>
        <Route to="/education" component={Link}>
          Education
        </Route>
        <Route to="/employment" component={Link}>
          Employment
        </Route>
        <Route to="/skills" component={Link}>
          Skills
        </Route>
        <Route to="/personal" component={Link}>
          Personal
        </Route>
      </Router>

      <Switch>
        <Route path="/education">
          {" "}
          <Education />{" "}
        </Route>
        <Route path="/employment">
          <Employment />{" "}
        </Route>
        <Route path="/skills">
          {" "}
          <Skills />{" "}
        </Route>
        <Route path="/personal">
          {" "}
          <Personal />{" "}
        </Route>
      </Switch>

      <Personal />
      <Employment />
      <Education />
      <Skills />
    </div>
  );
}

export default QuestionsSlider;
