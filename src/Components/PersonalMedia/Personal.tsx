import React from "react";

import { Grid } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";

export const Personal: React.FC<{ isMobile: boolean }> = ({ isMobile }) => {
  return (
    <>
      <img
        src="https://github.com/focadecombate.png"
        alt="Minha foto"
        style={
          isMobile
            ? { borderRadius: "50%", width: "50%", margin: "32px 0px" }
            : { borderRadius: "50%", marginBottom: 64 }
        }
      />
      {!isMobile && (
        <Grid container justify="center">
          <Grid
            style={{ display: "flex", justifyContent: "center" }}
            item
            xs={3}
          >
            <LinkedInIcon fontSize="large" />
          </Grid>
          <Grid
            style={{ display: "flex", justifyContent: "center" }}
            item
            xs={3}
          >
            <GitHubIcon fontSize="large" />
          </Grid>
          <Grid
            style={{ display: "flex", justifyContent: "center" }}
            item
            xs={3}
          >
            <InstagramIcon fontSize="large" />
          </Grid>
          <Grid
            style={{ display: "flex", justifyContent: "center" }}
            item
            xs={3}
          >
            <TwitterIcon fontSize="large" />
          </Grid>
        </Grid>
      )}
    </>
  );
};
