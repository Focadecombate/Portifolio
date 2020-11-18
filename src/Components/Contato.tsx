import { Button, Grid, TextField, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "../utils/useStyles";

export const Contato: React.FC = () => {
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
      <div id="contato" className={classes.container}>
        <Grid container spacing={8} alignItems="center" justify="space-evenly">
          <Grid item lg={12} xs={12}>
            <Typography variant="h2" color="secondary">
              Contato
            </Typography>
          </Grid>
          <Grid item container spacing={2} lg={6} xs={6}>
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
          <Grid item lg={6} xs={6}>
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
