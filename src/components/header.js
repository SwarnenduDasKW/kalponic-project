import React from "react";
import "../styles/header.css";
import { Button } from "@material-ui/core";

function Header() {
  return (
    <header id="header" className="header">
      <div className="header__intro">
        <h1>
          WELCOME TO <span className="header__brandHeading">KALPONIC</span>
        </h1>
        <p className="header__introText">
          A full-service digital agency that loves what we do
        </p>
        <Button variant="contained" className="header__learnMore">
          Learn More
        </Button>
      </div>
    </header>
  );
}

export default Header;
