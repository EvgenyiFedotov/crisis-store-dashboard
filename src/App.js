import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { PageAtoms } from "./pages/atoms";

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/atoms" exact component={PageAtoms} />
        <Route path="*">
          <div>Page not found</div>
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
