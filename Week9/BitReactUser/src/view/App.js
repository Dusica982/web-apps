import React from "react";
import Header from "./Header";
import UserLists from "./UserLists";
import Footer from "./Footer";
import fetchUsers from "../shared/services/userService";
import GridStructure from "./GridStructure";
import InputButton from "./Input";
import Loading from "./Loading";

class App extends React.Component {
  constructor(props) {
    super(props);

    const savedData = localStorage.getItem("isGrid")
    const savedIsGrid = JSON.parse(savedData) //ovim je dohvacen local storage

    this.state = {
      users: [],
      isGrid: savedIsGrid || false,
      state: "",
      inputValue: "",
      stateLoading: true
    };
  }

  componentDidMount() {
    this.fetchAndSaveUsers();

  }

  fetchAndSaveUsers = () => {
    this.setState({ stateLoading: true })
    fetchUsers()
      .then(users => {
        this.setState({ users, stateLoading: false })
      });
  }

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

    const main = (
      <React.Fragment>
        <InputButton changesOnInput={this.changesOnInput} value={this.state.inputValue} />

        <div className="wrapper container">
          {this.state.isGrid ? <GridStructure users={filteredUsers} /> : <UserLists users={filteredUsers} />}
        </div>
      </React.Fragment>
    );

    return (
      <React.Fragment>
        <Header GridOrList={this.state.isGrid} onClickEvent={this.ChangingState} onReload={this.fetchAndSaveUsers} />
        {this.state.stateLoading ? <Loading /> : main}
        <Footer />
      </React.Fragment>
    );
  }
}
export default App;