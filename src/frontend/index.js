import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Bucket from "./components/Bucket";
import Home from "./components/Home";

const App = () => (
  <Router>
    <>
      <Route exact path="/" component={Home} />
      <Route path="/bucket" component={Bucket} />
    </>
  </Router>
);

render(<App />, document.getElementById("root"));
