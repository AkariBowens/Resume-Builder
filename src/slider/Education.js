import { TextField } from "@mui/material";
import React from "react";
import "./Education.css";

function Education() {
  return (
    <div className="education">
      {/* <form id="education"> */}
      <TextField id="outlined-basic" variant="outlined" label="School Name" />
      <TextField
        id="outlined-basic"
        variant="outlined"
        label="Graduation Date"
      />
      <TextField id="outlined-basic" variant="outlined" label="Position" />
      <TextField id="outlined-basic" variant="outlined" label="Major" />
      <TextField id="outlined-basic" variant="outlined" label="Degree" />
      {/* </form> */}
    </div>
  );
}

export default Education;
