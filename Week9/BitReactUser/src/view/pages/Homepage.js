import React from "react";
import Header from "../components/Header";
import UserLists from "../components/UserLists";
import Footer from "../components/Footer";
import fetchUsers from "../../shared/services/userService";
import GridStructure from "../components/GridStructure";
import InputButton from "../components/Input";
import Loading from "../components/Loading";
import About from './About';
import { Route, Switch } from "react-router-dom";

class Homepage extends React.Component {

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
        this.setState({ inputValue: e.target.value })
    };

    aboutPage = () => {
        this.setState({ aboutPage: true })
    };

    render() {
        const filteredUsers = this.state.users.filter(user => {
            const fullName = (user.name + user.last).toLowerCase();
            return fullName.includes(this.state.inputValue.toLowerCase())
        });

        const main = (
            <>
                <InputButton changesOnInput={this.changesOnInput} value={this.state.inputValue} />

                <div className="wrapper container" >
                    {this.state.isGrid ? <GridStructure users={filteredUsers} /> : <UserLists users={filteredUsers} />}
                </div>
            </>
        );

        return (
            <>
                <Header backToHome={this.homePage} GridOrList={this.state.isGrid} onClickEvent={this.ChangingState} onReload={this.fetchAndSaveUsers} about={this.aboutPage} />
                {this.state.stateLoading ? <Loading /> : main}
                <Footer />
            </>
        )
    }
};

export default Homepage;