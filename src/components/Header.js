import React from 'react';
import logo from "../img/logo.svg";
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="wrapper">
                    <div className="header__logo">
                        <NavLink to="/">
                            <img src={logo} className="App-logo" alt="logo"/>
                        </NavLink>
                    </div>
                    <nav className="header__menu">
                        <ul className="nav__list">
                            <li className="nav__item"><NavLink to="/">Home</NavLink></li>
                            <li className="nav__item"><NavLink to="/contact">Contact</NavLink></li>
                            <li className="nav__item"><a href="#">Login</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;