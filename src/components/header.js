import React from "react";
import "../styles/header.css";
import { Button } from "@material-ui/core";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Header() {
  return (
    <header id="header" className="header">
      {/* <div className="header__bgimg"></div> */}
      <div className="header__intro">
        <h1>
          WELCOME TO <span className="header__brandHeading">KALPONIC</span>
        </h1>
        <p className="header__introText">
          A full-service digital agency that loves what we do
        </p>
        <AnchorLink href="#about">
          <Button variant="contained" className="header__learnMore">
            Learn More
          </Button>
        </AnchorLink>
      </div>
    </header>
  );
}

export default Header;
