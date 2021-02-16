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
import { useMobile } from "../utils/useMobile";
import MobileMenu from "../Components/Nav/MobileMenu";

export const Home: React.FC = () => {
  const isMobile = useMobile();
  return (
    <>
      {isMobile ? <MobileMenu /> : <Nav />}
      <Container maxWidth="lg">
        <Inicio />
        <Sobre isMobile={isMobile} />
        <Formacoes isMobile={isMobile} />
        <Habilidades isMobile={isMobile} />
        <Experiencia isMobile={isMobile} />
        <Contato isMobile={isMobile} />
        <Footer />
      </Container>
    </>
  );
};
