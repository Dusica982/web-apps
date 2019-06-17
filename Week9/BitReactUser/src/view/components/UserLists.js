import React from "react";
import "./UserList.css";

const UserLists = props => {
  // console.log(props.users)

  const arrOfUsers = props.users.map((oneUser, i) => {
    return (
      <div className={`user ${oneUser.gender}`} key={i} >
        <img src={oneUser.img} />
        <div>
          <p>{oneUser.setFullName()}</p>
          <i className="fa fa-envelope" aria-hidden="true">
            {" "}
            email: {oneUser.hideEmail()}
          </i>
          <p>
            <i className="fa fa-birthday-cake" aria-hidden="true">
              {" "}
              {oneUser.setDate()}
            </i>
          </p>
        </div>
      </div >
    );
  });

  return arrOfUsers;
};
export default UserLists;
