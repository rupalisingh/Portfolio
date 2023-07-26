import React from "react";
import { Drawer } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import "./SocialMediaDrawer.css"
import coffee from  "./coffee.png"

function SocialMediaDrawer() {
  return (
  <>
  <Drawer anchor={"left"} variant="permanent" >
    <LinkedInIcon style = {{cursor : "pointer"}} onClick = {() => window.open("https://www.linkedin.com/in/rupali-singh-452154156/")}/>
    <GitHubIcon style = {{cursor : "pointer"}} onClick = {() => window.open("https://github.com/rupalisingh")}/>
    <img alt = "coffee" src = {coffee} style = {{cursor : "pointer"}} onClick = {() => window.open("https://www.buymeacoffee.com/rupali23")}/>
  </Drawer>
  </>
  )
}

export default SocialMediaDrawer;
