import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import Users from './pages/Users/Users';

class App extends React.Component {

  render() {
    return (
      <div>
        <Switch>
          <Route path="/users" component={Users} />

          <Redirect to="/users" />
        </Switch>
      </div>
    )
  }
}
export default App;
