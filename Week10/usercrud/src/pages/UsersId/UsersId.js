import React from 'react';
import { getUser } from '../../services/usersService';

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

            <form>
                <label></label>
                <input></input>
                <button>Submit</button>
            </form>
        )
    }
}

export default UsersId;