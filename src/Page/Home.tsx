import React from "react";
import { Container } from "@material-ui/core";
import {
  Nav,
  Contato,
  Footer,
  Formacoes,
  Inicio,
  Sobre,
  Experiencia,
  Habilidades,
} from "../Components/index";

export const Home: React.FC = () => {
  return (
    <>
      <Nav />
      <Container maxWidth="lg">
        <Inicio />
        <Sobre />
        <Formacoes />
        <Habilidades />
        <Experiencia />
        <Contato />
        <Footer />
      </Container>
    </>
  );
};
