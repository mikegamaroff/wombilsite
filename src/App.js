import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./css/main.css";
import "./css/noscript.css";
import PastWork from "./js/PastWork";
import Test from "./js/Test";
import Home from "./js/Home";

export class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <React.Fragment>
            <div className="App">
              {/*      <Route exact path="/test" component={Test} /> */}
              <Route exact path="/PastWork" component={PastWork} />
              <Route exact path="/" component={Home} />
            </div>
          </React.Fragment>
        </Switch>
      </Router>
    );
  }
}
export default App;
