import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { TextoLinhaTempo } from "../utils/types";
import { useStyles } from "../utils/useStyles";
import { LinhaTempo } from "./LinhaTempo";

export const Experiencia: React.FC = () => {
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

  const textos: TextoLinhaTempo[] = [
    { esquerda: "Voluntáriado", direita: "Grupo de Apoio a Criança com Câncer" },
    { esquerda: "quero", direita: "te" },
    { esquerda: "beijar", direita: "agora" },
    { esquerda: "muito", direita: "sua" },
    { direita: "mesmo" },
    { esquerda: "!" },
  ];

  return (
    <>
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
    </>
  );
};
