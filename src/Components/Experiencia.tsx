import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { TextoLinhaTempo } from "../utils/types";
import { useStyles } from "../utils/useStyles";
import { LinhaTempo } from "./LinhaTempo/LinhaTempo";

export const Experiencia: React.FC<{ isMobile: boolean }> = ({ isMobile }) => {
  const styles = useStyles({
    container: {
      display: "flex",
      flexDirection: "column",
      height: isMobile ? "100%" : "100vh",
      justifyContent: "center",
    },
  });
  const classes = styles();

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
    { esquerda: "Estágio", direita: "Facile" },
  ];

  return (
    <div id="experiencia" className={classes.container}>
      <Grid container spacing={8} alignItems="center" justify="space-evenly">
        <Grid item lg={12} xs={12}>
          <Typography variant="h2" color="secondary">
            Experiência
          </Typography>
        </Grid>
        <Grid style={{ height: "100%" }} item lg={12} xs={12}>
          <LinhaTempo textos={textos} />
        </Grid>
      </Grid>
    </div>
  );
};
