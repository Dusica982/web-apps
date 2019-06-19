import React from 'react';
import { Link } from 'react-router-dom'

const PostItem = (props) => {
    // const post = props.post
    const { post } = props
    return (
        <div className="singlePost">
            <Link to={`/posts/${post.id}`}>
                <h2>{post.title}</h2>
            </Link>

            <p>{post.body}</p>
        </div>
    )
}

export default PostItem;