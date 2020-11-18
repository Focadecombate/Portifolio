import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Container, Grid, Typography } from "@material-ui/core";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

export const Inicio: React.FC = () => {
  const useStyles = makeStyles((theme) => ({
    container: {
      display: "flex",
      flexDirection: "column",
      height: "100vh",
      justifyContent: "center",
      textAlign: "center",
    },
  }));

  const classes = useStyles();

  return (
    <>
      <Grid id="inicio" container className={classes.container}>
        <div>
          <Container maxWidth="xs" style={{ marginBottom: 32 }}>
            <Typography variant="h1" color="secondary">
              Olá, sou Gustavo Santos!
            </Typography>
          </Container>
          <Typography
            variant="h4"
            color="secondary"
            style={{ marginBottom: 32 }}
          >
            FullStack Developer
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            style={{ marginBottom: 32 }}
          >
            Download CV
          </Button>
          <div>
            <ArrowDownwardIcon fontSize="large" />
          </div>
        </div>
      </Grid>
    </>
  );
};
