import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton } from "@material-ui/core";
import { useUpdateTheme } from "../../Hooks/ThemeProvider";
import {
  Brightness2,
  Home,
  Info,
  LibraryBooks,
  Mail,
  Work,
  List as ListIcon,
} from "@material-ui/icons";
import { NavHashLink } from "react-router-hash-link";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

type Anchor = "top" | "left" | "bottom" | "right";

export default function MobileMenu() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const changeTheme = useUpdateTheme();

  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setOpen(open);
  };

  const navLinks = [
    { title: "Inicio", link: "#inicio", icon: <Home /> },
    { title: "Sobre Mim", link: "#sobre", icon: <Info /> },
    { title: "Formações", link: "#formacoes", icon: <LibraryBooks /> },
    { title: "Habilidades", link: "#habilidades", icon: <ListIcon /> },
    { title: "Experiência", link: "#experiencia", icon: <Work /> },
    { title: "Contato", link: "#contato", icon: <Mail /> },
  ];

  const list = (anchor: Anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {navLinks.map((text) => (
          <ListItem
            component={NavHashLink}
            to={text.link}
            smooth
            button
            key={text.title}
          >
            <ListItemIcon>{text.icon}</ListItemIcon>
            <ListItemText primary={text.title} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem button onClick={changeTheme}>
          <ListItemIcon>
            <Brightness2 />
          </ListItemIcon>
          <ListItemText primary={"Noturno"} />
        </ListItem>
      </List>
    </div>
  );

  return (
    <>
      <IconButton
        style={{ padding: "12px 12px", position: "fixed", margin: 0 }}
        color="inherit"
        aria-label="open drawer"
        onClick={toggleDrawer(true)}
        onKeyDown={toggleDrawer(false)}
        edge="start"
      >
        <MenuIcon />
      </IconButton>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {list("left")}
      </Drawer>
    </>
  );
}
