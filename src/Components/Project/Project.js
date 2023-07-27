import React from "react";
import "../About/About.css";
import { Typography, Button } from "@mui/material";
import rb from "./rb.png";
import drishti from "./drishti.png";
import excelClone from "./excelClone.png";
import "../Project/Project.css";
import { scrollTrigger } from "../scrollTrigger";


function Project(props) {
  scrollTrigger('.projectdiv')

  return (
    <>
      <div ref={props.innerRef} className="projectdiv">
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
              <div style = {{display: "flex", justifyContent: "center", padding : "1rem"}}>
                <Button
                  className="linkClick"
                  variant="outlined"
                  onClick={() => window.open("https://rapidbasket.netlify.app")}
                >
                  Visit
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="projectReverse">
          <div
            style={{ maxWidth: "100%", marginLeft: "2.5rem" }}
            className="projectGlassText"
          >
            <Typography className="projectDescriptionheader">
              DRISHTI
            </Typography>
            <Typography style={{}} className="projectDescription">
              A Smart assistant for navigation and go-to text reading.
              <br />
              Hardware - Raspberry Pi 3 and Raspbian OS, camera.
              <br />
              Software - Microsoft Cognitive Service Tool for image recognition.
              Amazon Alexa Deployed to use AWS services and Google OCR.
              <br />
            </Typography>
            <div style = {{display: "flex", justifyContent: "center", padding : "1rem"}}>
                <Button
                  className="linkClick"
                  variant="outlined"
                  onClick={() => window.open("https://github.com/rupalisingh/Drishti---For-Blind")}
                >
                  Github
                </Button>
              </div>
          </div>
          <div>
            <img className="imagecss" alt="laptop" src={drishti}></img>
          </div>
        </div>
        <div style={{ maxWidth: "100%" }} className="projectGlassText">
          <div className="project">
            <div>
              <img className="imagecss" alt="laptop" src={excelClone}></img>
            </div>
            <div className="projectGlassText">
              <Typography className="projectDescriptionheader">
                Excel Clone
              </Typography>
              <Typography className="projectDescription">
                A javascript application.
                <br />
                Functionalities - Open, Save and Delete sheets.
                <br />
                CycleDetection Algorithm implemented.
              </Typography>
              <div style = {{display: "flex", justifyContent: "center", padding : "1rem"}}>
                <Button
                  className="linkClick"
                  variant="outlined"
                  onClick={() => window.open("https://github.com/rupalisingh/excel-clone")}
                >
                  Github
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
