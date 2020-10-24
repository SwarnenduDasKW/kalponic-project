import React from "react";
import "../styles/team.css";
import { Card, CardHeader, CardMedia, CardActionArea,CardContent, Typography } from "@material-ui/core";
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
        wrap="wrap"
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
              <Grid item key={`${d.name}-${i}`} xs={12} sm={2} className="team__grid">
                <Card>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt={d.name}
                      image={d.img}
                    />
                    {/* <CardHeader title={d.name} subheader={d.job} /> */}
                    <CardContent>
                      <Typography variant="subtitle2">
                        {d.name}
                      </Typography>
                      <Typography variant="caption" color="textSecondary" component="p">
                        {d.job}
                      </Typography>
                    </CardContent>
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
