import React from "react";
import "../styles/navigation.css";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import CameraIcon from "@material-ui/icons/Camera";
import ReactDOM from "react-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Navigation() {
  return (
    <div className="navigation">
      <AppBar position="fixed">
        <Toolbar className="navigation__toolbar">
          <div className="navigation__kalponic">
            <CameraIcon fontSize="large" />
            <Typography className="navigation__kalponicName" variant="h5">
              Kalponic
            </Typography>
          </div>
          <div className="navigation__menu">
            <AnchorLink href="#about">About</AnchorLink>
            <AnchorLink href="#service">Services</AnchorLink>
            <AnchorLink href="#portfolio">Portfolio</AnchorLink>
            <AnchorLink href="#team">Team</AnchorLink>
            <AnchorLink href="#testimonial">Testimonials</AnchorLink>
            <AnchorLink href="#contact">Contact</AnchorLink>
            {/* <Button color="inherit">About</Button>
            <Button color="inherit">Services</Button>
            <Button color="inherit">Portfolio</Button>
            <Button color="inherit">Team</Button>
            <Button color="inherit">Testimonials</Button>
            <Button color="inherit">Contact</Button> */}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navigation;
