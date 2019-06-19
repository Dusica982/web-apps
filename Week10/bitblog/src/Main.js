import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Homepage/Home";
import Post from './pages/singlePost/Post';
import Authors from './pages/Authors/Authors';
import InfoUser from './pages/InfoUser';
import About from './pages/About/About';
import ApiPost from './shared/userposts';


class Main extends React.Component {
  render() {



    return (
      <main>
        <div className="container">
          <Switch>

            <Route path='/posts/:postId' component={Post} />
            <Route path='/authors/:id' component={InfoUser} />
            <Route path='/authors' component={Authors} />
            <Route path='/about' component={About} />
            <Route path='/home' component={Home} />
            <Redirect to="/home" />
          </Switch>
        </div>
      </main>
    )
  }
}

export default Main;
