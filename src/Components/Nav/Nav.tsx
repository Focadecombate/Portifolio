import React from "react";
import { Box, Container, IconButton, Tab, Tabs } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import { useUpdateTheme, useTheme } from "../../Hooks/ThemeProvider";
import { NavHashLink } from "react-router-hash-link";
import { useNav, useUpdateNav } from "../../Hooks/NavProvider";
import { WbSunny, Brightness2 } from "@material-ui/icons";

export const Nav: React.FC = () => {
  const useStyles = makeStyles((theme) => ({
    navBar: {
      width: "100%",
      margin: 0,
      padding: "1%",
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
    { title: "Inicio", link: "#inicio" },
    { title: "Sobre Mim", link: "#sobre" },
    { title: "Formações", link: "#formacoes" },
    { title: "Habilidades", link: "#habilidades" },
    { title: "Experiência", link: "#experiencia" },
    { title: "Contato", link: "#contato" },
  ];

  const selected = useNav();

  const setNav = useUpdateNav();

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setNav(newValue);
  };

  const classes = useStyles();

  const changeTheme = useUpdateTheme();
  const theme = useTheme();
  return (
    <>
      <Box
        display="flex"
        flexDirection="row"
        flexWrap="nowrap"
        alignItems="center"
        className={classes.navBar}
      >
        <Container maxWidth="lg" style={{ display: "flex" }}>
          <Tabs
            className={classes.label}
            value={selected}
            aria-label="NavBar"
            onChange={handleChange}
            textColor="primary"
            selectionFollowsFocus
          >
            {navLinks.map((link, index) => (
              <Tab
                component={NavHashLink}
                smooth
                value={index}
                to={link.link}
                key={link.link}
                onClick={() => {
                  setNav(index);
                }}
                label={link.title}
              />
            ))}
          </Tabs>
          <IconButton onClick={changeTheme}>
            {theme ? <WbSunny /> : <Brightness2 />}
          </IconButton>
        </Container>
      </Box>
    </>
  );
};
