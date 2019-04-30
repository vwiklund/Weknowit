import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./Home";
import Searchbycountry from "./Searchbycountry";
import Searchbycity from "./Searchbycity";
import { NoMatch } from "./NoMatch";
import "./App.css";
import Searchbycityresaults from "./components/Searchbycityresaults";
import Searchbycountryresaults from "./components/Searchbycountryresaults";

//Declare routes
class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />

            <Route path="/searchbycity" component={Searchbycity} />

            <Route path="/searchbycountry" component={Searchbycountry} />
            <Route
              path="/searchbycityresaults"
              component={Searchbycityresaults}
            />
            <Route
              path="/searchbycountryresaults"
              component={Searchbycountryresaults}
            />

            <Route component={NoMatch} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
