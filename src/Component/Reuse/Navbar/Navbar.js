import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <>
            <nav className="navbar">
                <div className="nav-container">
                    <NavLink exact to="/" className="nav-logo">Perfect Click <i className="fas fa-code" /></NavLink>

                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <NavLink exact to="/" activeClassName="active" className="nav-links" onClick={handleClick}>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to="/about" activeClassName="active" className="nav-links" onClick={handleClick}>About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to="/blog" activeClassName="active" className="nav-links" onClick={handleClick}>BLog</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to="/contact" activeClassName="active" className="nav-links" onClick={handleClick}>Contact</NavLink>
                        </li>
                    </ul>
                    <div className="nav-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"} />
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;