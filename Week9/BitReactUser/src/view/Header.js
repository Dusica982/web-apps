import React from "react";
import "./Header.css";
// import fetchUsers from "../shared/services/userService";

const Header = props => {
  // console.log(fetchUsers);

  return (
    <header className="header">
      <h1>{"Bit Persons"}</h1>
      <a onClick={props.onReload} className="refreshButton" href="#">
        <i className="fas fa-redo-alt" />
      </a>
      {props.GridOrList ? (
        <a onClick={props.onClickEvent} href="#" className="buttonList">
          <i className="fa fa-list" aria-hidden="true" />
        </a>
      ) : (
        <a onClick={props.onClickEvent} href="#" className="gridList">
          <i className="fa fa-th" aria-hidden="true" />
        </a>
      )}
    </header>
  );
};

export default Header;
