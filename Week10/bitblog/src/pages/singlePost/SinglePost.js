import React from 'react';
import { Link } from 'react-router-dom';

const SinglePost = () => {

    return (
        <>
            <Link to="/home">Back</Link>
            <div className='singlePostWrapper'>
                <h2 className="singlePostTitle">Post title 1</h2>
                <Link className="singlePostTitle" to="/info-user">Author name</Link>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias architecto repellendus numquam neque qui, dolor pariatur asperiores eligendi, atque quod eveniet consequatur. Numquam expedita velit minus veritatis molestiae est enim itaque ratione totam, placeat fuga cumque perspiciatis eius ducimus? Quis ipsum ab officia placeat esse. Facere totam a earum sequi!
</p>
            </div>
        </>
    )

}

export default SinglePost;