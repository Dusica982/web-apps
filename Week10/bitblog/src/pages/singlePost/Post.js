import React from 'react';
import SinglePostAuthorBox from './SinglePostAuthorBox';

class Posts extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {

        return (
            <>
                Post id => {this.props.match.params.postId}
                <SinglePostAuthorBox />
            </>
        )
    }
}

export default Posts;