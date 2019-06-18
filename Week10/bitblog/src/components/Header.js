import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <header className="container">

                <h1><a href="http://localhost:3000/#/home">BIT BLOG</a></h1>

                <nav>
                    <Link to="/home">Home</Link>
                    <Link to="/authors">Authors</Link>
                    <Link to="/about">About</Link>
                </nav>
            </header>
        </>
    )
}

export default Header;