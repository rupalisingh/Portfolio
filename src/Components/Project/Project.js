import React from "react";
import "../About/About.css";
import { Typography } from "@mui/material";
import rb from "./rb.png";
import drishti from "./drishti.png";
import excelClone from "./excelClone.png"
import "../Project/Project.css";
import { Button } from "@mui/base";

function Project(props) {
  return (
    <>
    <div ref={props.innerRef}>
      <div
        style={{ maxWidth: "100%", marginTop: "1rem", marginBottom: "1rem" }}
        className="projectGlassText"
      >
        <div className="project">
          <div>
            <img src={rb} alt="green iguana" className="imagecss" />
          </div>
          <div style={{ maxWidth: "100%" }} className="projectGlassText">
            <Typography className="projectDescriptionheader">
              Rapid Basket - A MERN Stack application.
            </Typography>
            <Typography className="projectDescription">
              A food delivering responsive application.
              <br />
              Frontend - Reactjs, Redux Toolkit, Material UI.
              <br />
              Backend - Nodejs, Expressjs, MongoDb.
              <br />
            </Typography>
            <Button
              onClick={() => window.open("https://rapidbasket.netlify.app")}
            >
              Visit
            </Button>
          </div>
        </div>
      </div>
      <div className="project">
        <div style={{ maxWidth: "100%", marginLeft : "2.5rem" }} className="projectGlassText">
          <Typography className="projectDescriptionheader">DRISHTI</Typography>
          <Typography style = {{}} className="projectDescription">
            A Smart assistant for navigation and go-to text reading.
            <br />
            Hardware - Raspberry Pi 3 and Raspbian OS, camera.
            <br />
            Software - Microsoft Cognitive Service Tool for image recognition.
            Amazon Alexa Deployed to use AWS services and Google OCR.
            <br />
            Check it out - {`https://rapidbasket.netlify.app`}
          </Typography>
        </div>
        <div>
          <img className="imagecss" alt="laptop" src={drishti}></img>
        </div>
      </div>
      <div style={{ maxWidth: "100%" }} className="projectGlassText">
        <div className="project">
          
          <div>
            <img className="imagecss" alt="laptop" src = {excelClone}></img>
            </div>
          <div className="projectGlassText">
          <Typography className="projectDescriptionheader">
            Excel Clone
          </Typography>
            <Typography className="projectDescription">
              A javascript application.
              <br />
              Functionalities - Open, Save and Delete sheets. CycleDetection Algorithm implemented.
              <br />
              <br />
            </Typography>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Project;
