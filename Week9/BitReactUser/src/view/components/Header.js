import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
// import fetchUsers from "../shared/services/userService";

const Header = (props) => {
  return (
    <header className="header">
      <h1>
        <Link to='/' onClick={props.backToHome} className="logo">Bit Persons</Link>
      </h1>

      <Link className="about allLinks" to="/about" onClick={props.about}>About</Link>

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
