import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import Users from './pages/Users/Users';
import UsersId from './pages/UsersId/UsersId';
import Header from './components/Header';
import Footer from './components/Footer';
import UsersCreate from './pages/UsersCreate/UsersCreate';

class App extends React.Component {

  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/users/create" component={UsersCreate} />
          <Route path="/users/:userId" component={UsersId} />
          <Route path="/users" component={Users} />
          <Redirect to="/users" />
        </Switch>
        <Footer />
      </>
    )
  }
}
export default App;
