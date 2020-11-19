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
            <Grid item xs={12}>
              <Typography variant="h4">Paixões</Typography>
              <Typography>
                Ti em geral, começei a mexer desde criança e foram inumeras
                vezes que tive de levar o computador pra formatar pois eu
                conseguia corromper o windows, logo aprendir a fazer eu mesmo e
                assim começou essa relação com o mundo tech!
              </Typography>
              <Typography style={{ marginTop: 8 }}>
                Música, foi meu escape do stress do 3° ano e um dos meios que eu
                utilizo para manter a criatividade em dia! Sou cheio dos
                instrumentos de guitarra a cavaco e o gosto musical tambem é por
                ai rsrsrs.
              </Typography>
              <Typography style={{ marginTop: 8 }}>
                Gosto bastante do Automobilismo, domingo é dia de acordar cedo
                pra ver a Formula 1 ! Além disso estou restaurando um Honda
                Civic 95 : )'
              </Typography>
            </Grid>
            <Grid item xs={12} style={{ marginTop: 32 }}>
              <Typography variant="h4">Resumo Profissional</Typography>
              <Typography>
                Eu sou muito determinado e me esforço ao máximo a fazer as
                minhas determinações e mais, disposto a ajudar e trabalhar em
                equipe, a procura de aprender mais nesse mundo de
                desenvolvimento, Gosto bastante também da área de design de
                UI/UX. Possuo formação em inglês com diploma da universidade de
                Cambridge no nivel FCE B2.
              </Typography>
            </Grid>
            <Grid item xs={12} style={{ marginTop: 32 }}>
              <Typography variant="h4">Objetivos</Typography>
              <Typography>
                Trabalhar na área de desenvolvimento e análise de sistemas como
                FullStack, além de possuir grande interesse na parte de design
                UI/UX.
              </Typography>
            </Grid>
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
            <Grid item xs={4}>
              <InstagramIcon fontSize="large" />
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  )
};
