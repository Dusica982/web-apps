import React from 'react';
import SinglePost from './SinglePost';
import AuthorsOtherPosts from './AuthorsOtherPosts';

const SinglePostAuthorBox = () => {
    return (
        <>
            <main>
                <div className="container">
                    <SinglePost />
                    <AuthorsOtherPosts />
                </div>
            </main>
        </>
    )
}

export default SinglePostAuthorBox;