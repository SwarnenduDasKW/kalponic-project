import React from "react";
import Grid from "@material-ui/core/Grid";
import "../styles/services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Services(props) {
  return (
    <div className="service" id="service">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h2 className="service__title">Our Services</h2>
          <hr />
        </Grid>
        <Grid item xs={12}>
          <p className="service__desc">
            {props.data ? props.data.description : "loading..."}
          </p>
        </Grid>
        {props.data
          ? props.data.services.map((d, i) => (
              <Grid item key={`${d.name}-${i}`} xs={3}>
                <div className="service__desc">
                  <FontAwesomeIcon icon={d.icon} size="2x" />
                  <h3>{d.name}</h3>
                  <p>{d.text}</p>
                </div>
              </Grid>
            ))
          : "loading"}
      </Grid>
    </div>
  );
}

export default Services;
