import React from "react";
import "./Header.css";
import { FaUserCircle, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="header">

            <div className="logo-section">
                <img src="/logo.png" alt="logo" className="logo" />
                <h2>My Website</h2>
            </div>

            <nav className="nav-links">
                <a href="#">Home</a>
                <a href="#">Courses</a>
                <a href="#">Benefits</a>
                <a href="#">Tournaments</a>
                <a href="#">Practice</a>
            </nav>
            <div className="login-section">
                <FaUserCircle className="user-icon"/>
                <span> Log In </span> 
                <FaLock className="lock-icon"/>
            </div>

        </header>
    );
};

export default Header;