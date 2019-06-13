import React from 'react';
import { User } from '../shared/enitities/User';


const UserLists = (props) => {
    console.log(props.users)

    const arrOfUsers = props.users.map((oneUser, i) => {
        return (

            <div className="user" key={i}>
                <img src={oneUser.img} />
                <div>
                    <p>{oneUser.name}</p>
                    <p>{oneUser.hideEmail()}</p>
                    <p>{oneUser.date}</p>
                </div>
            </div>
        )
    })
    console.log(arrOfUsers);

    return arrOfUsers;
}

export default UserLists;
