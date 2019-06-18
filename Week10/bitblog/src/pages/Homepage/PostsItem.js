import React from 'react';
import { Link } from 'react-router-dom'

const PostItem = (props) => {
    console.log(props);

    return (
        <div className="singlePost">
            <Link to={`/posts/${props.post.id}`}>
                <h2>{props.post.title}</h2>
            </Link>

            <p>Lorem ipsum...</p>
        </div>
    )
}

export default PostItem;