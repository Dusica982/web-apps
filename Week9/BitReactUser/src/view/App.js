import React from "react";
import Header from "./Header";
import UserLists from "./UserLists";
import Footer from "./Footer";
import fetchUsers from "../shared/services/userService";
import GridStructure from "./GridStructure";

class App extends React.Component {
  constructor(props) {
    super(props);

    const savedIsGrid = localStorage.getItem("isGrid"); //ovim je dohvacen local storage

    this.state = {
      users: [],
      isGrid: typeof savedIsGrid !== "undefined" ? JSON.parse(savedIsGrid) : false
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

  render() {
    return (
      <React.Fragment>
        <Header GridOrList={this.state.isGrid} onClickEvent={this.ChangingState} onReload={this.fetchAndSaveUsers} />
        <div className="wrapper container">
          {this.state.isGrid ? <GridStructure users={this.state.users} /> : <UserLists users={this.state.users} />}
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;

// import React from "react";
// import Header from "./Header";
// import UserLists from "./UserLists";
// import Footer from "./Footer";
// import fetchUsers from "../shared/services/userService";
// import GridStructure from "./GridStructure";

// class App extends React.Component {
//   constructor(props) {
//     super(props);

//     const savedIsGrid = localStorage.getItem("isGrid"); //ovim je dohvacen local storage

//     this.state = {
//       users: [],
//       isGrid: typeof savedIsGrid !== "undefined" ? JSON.parse(savedIsGrid) : false
//     };
//   }

//   componentDidMount() {
//     this.fetchAndSaveUsers();
//   }

//   fetchAndSaveUsers = () => fetchUsers().then(users => this.setState({ users }));

//   ChangingState = e => {
//     this.setState(prevState => {

//       const newIsGrid = !prevState.isGrid;

//       localStorage.setItem("isGrid", newIsGrid);

//       return {
//         isGrid: newIsGrid
//       };
//     });
//   };

//   render() {
//     return (
//       <React.Fragment>
//         <Header GridOrList={this.state.isGrid} onClickEvent={this.ChangingState} onReload={this.fetchAndSaveUsers} />
//         <div className="wrapper container">
//           {this.state.isGrid ? <GridStructure users={this.state.users} /> : <UserLists users={this.state.users} />}
//         </div>
//         <Footer />
//       </React.Fragment>
//     );
//   }
// }

// export default App;
