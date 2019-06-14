import React from 'react';
import './Header.css';
import App from './App';

const Header = (props) => {
    // const { GridOrList } = props;
    return (
        <header className="header">
            <h1>{"Bit Persons"}</h1>
            {
                props.GridOrList
                    ? <a onClick={props.onClickEvent} href="#" className="buttonList"><i className="fa fa-list" aria-hidden="true"></i></a>
                    : <a onClick={props.onClickEvent} href="#" className="gridList"><i className="fa fa-th" aria-hidden="true"></i></a>
            }
        </header>
    )
}

export default Header;