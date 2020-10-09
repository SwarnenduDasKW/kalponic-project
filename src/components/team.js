import React from "react";
import "../styles/team.css";
import { Card, CardHeader, CardMedia, CardActionArea } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

function Team(props) {
  return (
    <div className="team" id="team">
      <Grid
        container
        spacing={3}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={12}>
          <h2 className="title__title">meet the team</h2>
          <hr />
        </Grid>
        <Grid item xs={12}>
          <p className="title__desc">
            Meet the most dynamic and fun loving people of our Kalponic family
          </p>
        </Grid>

        {props.data
          ? props.data.map((d, i) => (
              <Grid item key={`${d.name}-${i}`} xs={2}>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt={d.name}
                      height="200"
                      image={d.img}
                    />
                    <CardHeader title={d.name} subheader={d.job} />
                  </CardActionArea>
                </Card>
              </Grid>
            ))
          : "loading"}
      </Grid>
    </div>
  );
}

export default Team;
