import React from "react";
import { withStyles, TabProps, Tab } from "@material-ui/core";

export const StyledTab = withStyles((theme) => ({
  root: {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.body2.fontWeight,
    fontSize: theme.typography.body2.fontSize,
    "&:focus": {
      opacity: 0.5,
    },
  },
}))((props: TabProps) => <Tab {...props} />);
