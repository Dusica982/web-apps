import React from 'react'
import './UsersCreateStyle.css';
import { sendValidatedData } from '../../services/usersService';

class UsersCreate extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: "",
            errorMsg: ""
        }
    }

    componentDidMount() {

    }

    onChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
        // console.log(name, value);
    }

    getData = () => {
        const { name, email } = this.state;
        let apiData = {
            name: name,
            email: email
        }
        sendValidatedData(apiData)
            .then((data) => {
                this.props.history.push('/users');
            })
    }

    validation = (e) => {
        const { name, email } = this.state;

        if (name.length < 3) {
            e.preventDefault()
            return (
                this.setState({ errorMsg: "You need minimum 3 characters! Try again:)" })
            )
        }

        if (!email.includes("@")) {
            e.preventDefault()
            return (
                this.setState({ errorMsg: "You need monkey! Try again :)" })
            )
        }

        if (email.indexOf(".") < email.indexOf("@")) {
            e.preventDefault()
            return (
                this.setState({ errorMsg: "Email is not valid! Try again :)" })
            )
        }
        this.getData();
    }

    render() {

        return (
            <form className="container">
                <label for="name">Name</label>
                <input onChange={this.onChange} id="name" name="name" type="text" value={this.state.name} />
                <label for="email">Email</label>
                <input onChange={this.onChange} id="email" name="email" type="email" value={this.state.email} />
                <input onClick={this.validation} type="submit" />
                <p>{this.state.errorMsg}</p>
            </form >
        )
    }
}

export default UsersCreate;