import React from 'react';
import Header from './Header'
import UserLists from './UserLists'
import Footer from './Footer'
import fetchUsers from '../shared/services/userService';
import GridStructure from './GridStructure';

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
        <div className="wrapper container">
          <UserLists users={this.state.users} />
        </div >
        <Footer />
      </React.Fragment >
    )
  }
}

export default App;
