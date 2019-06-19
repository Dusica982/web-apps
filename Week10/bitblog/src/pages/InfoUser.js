import React from 'react';
import { Link } from "react-router-dom";

import InfoAddress from './InfoAuthor/InfoAddress';
import InfoCompany from './InfoAuthor/InfoCompany';
import InfoNameSurname from './InfoAuthor/InfoNameSurname';
import { fetchAuthor } from '../shared/Fetch/authorService';

class InfoUser extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            author: null,
        }
    }

    componentDidMount() {
        const userId = this.props.match.params.id;

        fetchAuthor(userId)
            .then(author => this.setState({ author }))
    }

    render() {
        if (!this.state.author) {
            return <h2>Loading Author...</h2>
        }

        return (
            <div className="container">
                <Link to="/authors">Back</Link>
                <InfoNameSurname author={this.state.author} />
                <InfoAddress author={this.state.author} />
                <InfoCompany author={this.state.author} />
            </div>
        )
    }
}

export default InfoUser;