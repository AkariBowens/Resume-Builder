import React from "react";
import { TextField } from "@mui/material";

function Employment() {
  return (
    <div className="employment">
      <form id="employment">
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          label="Company"
        />
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          label="Position"
        />
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          label="Start Date MM/YY"
        />
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          label="End Date MM/YY"
        />
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          label="Job Description"
        />
      </form>
    </div>
  );
}

export default Employment;
