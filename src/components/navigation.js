import React from "react";
import "../styles/navigation.css";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import CameraIcon from "@material-ui/icons/Camera";
import ReactDOM from "react-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link } from "react-router-dom";
import kalponiclogo from "../img/kalponiclogo2.png"

function Navigation() {
  return (
    <div className="navigation">
      <AppBar position="static" className="navigation__appbar">
        <Toolbar className="navigation__toolbar">   
          <div className="navigation__kalponic">
            <CameraIcon fontSize="large" />
            {/* <img src={kalponiclogo} alt="Kalponic-Logo" className="navigation__kalponiclogo" /> */}
            <Typography className="navigation__kalponicName" variant="h5">              
                <AnchorLink href="#header">Kalponic</AnchorLink>
            </Typography>
          </div>    
          <div className="navigation__menu">
              <AnchorLink href="#about">About</AnchorLink>
              <AnchorLink href="#service">Services</AnchorLink>
              <AnchorLink href="#portfolio">Portfolio</AnchorLink>
              <AnchorLink href="#team">Team</AnchorLink>
              <AnchorLink href="#testimonial">Testimonials</AnchorLink>
              
              <AnchorLink href="#contact">Contact</AnchorLink>
              </div>
          </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navigation;
