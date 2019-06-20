import React from 'react'
import { getUsers } from '../../services/usersService';
import UsersStyle from './UsersStyle.css';
import { Link } from 'react-router-dom';
import { getUser } from '../../services/usersService'

class Users extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        getUsers()
            .then((users) => this.setState({ users }))
    }

    render() {

        if (!this.state.users) {
            return <p> Loading data... </p>
        }
        return (

            < table >
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>email</th>
                    <th>city</th>
                </tr>
                {
                    this.state.users.map((elem) => {
                        console.log(this.props.match)
                        return (<tr>
                            <td>{elem.id}</td>
                            <td><Link to={"/users/" + elem.id}>{elem.name}</Link></td>
                            <td>{elem.email}</td>
                            <td>{elem.ity}</td>
                        </tr>)
                    })
                }
            </table >

        )
    }
}

export default Users;