import { Link } from "react-router-dom";
import React from "react";

const Nav = () => {
    return (
        <nav>
        <Link to="/">Home</Link>
        <Link to="/cuts">Cuts</Link>
        <Link to="/about">About</Link>
        </nav>
    );
}

export default Nav;