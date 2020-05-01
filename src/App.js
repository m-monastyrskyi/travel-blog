import React from 'react';
import logo from './img/logo.svg';
import './styles/App.scss';

function App() {
    return (
        <>

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
                                <li className="nav__item"><a href="#">Login</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>

            <main className="main">
                <div className="container">
                    <div className="article__wrapper">
                        <article className="article">
                            <div className="article__thumb">
                                <img src="https://placeimg.com/400/300/nature" alt="cute kitten"/>
                            </div>
                            <div className="article__info">
                                <div className="article__meta">
                                    <span className="article__category">
                                      <p>World</p>
                                    </span>
                                    <span className="article__date">
                                        <p>April 20, 2020</p>
                                    </span>
                                </div>
                                <div className="article__title">
                                    <h2>Hello in test article</h2>
                                </div>
                                <div className="article__subtitle">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, esse inventore
                                        mollitia
                                        quasi quos veniam!</p>
                                </div>
                            </div>
                        </article>
                        <article className="article">
                            <div className="article__thumb">
                                <img src="https://placeimg.com/400/301/people" alt="cute kitten"/>
                            </div>
                            <div className="article__info">
                                <div className="article__meta">
                                    <span className="article__category">
                                      <p>World</p>
                                    </span>
                                    <span className="article__date">
                                        <p>April 20, 2020</p>
                                    </span>
                                </div>
                                <div className="article__title">
                                    <h2>Hello in test article</h2>
                                </div>
                                <div className="article__subtitle">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, esse inventore
                                        mollitia
                                        quasi quos veniam!</p>
                                </div>
                            </div>
                        </article>                 <article className="article">
                        <div className="article__thumb">
                            <img src="https://placeimg.com/400/302/nature" alt="cute kitten"/>
                        </div>
                        <div className="article__info">
                            <div className="article__meta">
                                    <span className="article__category">
                                      <p>World</p>
                                    </span>
                                <span className="article__date">
                                        <p>April 20, 2020</p>
                                    </span>
                            </div>
                            <div className="article__title">
                                <h2>Hello in test article</h2>
                            </div>
                            <div className="article__subtitle">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, esse inventore
                                    mollitia
                                    quasi quos veniam!</p>
                            </div>
                        </div>
                    </article>                 <article className="article">
                        <div className="article__thumb">
                            <img src="https://placeimg.com/401/300/nature" alt="cute kitten"/>
                        </div>
                        <div className="article__info">
                            <div className="article__meta">
                                    <span className="article__category">
                                      <p>World</p>
                                    </span>
                                <span className="article__date">
                                        <p>April 20, 2020</p>
                                    </span>
                            </div>
                            <div className="article__title">
                                <h2>Hello in test article</h2>
                            </div>
                            <div className="article__subtitle">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, esse inventore
                                    mollitia
                                    quasi quos veniam!</p>
                            </div>
                        </div>
                    </article>                 <article className="article">
                        <div className="article__thumb">
                            <img src="https://placeimg.com/402/300/people" alt="cute kitten"/>
                        </div>
                        <div className="article__info">
                            <div className="article__meta">
                                    <span className="article__category">
                                      <p>World</p>
                                    </span>
                                <span className="article__date">
                                        <p>April 20, 2020</p>
                                    </span>
                            </div>
                            <div className="article__title">
                                <h2>Hello in test article</h2>
                            </div>
                            <div className="article__subtitle">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, esse inventore
                                    mollitia
                                    quasi quos veniam!</p>
                            </div>
                        </div>
                    </article>                 <article className="article">
                        <div className="article__thumb">
                            <img src="https://placeimg.com/401/301/people" alt="cute kitten"/>
                        </div>
                        <div className="article__info">
                            <div className="article__meta">
                                    <span className="article__category">
                                      <p>World</p>
                                    </span>
                                <span className="article__date">
                                        <p>April 20, 2020</p>
                                    </span>
                            </div>
                            <div className="article__title">
                                <h2>Hello in test article</h2>
                            </div>
                            <div className="article__subtitle">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, esse inventore
                                    mollitia
                                    quasi quos veniam!</p>
                            </div>
                        </div>
                    </article>

                    </div>
                </div>
            </main>
            {/*<footer>*/}
            {/*    <div className="container">*/}
            {/*        <div className="instagram">*/}
            {/*            <h2>Insta fotki here</h2>*/}
            {/*            <img src="https://placeimg.com/402/302/nature" alt="cute kitten"/>*/}
            {/*        </div>*/}
            {/*        <div className="subscribe">*/}
            {/*            <h2>Subscribe</h2>*/}

            {/*        </div>*/}
            {/*    </div>*/}
            {/*</footer>*/}

        </>
    );
}

export default App;
