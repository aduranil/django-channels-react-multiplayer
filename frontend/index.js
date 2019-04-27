import React from "react";
import ReactDOM from "react-dom";
import App from "./src/App";
import { BrowserRouter as Router, Route } from "react-router-dom";

const Root = () => {
  return (
    <Router>
      <Route path="/" component={App} />
    </Router>
  );
};

ReactDOM.render(<Root />, document.getElementById("app"));
