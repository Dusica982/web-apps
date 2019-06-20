import React from 'react'
import { getUsers } from '../../services/usersService';
import UsersStyle from './UsersStyle.css'

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
                        console.log(this.state)
                        return (<tr>
                            <td>{elem.id}</td>
                            <td>{elem.name}</td>
                            <td>{elem.email}</td>
                            <td>{elem.city}</td>
                        </tr>)
                    })
                }
            </table >

        )
    }
}

export default Users;