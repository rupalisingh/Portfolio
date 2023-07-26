import React from "react";
import { Typography } from "@mui/material";
import "./About.css";
import imageGirl from "./girlImage.png";
function About(props) {
  return (
    <>
      <div className = "aboutDiv" ref={props.innerRef}>
        <Typography className="fullName">
          Rupali Singh
          <br />
          Full Stack Developer
        </Typography>

        <div className="introDiv">
          <div className="aboutGlassText">
            <Typography className="cardText">
              Hey There!!
              <br />I am a moderately Passionated Software Engineer, currently
              pursuing my Masters in CS(AI) from Trinity College Dublin.
            </Typography>
            <Typography className="cardText">
              Want to hire me? or Collaborate with me? Checkout my linkedIn
              page!
            </Typography>
          </div>
          <img  className = "responsiveImg" alt = "girl" src={imageGirl}></img>
        </div>
      </div>
    </>
  );
}

export default About;
