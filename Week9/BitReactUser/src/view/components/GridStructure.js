import React from "react";

import "./GridStructure.css";

const GridStructure = props => {
  const arrOfUsers = props.users.map((oneUser, i) => {
    return (
      <div className="userGrid" key={i}>
        <img src={oneUser.img} alt="userImage" />
        <div className={oneUser.gender}>
          <p className="usernameGrid">{oneUser.setFullName()}</p>
          <p className="emailGrid">{oneUser.hideEmail()}</p>
          <p>Birth date {oneUser.setDate()}</p>
        </div>
      </div>
    );
  });

  return arrOfUsers;
};

export default GridStructure;
