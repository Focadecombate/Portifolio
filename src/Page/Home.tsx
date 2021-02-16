import React from "react";
import { Container } from "@material-ui/core";
import {
  Nav,
  Contato,
  Formacoes,
  Inicio,
  Sobre,
  Experiencia,
  Habilidades,
} from "../Components/index";
import { useMobile } from "../Hooks/useMobile";
import MobileMenu from "../Components/Nav/MobileMenu";
import { NavProvider } from "../Hooks/NavProvider";

export const Home: React.FC = () => {
  const isMobile = useMobile();
  return (
    <>
      <NavProvider>
        {isMobile ? <MobileMenu /> : <Nav />}
        <Container maxWidth="lg">
          <Inicio />
          <Sobre isMobile={isMobile} />
          <Formacoes isMobile={isMobile} />
          <Habilidades isMobile={isMobile} />
          <Experiencia isMobile={isMobile} />
          <Contato isMobile={isMobile} />
        </Container>
      </NavProvider>
    </>
  );
};
