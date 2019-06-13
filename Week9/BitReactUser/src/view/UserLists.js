import React from 'react';
import Boxpost from './Boxpost';


const UserLists = (props) => {
    return (
        <React.Fragment>
            {props.users.map((user, i) => (
                <Boxpost
                    key={i}
                    name={user.name.first}
                    email={user.email}
                    img={user.picture.thumbnail}
                    date={user.dob.date}
                />
            ))}
        </React.Fragment>
    )

}

export default UserLists;
