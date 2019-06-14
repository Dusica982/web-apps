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
      users: [],
      isGrid: false,

    }
  }

  componentDidMount() {
    this.fetchAndSaveUsers();
  }

  fetchAndSaveUsers = () => (
    fetchUsers()
      .then(users => this.setState({ users }))
  )

  ChangingState = (e) => {

    this.setState((prevState) => {
      return {
        isGrid: !prevState.isGrid
      }
    })
  }

  render() {
    return (
      <React.Fragment>
        <Header GridOrList={this.state.isGrid} onClickEvent={this.ChangingState} onReload={this.fetchAndSaveUsers} />
        <div className="wrapper container">
          {
            this.state.isGrid
              ? <GridStructure users={this.state.users} />
              : <UserLists users={this.state.users} />
          }
        </div >
        <Footer />
      </React.Fragment >
    )
  }
}

export default App;
