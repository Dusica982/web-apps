import React from 'react';
import { Link } from 'react-router-dom';

const ListOfAuthors = () => {
    return (
        <div className=" container list-of-users">

            <Link to="/info-user/:postId"><p>Name Surname</p></Link>
            <Link to="/info-user/:postId"><p>Name Surname</p></Link>
            <Link to="/info-user/:postId"><p>Name Surname</p></Link>
            <Link to="/info-user/:postId"><p>Name Surname</p></Link>
            <Link to="/info-user/:postId"><p>Name Surname</p></Link>
            <Link to="/info-user/:postId"><p>Name Surname</p></Link>
        </div>
    )

}

export default ListOfAuthors;