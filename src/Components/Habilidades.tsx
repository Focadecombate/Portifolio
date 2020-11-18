import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { HabilidadeText } from "../utils/types";
import { useStyles } from "../utils/useStyles";
import LinearWithValueLabel from "./BarraProgresso";
import { Habilidade } from "./Habilidade";

export const Habilidades: React.FC = () => {
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

  const backend: HabilidadeText[] = [
    {
      name: "Node Js",
      progress: 80,
      description:
        "Linguagem de BACK-END que mais tenho familiaridade e que mais usei em projetos pessoais e trabalho.",
    },
    {
      name: "Python",
      progress: 80,
      description:
        "Minha primeira linguagem de programação s2.",
    },
  ];
  const frontend: HabilidadeText[] = [
    {
      name: "React Js",
      progress: 80,
      description:
        "Framework para o Front-End que mais tive contato e foi utilizado para fazer esse site :) ",
    },
    {
      name: "Material Ui",
      progress: 70,
      description: "Otimos componentes como base! ",
    },
    {
      name: "Redux Js",
      progress: 60,
      description: "Uma das melhores maneiras de tratar propriedades globais.",
    },
    {
      name: "Typescript",
      progress: 70,
      description: "A melhor evolução do Javascript, não vivo sem!",
    },
  ];
  const devops: HabilidadeText[] = [
    {
      name: "Node Js",
      progress: 80,
      description:
        "Linguagem de BACK-END que mais tenho familiaridade e que mais usei em projetos pessoais e trabalho.",
    },
  ];
  const design: HabilidadeText[] = [
    {
      name: "Node Js",
      progress: 80,
      description:
        "Linguagem de BACK-END que mais tenho familiaridade e que mais usei em projetos pessoais e trabalho.",
    },
  ];

  return (
    <>
      <div id="habilidades" className={classes.container}>
        <Grid container spacing={8} alignItems="center" justify="space-evenly">
          <Grid item lg={12} xs={12}>
            <Typography variant="h2" color="secondary">
              Habilidades
            </Typography>
          </Grid>
          <Grid container item lg={3} xs={3}>
            <Typography variant="h4">FRONT-END</Typography>
            {frontend.map((habilidade) => (
              <>
                <Grid item xs={12} style={{ marginTop: 16 }}>
                  <Habilidade {...habilidade} />
                </Grid>
              </>
            ))}
          </Grid>
          <Grid item lg={3} xs={3}>
            <Typography variant="h4">BACK-END</Typography>
            {backend.map((habilidade) => (
              <>
                <Grid item xs={12} style={{ marginTop: 16 }}>
                  <Habilidade {...habilidade} />
                </Grid>
              </>
            ))}
          </Grid>
          <Grid item lg={3} xs={3} style={{ marginTop: 16 }}>
            <Typography variant="h4">DEVOPS</Typography>
            {devops.map((habilidade) => (
              <>
                <Grid item xs={12}>
                  <Habilidade {...habilidade} />
                </Grid>
              </>
            ))}
          </Grid>
          <Grid item lg={3} xs={3} style={{ marginTop: 16 }}>
            <Typography variant="h4">DESIGN</Typography>
            {devops.map((habilidade) => (
              <>
                <Grid item xs={12}>
                  <Habilidade {...habilidade} />
                </Grid>
              </>
            ))}
          </Grid>
        </Grid>
      </div>
    </>
  );
};
