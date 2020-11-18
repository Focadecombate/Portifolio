import React from "react";
import { Box, Container } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import { useUpdateTheme } from "../utils/ThemeProvider";
import { StyledTab } from "./Tab";
import { StyledTabs } from "./Tabs";
import { NavHashLink } from "react-router-hash-link";

export const Nav: React.FC = () => {
  const useStyles = makeStyles((theme) => ({
    navBar: {
      width: "100%",
      margin: 0,
      position: "fixed",
      backgroundColor: theme.palette.background.default,
    },
    label: {
      color: theme.palette.secondary.main,
      fontWeight: "bolder",
      fontSize: "4em",
      textDecoration: "none",
    },
  }));

  const navLinks = [
    { title: "Sobre Mim", link: "#sobre" },
    { title: "Formações", link: "#formacoes" },
    { title: "Habilidades", link: "#habilidades" },
    { title: "Experiência", link: "#experiencia" },
    { title: "Contato", link: "#contato" },
  ];

  const classes = useStyles();
  const changeTheme = useUpdateTheme();
  return (
    <>
      <Box
        display="flex"
        flexDirection="row"
        flexWrap="nowrap"
        alignItems="center"
        marginTop="2%"
        className={classes.navBar}
      >
        <Container
          maxWidth="lg"
          style={{
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <StyledTabs
            className={classes.label}
            textColor="inherit"
            aria-label="NavBar"
          >
            <NavHashLink
              smooth
              style={{ textDecoration: "none" }}
              to={"#inicio"}
            >
              <StyledTab label={"Inicio"} style={{ flexGrow: 2 }} />
            </NavHashLink>
            {navLinks.map((link) => (
              <NavHashLink
                smooth
                style={{ textDecoration: "none" }}
                to={link.link}
              >
                <StyledTab label={link.title} />
              </NavHashLink>
            ))}
            <StyledTab label="Noturno" onClick={changeTheme} />
          </StyledTabs>
        </Container>
      </Box>
    </>
  );
};
