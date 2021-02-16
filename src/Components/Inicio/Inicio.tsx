import React, { createRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Container, Grid, Typography } from "@material-ui/core";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import { storage } from "../../firebase";
import useChangeNav from "../../Hooks/ChangeNavToPart";

export const Inicio: React.FC = () => {
  const useStyles = makeStyles((theme) => ({
    container: {
      display: "flex",
      flexDirection: "column",
      height: "110vh",
      justifyContent: "center",
      textAlign: "center",
    },
  }));

  const classes = useStyles();

  const handleDownload = async () => {
    const downloadUrl: string = await storage
      .ref("/CV_Gustavo_PT.pdf")
      .getDownloadURL();
    window.open(downloadUrl);
  };

  const ref = createRef<HTMLDivElement>();
  useChangeNav(0, ref);

  return (
    <Grid id="inicio" container className={classes.container}>
      <div>
        <Container ref={ref} maxWidth="xs" style={{ marginBottom: 32 }}>
          <Typography variant="h1" color="secondary">
            Olá, sou Gustavo Santos!
          </Typography>
        </Container>
        <Typography variant="h4" color="secondary" style={{ marginBottom: 32 }}>
          FullStack Developer
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          style={{ marginBottom: 32 }}
          onClick={handleDownload}
        >
          Download CV
        </Button>
        <div>
          <ArrowDownwardIcon fontSize="large" />
        </div>
      </div>
    </Grid>
  );
};
