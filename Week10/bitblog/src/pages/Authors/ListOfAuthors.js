import React from 'react';
import { Link } from 'react-router-dom';

const ListOfAuthors = (props) => {
    return (
        <div className=" container list-of-users">
            {props.authors.map((author) => {
                return (
                    <Link to={`/authors/${author.id}`} >
                        <p>{author.name} {author.username}</p>
                    </Link>
                )
            })
            }
        </div>
    )
}
export default ListOfAuthors;