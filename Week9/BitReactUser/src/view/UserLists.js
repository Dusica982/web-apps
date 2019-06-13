import React from 'react';
import { User } from '../shared/enitities/User';


const UserLists = (props) => {
    console.log(props.users)

    const arrOfUsers = props.users.map((oneUser, i) => {
        return (

            <div className="user" key={i}>
                <img src={oneUser.img} />
                <div>
                    <p>{oneUser.setFullName()}</p>
                    <i className="fa fa-envelope" aria-hidden="true">{oneUser.hideEmail()}</i>
                    <p>
                        <i className="fa fa-birthday-cake" aria-hidden="true">{oneUser.date}</i>
                    </p>
                </div>
            </div>
        )
    })
    console.log(arrOfUsers);

    return arrOfUsers;
}

export default UserLists;
