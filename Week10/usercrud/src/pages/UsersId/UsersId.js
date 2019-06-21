import React from 'react';
import { getUser } from '../../services/usersService';
import './UsersIdStyle.css';
import { fetchDeleteUser } from '../../services/usersService';

class UsersId extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            user: {}
        }
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        getUser(this.props.match.params.userId)
            .then((user) => this.setState({ user }))
    }

    onChange() {
        fetchDeleteUser(this.props.match.params.userId)
            .then((response) => {
                console.log(response);
                this.props.history.push('/users');
            })
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
                <button onClick={this.onChange} >Delete</button>
            </form>
        )
    }
}
export default UsersId;
