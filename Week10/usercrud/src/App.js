import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import Users from './pages/Users/Users';
import UsersId from './pages/UsersId/UsersId';

class App extends React.Component {

  render() {
    return (
      <div>
        <Switch>
          <Route path="/users/:userId" component={UsersId} />
          <Route path="/users" component={Users} />

          <Redirect to="/users" />
        </Switch>
      </div >
    )
  }
}
export default App;
