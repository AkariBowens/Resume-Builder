import { Button, TextField } from "@mui/material";
import React from "react";
import "./Personal.css";

function Personal() {
  return (
    <div className="personal">
      {/* <form
        id="personal"
        noValidate
        autoComplete="off"
        // onSubmit={handleSubmit(onSubmit)}
      > */}
      <TextField id="outlined-basic" variant="outlined" label="Name" />
      <TextField id="outlined-basic" variant="outlined" label="Email" />
      <TextField id="outlined-basic" variant="outlined" label="Phone Number" />
      <TextField id="outlined-basic" variant="outlined" label="Website" />
      <Button variant="contained">Submit</Button>
      {/* </form> */}
    </div>
  );
}

export default Personal;
