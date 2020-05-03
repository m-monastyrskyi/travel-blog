import React from 'react';
import logo from "../img/logo.svg";

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="wrapper">
                    <div className="header__logo">
                        <a href="#">
                            <img src={logo} className="App-logo" alt="logo"/>
                        </a>
                    </div>
                    <nav className="header__menu">
                        <ul className="nav__list">
                            <li className="nav__item"><a href="#">Home</a></li>
                            <li className="nav__item"><a href="#">About</a></li>
                            <li className="nav__item"><a href="#">LogIn</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;