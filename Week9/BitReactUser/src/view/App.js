import React from "react";
import Header from "./Header";
import UserLists from "./UserLists";
import Footer from "./Footer";
import fetchUsers from "../shared/services/userService";
import GridStructure from "./GridStructure";
import InputButton from "./Input";

class App extends React.Component {
  constructor(props) {
    super(props);

    const savedData = localStorage.getItem("isGrid")
    const savedIsGrid = JSON.parse(savedData) //ovim je dohvacen local storage

    this.state = {
      users: [],
      isGrid: savedIsGrid || false,
      state: "",
      inputValue: ""
    };
  }

  componentDidMount() {
    this.fetchAndSaveUsers();
  }

  fetchAndSaveUsers = () => fetchUsers().then(users => this.setState({ users }));

  ChangingState = e => {
    this.setState(prevState => {
      const newIsGrid = !prevState.isGrid;
      localStorage.setItem("isGrid", newIsGrid);

      return {
        isGrid: newIsGrid
      };
    });
  };

  changesOnInput = e => {
    this.setState({ inputValue: e.target.value });
  };

  render() {
    const filteredUsers = this.state.users.filter(user => user.name.includes(this.state.inputValue));

    return (
      <React.Fragment>
        <Header GridOrList={this.state.isGrid} onClickEvent={this.ChangingState} onReload={this.fetchAndSaveUsers} />
        <InputButton changesOnInput={this.changesOnInput} value={this.state.inputValue} />

        <div className="wrapper container">
          {this.state.isGrid ? <GridStructure users={filteredUsers} /> : <UserLists users={filteredUsers} />}
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;

// const { users, inputValue } = this.state;

// const usersFiltered = users.filter(user => user.name.first.toLowerCase().includes(inputValue.toLowerCase()));

// if (this.state.users.length === 0) {
//   return (
//     <React.Fragment>
//       <Header GridOrList={this.state.isGrid} onClickEvent={this.ChangingState} onReload={this.fetchAndSaveUsers} />
//       <InputButton changesOnInput={this.changesOnInput} value={this.state.inputValue} />

//       <div className="wrapper container">
//         {this.state.isGrid ? <GridStructure users={this.state.users} /> : <UserLists users={this.state.users} />}
//       </div>
//       <Footer />
//     </React.Fragment>
//   );
// } else {
//   return (
//     <React.Fragment>
//       <Header GridOrList={this.state.isGrid} onClickEvent={this.ChangingState} onReload={this.fetchAndSaveUsers} />
//       <InputButton changesOnInput={this.changesOnInput} value={this.state.inputValue} />

//       <div className="wrapper container">
//         {this.state.isGrid ? <GridStructure users={this.state.users} /> : <UserLists users={this.state.users} />}
//       </div>
//       <Main allUsers={usersFiltered} layout={this.state.layout} />
//       <Footer />
//     </React.Fragment>
//   );
// }
