import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { PageAtoms } from "./pages/atoms";
import { PageMain } from "./pages/main";
import { PageRoot } from "./pages/root";

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact component={PageRoot} />
        <Route path="/main" component={PageMain} />
        <Route path="/atoms" exact component={PageAtoms} />
        <Route path="*">
          <div>Page not found</div>
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
