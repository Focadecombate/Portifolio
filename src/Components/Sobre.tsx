import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "../utils/useStyles";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";

export const Sobre: React.FC = () => {
  const styles = useStyles({
    container: {
      display: "flex",
      flexDirection: "column",
      height: "100vh",
      justifyContent: "center",
      marginBottom: 48,
    },
  });
  const classes = styles();

  return (
    <>
      <div id="sobre" className={classes.container}>
        <Grid container spacing={8} alignItems="center" justify="space-evenly">
          <Grid item lg={12} xs={12}>
            <Typography variant="h2" color="secondary">
              Sobre mim
            </Typography>
          </Grid>
          <Grid item lg={6} xs={6}>
            <Typography variant="h4">Objetivos</Typography>
            <Typography>
              Trabalhar na área de desenvolvimento e análise de sistemas como
              FullStack, além de possuir grande interesse na parte de design
              UI/UX.
            </Typography>
            <Typography>Tirar certificações na área</Typography>
            <Typography variant="h4" style={{ marginTop: 32 }}>
              Resumo Profissional
            </Typography>
            <Typography>
              Eu sou muito determinado e me esforço ao máximo a fazer as minhas
              determinações e mais, disposto a ajudar e trabalhar em equipe, a
              procura de aprender mais nesse mundo de desenvolvimento e me
              tornar FullStack, Gosto bastante também da área de design grafico
              pra redes sociais uma vez que já estagiei nessa área, formação em
              inglês com diploma da universidade de Cambridge no nivel FCE B2.
            </Typography>
          </Grid>
          <Grid container item lg={6} xs={12} spacing={2} alignContent="center">
            <img
              src="https://github.com/focadecombate.png"
              alt="Minha foto"
              style={{ borderRadius: 500, marginBottom: 64 }}
            />
            <Grid item xs={4}>
              <LinkedInIcon fontSize="large" />
            </Grid>
            <Grid item xs={4}>
              <GitHubIcon fontSize="large" />
            </Grid>
            <Grid item xs={4}>
              <InstagramIcon fontSize="large" />
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
};
