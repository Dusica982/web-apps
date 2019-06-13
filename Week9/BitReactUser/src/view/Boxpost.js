import React from 'react';

const Boxpost = (props) => {

    return (
        <div className="user">
            <img src={props.img} />
            <p>{props.name}</p>
            <p>{props.email}</p>
            <p>{props.date}</p>
        </div>
    )
}


export default Boxpost;
