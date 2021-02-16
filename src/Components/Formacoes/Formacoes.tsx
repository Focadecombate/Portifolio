import React, { createRef } from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import { Formacao } from "./Formacao";
import List from "../List/List";
import useChangeNav from "../../Hooks/ChangeNavToPart";

interface FormacaoTexto {
  title: string;
  tempo: string;
  lugar: string;
  escola: string;
  descricao: string;
  curso: string;
}

export const Formacoes: React.FC<{ isMobile: boolean }> = ({ isMobile }) => {
  const styles = makeStyles((theme) =>
    createStyles({
      container: {
        display: "flex",
        flexDirection: "column",
        height: isMobile ? "100%" : "100vh",
        justifyContent: "center",
      },
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
        borderRadius: 100,
        margin: 10,
      },
    })
  );
  const classes = styles();

  const FormacaoTextos: FormacaoTexto[] = [
    {
      title: "Curso Superior",
      curso: "Sistemas De Informação",
      tempo: "2019 - Em Progresso",
      escola: "UFBA",
      lugar: "Salvador, BA",
      descricao:
        "Curso para o profissional quer ter uma visão melhor na parte de desenvolvimento e administração.",
    },
    {
      title: "Alura",
      curso: "FullStack e Devops",
      tempo: "2020 - 2021",
      escola: "Alura",
      lugar: "Online",
      descricao:
        "Javascript(React, Typescript, Node),  MongoDb, Go,  Postgress,  Linux,  Vagrant,  Docker e Kubernetes.",
    },
    {
      title: "Saga",
      curso: "Design Gráfico",
      tempo: "2019 - 2021",
      escola: "Saga",
      lugar: "Salvador, BA",
      descricao:
        "Curso Saga Start que está abordando: Photoshop, Ilustrator, Premiere, After Effects e Maya",
    },
  ];

  const ref = createRef<HTMLDivElement>();
  useChangeNav(2, ref);

  return (
    <>
      <div id="formacoes" className={classes.container}>
        <Grid container spacing={4} alignItems="center">
          <Grid item lg={12} xs={12}>
            <Typography
              variant="h2"
              color="secondary"
              style={{ textAlign: "center", marginBottom: "10%" }}
            >
              Formação
            </Typography>
          </Grid>
          <List<FormacaoTexto, {}>
            array={FormacaoTextos}
            keyProp="title"
            Component={Formacao}
          ></List>
          <div ref={ref}></div>
        </Grid>
      </div>
    </>
  );
};
