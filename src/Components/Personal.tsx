import React from "react";

import { Grid } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";

export const Personal = () => {
  return (
    <>
      <img
        src="https://github.com/focadecombate.png"
        alt="Minha foto"
        style={{ borderRadius: 500, marginBottom: 64 }}
      />
      <Grid container justify="center">
        <Grid style={{ display: "flex", justifyContent: "center" }} item xs={3}>
          <LinkedInIcon fontSize="large" />
        </Grid>
        <Grid style={{ display: "flex", justifyContent: "center" }} item xs={3}>
          <GitHubIcon fontSize="large" />
        </Grid>
        <Grid style={{ display: "flex", justifyContent: "center" }} item xs={3}>
          <InstagramIcon fontSize="large" />
        </Grid>
        <Grid style={{ display: "flex", justifyContent: "center" }} item xs={3}>
          <TwitterIcon fontSize="large" />
        </Grid>
      </Grid>
    </>
  );
};
