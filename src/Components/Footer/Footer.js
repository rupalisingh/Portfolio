import { Paper, Typography } from "@mui/material";
import React from "react";
import "./Footer.css";
import DevJokes from "../DevJokes/DevJokes";
function Footer() {
  return (
    <>
      <Paper className="PaperFooter">
        <DevJokes />
        <Typography style = {{color : "whitesmoke"}}>©2023 Rupali Portfolio</Typography>
      </Paper>
    </>
  );
}

export default Footer;
