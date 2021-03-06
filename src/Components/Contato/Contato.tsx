import { Button, Grid, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { createRef } from "react";
import useChangeNav from "../../Hooks/ChangeNavToPart";

export const Contato: React.FC<{ isMobile: boolean }> = ({ isMobile }) => {
  const useStyles = makeStyles({
    container: {
      display: "flex",
      flexDirection: "column",
      height: isMobile ? "100%" : "100vh",
      justifyContent: "sp",
    },
  });
  const classes = useStyles();

  const ref = createRef<HTMLDivElement>();
  useChangeNav(5, ref);

  return (
    <>
      <div id="contato" className={classes.container}>
        <Grid
          container
          spacing={8}
          alignItems="center"
          style={{ height: "100%" }}
          justify="space-evenly"
        >
          <Grid item lg={12} xs={12}>
            <Typography variant="h2" color="secondary">
              Contato
            </Typography>
          </Grid>
          <Grid ref={ref} item container spacing={2} lg={6} xs={12}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                variant="filled"
                label="Nome"
                name="Nome"
                type="name"
                id="name"
                placeholder="Digite seu nome!"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                variant="filled"
                label="Email"
                name="Email"
                type="email"
                id="email"
                placeholder="Digite seu email!"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="filled"
                label="Assunto"
                name="Assunto"
                type="assunto"
                id="text"
                placeholder="Digite o assunto do contato!"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={6}
                variant="filled"
                label="Mensagem"
                name="mensagem"
                type="mensagem"
                id="mensagem"
                placeholder="Digite a sua mensagem :)"
              />
            </Grid>
            <Grid item xs={12}>
              <Button fullWidth color="secondary" variant="contained">
                Enviar
              </Button>
            </Grid>
          </Grid>
          <Grid item lg={6} xs={12}>
            <Typography variant="h4">Gustavo Santos</Typography>
            <Typography variant="h6">FullStack Dev</Typography>
            <Typography variant="h4" style={{ marginTop: 32 }}>
              Email
            </Typography>
            <Typography variant="h6">gustavosisa@outlook.com</Typography>
          </Grid>
        </Grid>
      </div>
    </>
  );
};
