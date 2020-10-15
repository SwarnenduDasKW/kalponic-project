import React from "react";
import imgAbout from "../img/about.jpg";
import "../styles/about.css";

function About(props) {
  return (
    <div className="about" id="about">
      <div>
        <h2 className="about__aboutus">About Us</h2>
        <hr />
        <p className="about__aboutuspara">{props.data ? props.data.paragraph : "loading..."}</p>
      </div>
      <div className="about__details">
        <div>
          <img className="about__image" src={imgAbout} alt="About-Team" />
        </div>
        <div className="about__who">
          <h4>Who we are</h4>
          <p className="about__who">
            {props.data
              ? props.data.why.map((d, i) => <li key={`${d}-${i}`}>{d}</li>)
              : "loading"}
          </p>
        </div>
        <div className="about__what">
          <h4>What we do</h4>
          <p className="about__what">
            {props.data
              ? props.data.specialties.map((d, i) => (
                  <li key={`${d}-${i}`}> {d}</li>
                ))
              : "loading"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
