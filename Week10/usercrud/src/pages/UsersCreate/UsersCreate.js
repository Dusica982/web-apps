import React from 'react'
import './UsersCreateStyle.css';

class UsersCreate extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }

    componentDidMount() {

    }

    errorHandler() {
        const nameInput = document.querySelector("#name").value;
        const emailInput = document.querySelector("#email");
        const paraInput = document.querySelector("#para");

        if (nameInput) {

            console.log("error");
        }
    }

    render() {



        return (
            <form className="container" method="get">
                <label for="name">Name</label>
                <input id="name" name="name" type="text" />
                <label for="email">Email</label>
                <input id="email" name="email" type="email" />
                <input onClick={this.errorHandler} type="Submit" />

                <p id="para"></p>
            </form >
        )
    }
}

export default UsersCreate;