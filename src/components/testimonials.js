import React from "react";
import Grid from "@material-ui/core/Grid";
import "../styles/testimonials.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Testimonials(props) {
  return (
    <div className="testimonial" id="testimonial">
      <Grid
        container
        spacing={5}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={12}>
          <h2 className="testimonial__title">What our clients say</h2>
          <hr />
        </Grid>
        {props.data
          ? props.data.map((d, i) => (
              <Grid item key={`${d.name}-${i}`} xs={2}>
                <div className="testimonial__review">
                  <FontAwesomeIcon icon="quote-left" size="2x" />
                  <p className="testimonial__reviewtext">{d.text}</p>
                </div>
                <div className="testimonial__from">
                  <h3 className="testimonial__name">{d.name}</h3>
                  <h5 className="testimonial__stars">
                    {Array(parseInt(d.rating))
                      .fill()
                      .map((_) => (
                        <p>⭐️</p>
                      ))}
                  </h5>
                </div>
              </Grid>
            ))
          : "loading"}
      </Grid>
    </div>
  );
}

export default Testimonials;
