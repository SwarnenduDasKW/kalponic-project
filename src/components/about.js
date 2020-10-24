import React from "react";
import imgAbout from "../img/about.jpg";
import "../styles/about.css";
import Grid from "@material-ui/core/Grid";

function About(props) {
  return (
    <div className="about" id="about">
      {/* <div>
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
      </div> */}

      <Grid
        container
        spacing={3}
        direction="row"
        // justify="center"
        // alignItems="center"
        className="about__aboutusgrid"
      >
        <Grid item xs={12}>
          <h2 className="about__aboutus">About Us</h2>
          <hr />
        </Grid>
        <Grid item xs={12}>
          <p className="about__aboutuspara">
            {props.data ? props.data.paragraph : "loading..."}
          </p>
        </Grid>
        <Grid item xs={12} sm={6}>
          <img className="about__image" src={imgAbout} alt="About-Team" />
        </Grid>
        <Grid item xs={12} sm={3} className="about__whowhat">
          <h4>Who we are</h4>
          <p>
            {props.data
              ? props.data.why.map((d, i) => <li key={`${d}-${i}`}>{d}</li>)
              : "loading"}
          </p>
        </Grid>
        <Grid item xs={12} sm={3} className="about__whowhat">
          <h4>What we do</h4>
          <p>
            {props.data
              ? props.data.specialties.map((d, i) => (
                  <li key={`${d}-${i}`}> {d}</li>
                ))
              : "loading"}
          </p>
        </Grid>
      </Grid>
    </div>
  );
}

export default About;
