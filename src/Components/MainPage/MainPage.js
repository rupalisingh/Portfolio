import React, { useRef } from "react";
import "./MainPage.css";
import About from "../About/About";
import SocialMediaDrawer from "../SocialMediaDrawer/SocialMediaDrawer";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { Fade, Typography } from "@mui/material";
import Project from "../Project/Project";
import Skills from "../Skills/Skills";
import Footer from "../Footer/Footer";
import Fab from "@mui/material/Fab";


function MainPage(props) {
  const projectRef = useRef(null);
  const skillRef = useRef(null);
  const aboutRef = useRef(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const trigger = useScrollTrigger({
    target: props.window  ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (component) => {
    console.log(component);
    if (component === "Project") {
      projectRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (component === "About") {
      aboutRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (component === "Skills") {
      skillRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Fade in = {trigger}>
        <Fab
          style={{ position: "fixed", bottom: 16, right: 16 }}
          size="small"
          aria-label="scroll back to top"
          onClick={() => scrollToTop()}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </Fade>
      <div className="Navbar">
        <Typography onClick={() => handleClick("About")} innerRef={aboutRef}>
          About
        </Typography>
        <Typography onClick={() => handleClick("Project")}>Project</Typography>
        <Typography onClick={() => handleClick("Skills")}>Skills</Typography>
      </div>
      <About />
      <Project innerRef={projectRef} />
      <Skills innerRef={skillRef} />
      <SocialMediaDrawer />
      <Footer />
    </>
  );
}

export default MainPage;
