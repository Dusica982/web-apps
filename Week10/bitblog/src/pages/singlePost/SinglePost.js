import React from 'react';
import { Link } from 'react-router-dom';

const SinglePost = (props) => {

    return (
        <>
            <Link to="/home">Back</Link>
            <div className='singlePostWrapper'>
                <h2 className="singlePostTitle">{props.authorsSinglePost.title}</h2>
                <Link className="singlePostTitle" to="/info-user">{props.authorName.name}</Link>
                <p>{props.authorsSinglePost.post}</p>
                {console.log(props)}
            </div>
        </>
    )
}

export default SinglePost;