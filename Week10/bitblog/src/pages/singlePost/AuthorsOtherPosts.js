import React from 'react';
import { Link } from 'react-router-dom';

const AuthorsOtherPosts = (props) => {
    let authorsPosts = props.authorPosts;

    return (
        <>
            <div className="otherPosts">
                <h3>3 more posts from same author</h3>
                {
                    authorsPosts.map((onePost) => {
                        return <Link to={"/posts/" + onePost.id}>{onePost.title}</Link>
                    })
                }
            </div>
        </>
    )
}

export default AuthorsOtherPosts;