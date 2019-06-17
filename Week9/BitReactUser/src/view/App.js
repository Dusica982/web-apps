import React from "react";
import Header from "./Header";
import UserLists from "./UserLists";
import Footer from "./Footer";
import fetchUsers from "../shared/services/userService";
import GridStructure from "./GridStructure";
import InputButton from "./Input";
import Loading from "./Loading";
import About from './About';

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
      stateLoading: true,
      aboutPage: false
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

  aboutPage = () => {
    this.setState({ aboutPage: true })
  }
  homePage = () => {
    this.setState({ aboutPage: false })
  }

  render() {
    const filteredUsers = this.state.users.filter(user => user.name.includes(this.state.inputValue));

    const main = (
      <>
        <InputButton changesOnInput={this.changesOnInput} value={this.state.inputValue} />

        {this.state.aboutPage === true ? <About /> : <div className="wrapper container">
          {this.state.isGrid ? <GridStructure users={filteredUsers} /> : <UserLists users={filteredUsers} />}
        </div>}
      </>
    );

    return (
      <>
        <Header backToHome={this.homePage} GridOrList={this.state.isGrid} onClickEvent={this.ChangingState} onReload={this.fetchAndSaveUsers} about={this.aboutPage} />
        {this.state.stateLoading ? <Loading /> : main}
        <Footer />
      </>
    );
  }
}
export default App;