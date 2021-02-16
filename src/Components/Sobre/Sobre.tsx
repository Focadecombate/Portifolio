import React, { createRef } from "react";

import { Grid, Typography } from "@material-ui/core";
import { Personal } from "./Personal";
import { Descricao, DescricaoText } from "./Descricao";
import { makeStyles } from "@material-ui/styles/";
import useChangeNav from "../../Hooks/ChangeNavToPart";

export const Sobre: React.FC<{ isMobile: boolean }> = ({ isMobile }) => {
  const useStyles = makeStyles({
    container: {
      display: "flex",
      flexDirection: "column",
      height: isMobile ? "100%" : "100vh",
      justifyContent: "center",
    },
  });
  const classes = useStyles();

  const Text: DescricaoText[] = [
    {
      Title: { text: "Dev", props: { variant: "h5" } },
      Descricao: {
        text: `Ti em geral, começei a mexer desde criança
         e foram inumeras vezes que tive de levar o
          computador pra formatar pois eu conseguia 
          corromper o windows, logo aprendir a fazer 
          eu mesmo e assim começou essa relação
           com o mundo tech!`,
        props: { variant: "body1" },
      },
    },
    {
      Title: { text: "Musica", props: { variant: "h5" } },
      Descricao: {
        text: `Música, foi meu escape do stress do 3° 
        ano e um dos meios que eu utilizo para manter
        a criatividade em dia! Sou cheio dos instrumentos
        de guitarra a cavaco e o gosto musical tambem é 
        por ai rsrsrs.`,
        props: { variant: "body1" },
      },
    },
    {
      Title: { text: "Carros", props: { variant: "h5" } },
      Descricao: {
        text: `Gosto bastante do Automobilismo, domingo é dia de acordar cedo pra ver a Formula 1 ! Além disso estou restaurando um Honda Civic 95 : )`,
        props: { variant: "body1" },
      },
    },
    {
      Title: { text: "Resumo Profissional", props: { variant: "h4" } },
      Descricao: {
        text: `Eu sou muito determinado e me esforço ao máximo a fazer as
        minhas determinações e mais, disposto a ajudar e trabalhar em
        equipe, a procura de aprender mais nesse mundo de
        desenvolvimento, Gosto bastante também da área de design de
        UI/UX. Possuo formação em inglês com diploma da universidade de
        Cambridge no nivel FCE B2.`,
        props: { variant: "body1" },
      },
    },
    {
      Title: { text: "Objetivos", props: { variant: "h4" } },
      Descricao: {
        text: `Trabalhar na área de desenvolvimento e análise de sistemas como
        FullStack, além de possuir grande interesse na parte de design
        UI/UX.`,
        props: { variant: "body1" },
      },
    },
  ];

  const ref = createRef<HTMLDivElement>();
  useChangeNav(1, ref);

  return (
    <>
      <div id="sobre" className={classes.container}>
        <Grid
          container
          spacing={4}
          alignItems="center"
          direction={!isMobile ? "row" : "column-reverse"}
          justify="space-evenly"
        >
          <Grid item lg={12} xs={12}>
            <Typography variant="h2" color="secondary">
              Sobre mim
            </Typography>
          </Grid>
          <Grid item lg={6} xs={12}>
            <Typography variant="h3">Paixões</Typography>
            <Grid item xs={12} style={{ marginTop: 32 }}>
              {Text.map((text) => (
                <div key={text.Title.text} style={{ marginTop: 16 }}>
                  <Descricao {...text} />
                </div>
              ))}
            </Grid>
          </Grid>
          <Grid
            container
            item
            lg={6}
            xs={12}
            ref={ref}
            spacing={2}
            justify="center"
            alignContent="center"
          >
            <Personal isMobile={isMobile} />
          </Grid>
        </Grid>
      </div>
    </>
  );
};
