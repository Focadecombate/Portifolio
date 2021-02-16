import React from "react";
import { Paper } from "@material-ui/core";
import { Home } from "./Page/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Webfont from "webfontloader";
import ContextsProviders from "./Hooks/Contexts";

Webfont.load({
  google: {
    families: ["Staatliches", "Space Grotesk"],
  },
});

const App: React.FC = () => {
  return (
    <ContextsProviders>
      <BrowserRouter>
        <Switch>
          <Paper
            style={{
              borderRadius: 0,
              overflowX: "hidden",
              height: "100vh",
            }}
          >
            <Route path="/" exact component={Home} />
          </Paper>
        </Switch>
      </BrowserRouter>
    </ContextsProviders>
  );
};

export default App;
