import React from "react";
import About from './pages/About';
import { Route, Switch } from "react-router-dom";
import Homepage from "./pages/Homepage"

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/" component={Homepage} />
      </Switch>
    )
  }
}

export default App;