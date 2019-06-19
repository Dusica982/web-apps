import React from 'react';
import { Link } from 'react-router-dom'

const PostItem = (props) => {
    console.log(props);

    // const { post } = props
    return (
        <div className="singlePost">
            <Link to={`/posts/${props.post.id}`}>
                <h2>{props.post.title}</h2>
            </Link>

            <p>{props.post.post}</p>
        </div>
    )
}

export default PostItem;