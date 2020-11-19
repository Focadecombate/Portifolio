import React from "react";
import { withStyles, Tabs, TabsProps } from "@material-ui/core";

export const StyledTabs = withStyles((theme) => ({
  indicator: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
    "& > span": {
      maxWidth: 40,
      width: "100%",
      minHeight: 20,
      backgroundColor: theme.palette.secondary.main,
    },
  },
}))((props: TabsProps) => (
  <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />
));
