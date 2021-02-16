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
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/gustavo-santos-76330676/"
            >
              <LinkedInIcon color="secondary" fontSize="large" />
            </a>
          </Grid>
          <Grid
            style={{ display: "flex", justifyContent: "center" }}
            item
            xs={3}
          >
            <a
              href="https://github.com/Focadecombate"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon color="secondary" fontSize="large" />
            </a>
          </Grid>
          <Grid
            style={{ display: "flex", justifyContent: "center" }}
            item
            xs={3}
          >
            <a
              href="https://www.instagram.com/gustavo14567/"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon color="secondary" fontSize="large" />
            </a>
          </Grid>
          <Grid
            style={{ display: "flex", justifyContent: "center" }}
            item
            xs={3}
          >
            <a href="https://twitter.com/focadecombate" target="_blank" rel="noopener noreferrer">
              <TwitterIcon color="secondary" fontSize="large" />
            </a>
          </Grid>
        </Grid>
      )}
    </>
  );
};
