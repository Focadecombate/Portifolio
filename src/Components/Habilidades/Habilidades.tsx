import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { createRef } from "react";
import useChangeNav from "../../Hooks/ChangeNavToPart";
import { HabilidadeText } from "../../utils/types";
import List from "../List/List";
import { Habilidade } from "./Habilidade";

export const Habilidades: React.FC<{ isMobile: boolean }> = ({ isMobile }) => {
  const useStyles = makeStyles({
    container: {
      display: "flex",
      flexDirection: "column",
      height: isMobile ? "100%" : "100vh",
      justifyContent: "center",
      marginBottom: 48,
    },
    itens: {
      marginTop: 16,
    },
  });
  const classes = useStyles();

  const backend: HabilidadeText[] = [
    {
      name: "Node Js",
      progress: 80,
      description:
        "Rodar javascript no back-end, tipo puré no hotdog cê acha que não é bom mas é!",
    },
    {
      name: "Nest Js",
      progress: 80,
      description: "Me fez aprender muito sobre estrutura de projetos.",
    },
    {
      name: "Python",
      progress: 50,
      description: "Minha primeira linguagem de programação s2.",
    },
    {
      name: "GraphQL",
      progress: 40,
      description: "Evolução do REST.",
    },
    {
      name: "MongoDb",
      progress: 70,
      description: "Meu banco de dados favorito pela sua simplicidade.",
    },
    {
      name: "Postgres",
      progress: 50,
      description: "Quando precisa de muitas relações entre tabelas.",
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
      name: "Typescript",
      progress: 70,
      description: "A melhor evolução do Javascript, não vivo sem!",
    },
    {
      name: "Redux Js",
      progress: 60,
      description:
        "Quando o context api não dá conta ou os estados estão bagunçados.",
    },
    {
      name: "Material Ui",
      progress: 70,
      description: "Otimos componentes! ",
    },
    {
      name: "React Native",
      progress: 60,
      description: "React pro mobile?! Genial!",
    },
    {
      name: "React Spring",
      progress: 40,
      description: "Animationssss!!!",
    },
  ];
  const devops: HabilidadeText[] = [
    {
      name: "Docker",
      progress: 60,
      description:
        'Melhor solução para acabar com a fabula "ah no meu pc roda".',
    },
    {
      name: "Kubernetes",
      progress: 30,
      description: "Precisa escalar um projeto? Ta aqui a bazooka!",
    },
    {
      name: "Linux",
      progress: 80,
      description: "As nuvens filho, são tudo servidores linux.",
    },
    {
      name: "Ansible",
      progress: 40,
      description: "Automatizar a automatização.",
    },
    {
      name: "CI/CD",
      progress: 60,
      description: "Já deu de subir zip no servidor?!",
    },
    {
      name: "Redis",
      progress: 60,
      description: "Cache é vida.",
    },
    /*     {
      name: "Nginx",
      progress: 60,
      description: "Reverse Proxy Top.",
    }, */
  ];

  const ref = createRef<HTMLDivElement>();
  useChangeNav(3, ref);

  return (
    <>
      <div id="habilidades" className={classes.container}>
        <Grid container spacing={6} alignItems="center" justify="space-evenly">
          <Grid item lg={12} xs={12}>
            <Typography variant="h2" color="secondary">
              Habilidades
            </Typography>
          </Grid>
          <Grid item lg={3} xs={12}>
            <Typography variant="h4">FRONT-END</Typography>
            <List<HabilidadeText, {}>
              Component={Habilidade}
              array={frontend}
              keyProp="name"
            ></List>
          </Grid>
          <Grid ref={ref} item lg={3} xs={12}>
            <Typography variant="h4">BACK-END</Typography>
            <List<HabilidadeText, {}>
              Component={Habilidade}
              array={backend}
              keyProp="name"
            ></List>
          </Grid>
          <Grid item lg={3} xs={12}>
            <Typography variant="h4">DEVOPS</Typography>
            <List<HabilidadeText, {}>
              Component={Habilidade}
              array={devops}
              keyProp="name"
            ></List>
          </Grid>
        </Grid>
      </div>
    </>
  );
};
