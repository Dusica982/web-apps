import React from 'react';
import { getUser } from '../../services/usersService';
import './UsersIdStyle.css';


class UsersId extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            user: {}
        }
    }

    componentDidMount() {
        getUser(this.props.match.params.userId)
            .then((user) => this.setState({ user }))
    }

    render() {
        return (

            <form className="container">
                <label for="name">Name</label>
                <input id="name" type="text" name="name" value={this.state.user.name} disabled />

                <label for="email">Email</label>
                <input id="email" type="email" name="email" value={this.state.user.email} disabled />

                <label for="city">City</label>
                <input id="city" type="text" name="city" value={this.state.user.city} disabled />

                <button>Edit</button>
                <button>Delete</button>
            </form>
        )
    }
}
export default UsersId;
