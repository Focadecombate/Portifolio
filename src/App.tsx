import React from "react";
import { Paper } from "@material-ui/core";
import { Home } from "./Page/Home";
import { ThemeProvider } from "./utils/ThemeProvider";
import { LanguageProvider } from "./utils/LanguageProvider";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Webfont from "webfontloader";

Webfont.load({
  google: {
    families: ["Staatliches", "Space Grotesk"],
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
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
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
