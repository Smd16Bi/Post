import React from 'react'
import {NavLink } from "react-router-dom";

function Navbar() {
    return (
        <ul className="navbar">
            <li className="navbar_item">
                <NavLink to="/about">About</NavLink>
            </li>
            <li className="navbar_item">
                <NavLink to="/posts">Posts</NavLink>
            </li>
        </ul>
    )
}

export default Navbar