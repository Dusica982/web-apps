import React from 'react';

const AuthorsOtherPosts = (props) => {
    let authorsPosts = props.authorPosts;

    return (
        <>
            <div className="otherPosts">
                <h3>3 more posts from same author</h3>
                {
                    authorsPosts.map((onePost) => {
                        return <a href="#">{onePost.title}</a>
                    })
                }
            </div>
        </>
    )
}

export default AuthorsOtherPosts;