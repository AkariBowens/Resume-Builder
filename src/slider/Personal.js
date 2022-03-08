import { Button, TextField } from "@mui/material";
import React from "react";

function Personal() {
  return (
    <div className="personal">
      <form id="personal">
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          label="Name"
        />
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          label="Email"
        />
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          label="Phone Number"
        />
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          label="Website"
        />
        {/* button to submit data to context */}
        {/* when each field is filled, 
      update button from diabled */}
        <Button variant="contained">Submit</Button>
      </form>
    </div>
  );
}

export default Personal;
