import React from 'react';
import { Link } from 'react-router-dom';

const ListOfAuthors = (props) => {
    return (
        <div className=" container list-of-users">
            {props.authors.map((post) => {
                return (
                    <Link to={`/info-user/${post.id}`} >
                        <p>{post.name} {post.username}</p>
                    </Link>
                )
            })
            }
        </div>
    )
}
export default ListOfAuthors;