import React from 'react';
import './Header.css';
import fetchUsers from '../shared/services/userService';

const Header = (props) => {
    // console.log(fetchUsers);

    return (
        <header className="header">
            <h1>{"Bit Persons"}</h1>
            <a onClick={props.onReload} className="refreshButton" href="#"><i class="fas fa-redo-alt"></i></a>
            {
                props.GridOrList
                    ? <a onClick={props.onClickEvent} href="#" className="buttonList"><i className="fa fa-list" aria-hidden="true"></i></a>
                    : <a onClick={props.onClickEvent} href="#" className="gridList"><i className="fa fa-th" aria-hidden="true"></i></a>
            }
        </header>
    )
}

export default Header;