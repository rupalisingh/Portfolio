import React from "react";
import "../About/About.css";
import { Grid, Typography } from "@mui/material";
import DevicesIcon from "@mui/icons-material/Devices";
import reactIcon from "./reactIcon.png";
import nodejsIcon from "./nodejsIcon.jpg";
import AiIcon from "./AIIcon.png";
import "./Skills.css";

function Skills(props) {
  return (
    <>
      <div ref={props.innerRef} style={{ padding: "3rem" }}>
        <div style={{ maxWidth: "100%" }} className="aboutGlassText">
          <Grid container>
            <Grid item xs={12} sm={6}>
              <div className="Skilldiv">
                <div className="header">
                <DevicesIcon style={{ width: "69px", height: "88px",     marginLeft: "14px" }} />
                <Typography className="skillheader">Software Development</Typography>
                </div>
                <Typography>
                    Skilled OOPS concepts and programming Languages - Javascript,
                    Typescript,Java and Python.
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className="Skilldiv">
              <div className="header">
                <img alt = "icon" style={{ width: "82px" }} src={reactIcon} />
                <Typography className="skillheader">Frontend Development</Typography>
                </div>

                <Typography>
                    Experience in  Reactjs frameworks, 
                    state Management tools like - Redux toolkit, Redux saga, 
                    and Material UI.
                </Typography>

              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className="Skilldiv">
              <div className="header">
                <img alt = "icon" style={{ width: "60px", marginLeft : "10px" }} src={nodejsIcon} />
                <Typography className="skillheader">Backend Development</Typography>
                </div>
                <Typography style = {{marginTop : "1.2rem"}}>Over 3 years of Experience in Nodejs, Expressjs framework and Databases like MongoDb.</Typography>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className="Skilldiv">
              <div className="header">
                <img alt = "icon" style={{ width: "84px" }} src={AiIcon} />
                <Typography className="skillheader">Machine Learning</Typography>
                </div>
                <Typography style = {{marginTop : "0.75rem"}}>Skilled in Predicitve Modeling and Data Mining, implemented statistical Machine Learning Models.</Typography>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}

export default Skills;
