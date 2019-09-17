import React from "react";
import { Switch, Route } from "react-router-dom";
import HompePage from "./pages/homepage/homepage.component";

import "./App.css";

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HompePage} />
        <Route path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
