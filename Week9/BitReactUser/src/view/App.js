import React from 'react';
import Header from './Header'
import UserLists from './UserLists'
import Footer from './Footer'
import users from '../shared/users';
import fetchUsers from '../shared/services/userService';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    fetchUsers()
      .then(users => this.setState({ users }))

  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <UserLists users={users} />
        <Footer />
      </React.Fragment >
    )
  }
}

export default App;
