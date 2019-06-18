import React from 'react';
import ListOfAuthors from './ListOfAuthors';

class Authors extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <>
                <div className="container author-wrapper">
                    <h2>AUTHORS (6)</h2>
                    <ListOfAuthors />
                </div>
            </>
        )
    }
}

export default Authors; 