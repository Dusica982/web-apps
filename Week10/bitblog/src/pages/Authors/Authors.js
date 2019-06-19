import React from 'react';
import ListOfAuthors from './ListOfAuthors';
import getUserInfo from '../../shared/Fetch/fetchInfoUser';

class Authors extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            authors: []
        }
    }

    componentDidMount() {
        getUserInfo()
            .then((data) => {
                console.log(data);
                this.setState({
                    authors: data
                })
            })
    }

    render() {
        return (
            <>
                <div className="container author-wrapper">
                    <h2>AUTHORS (6)</h2>
                    <ListOfAuthors authors={this.state.authors} />
                </div>
            </>
        )
    }
}

export default Authors; 