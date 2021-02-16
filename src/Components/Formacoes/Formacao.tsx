import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";

interface Props {
  title: string;
  tempo: string;
  lugar: string;
  escola: string;
  descricao: string;
  curso: string;
}

export const Formacao: React.FC<Props> = ({
  descricao,
  escola,
  lugar,
  tempo,
  curso,
  title,
}) => {
  const styles = makeStyles((theme) =>
    createStyles({
      bar: {
        backgroundColor: theme.palette.secondary.main,
        width: "100%",
        height: 1,
        margin: 10,
      },
      ball: {
        backgroundColor: theme.palette.secondary.main,
        width: 10,
        height: 10,
        borderRadius: 500,
        margin: 10,
      },
    })
  );
  const classes = styles();
  return (
    <>
      <Grid item lg={12} xs={12} style={{ textAlign: "center" }}>
        <Typography variant="h6" style={{ fontWeight: "bold" }}>
          {" "}
          {title}{" "}
        </Typography>
        <Typography variant="h6"> {tempo} </Typography>
        <Container
          maxWidth="xs"
          style={{ display: "flex", alignItems: "center" }}
        >
          <div className={classes.ball}></div>
          <div className={classes.bar}></div>
          <div className={classes.ball}></div>
        </Container>
        <Typography variant="h6"> {curso} </Typography>
        <Typography variant="body1"> {lugar} </Typography>
        <Typography variant="body1"> {escola} </Typography>
        <Container maxWidth="xs">
          <Typography variant="body1">{descricao}</Typography>
        </Container>
      </Grid>
    </>
  );
};
