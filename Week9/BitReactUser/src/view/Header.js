import React from "react";
import "./Header.css";
// import fetchUsers from "../shared/services/userService";

const Header = (props) => {
  return (
    <header className="header">
      <h1>
        <a href="#" onClick={props.backToHome} className="logo">Bit Persons</a>
      </h1>

      <a className="about allLinks" href="#" onClick={props.about}>About</a>

      <a onClick={props.onReload} className="refreshButton allLinks" href="#">
        <i className="fas fa-redo-alt" />
      </a>
      {props.GridOrList ? (
        <a onClick={props.onClickEvent} href="#" className="buttonList allLinks">
          <i className="fa fa-list" aria-hidden="true" />
        </a>
      ) : (
          <a onClick={props.onClickEvent} href="#" className="gridList allLinks">
            <i className="fa fa-th" aria-hidden="true" />
          </a>
        )}

    </header>
  );
};

export default Header;
