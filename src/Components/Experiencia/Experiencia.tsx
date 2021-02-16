import React, { createRef } from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Timeline } from "@material-ui/lab";
import { TextoLinhaTempo } from "../../utils/types";
import { LinhaTempo } from "./LinhaTempo/LinhaTempo";
import useChangeNav from "../../Hooks/ChangeNavToPart";

export const Experiencia: React.FC<{ isMobile: boolean }> = ({ isMobile }) => {
  const useStyles = makeStyles({
    container: {
      display: "flex",
      flexDirection: "column",
      height: isMobile ? "100%" : "100vh",
      justifyContent: "center",
    },
  });
  const classes = useStyles();

  const textos: TextoLinhaTempo[] = [
    {
      esquerda: "Voluntáriado",
      direita: "Grupo de Apoio a Criança com Câncer",
    },
    { esquerda: "InfoJr UFBA", direita: "Empresa Júnior" },
    {
      esquerda: "Klutch",
      direita: `Estágio: Aprendi muito de React, Typescript, Apolo GraphQL, Styled-Components e Next.js `,
    },
    {
      direita:
        "Estágio: Aprendi muito de React, Typescript, Apolo GraphQL, Styled-Components e Next.js",
      esquerda: "Facile",
    },
  ];

  const ref = createRef<HTMLDivElement>();
  useChangeNav(4, ref);

  return (
    <div id="experiencia" className={classes.container}>
      <Grid
        ref={ref}
        container
        spacing={8}
        alignItems="center"
        justify="space-evenly"
      >
        <Grid item lg={12} xs={12}>
          <Typography variant="h2" color="secondary">
            Experiência
          </Typography>
        </Grid>
        <Grid style={{ height: "100%" }} item lg={12} xs={12}>
          <Timeline align="alternate">
            <LinhaTempo textos={textos} />
          </Timeline>
        </Grid>
      </Grid>
    </div>
  );
};
