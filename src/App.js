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
                        </article>
                        <article className="article">
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
                        </article>
                        <article className="article">
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
                        </article>
                        <article className="article">
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
                        </article>
                        <article className="article">
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

            <footer className="footer">
                <div className="container">
                    <div className="wrapper">
                        <div className="widget">
                            <div className="widget__title">
                                <h4>Random posts</h4>
                            </div>

                            <div className="random-post">
                                <div className="random-post__img">
                                    <img src="https://placeimg.com/80/80/nature"/>
                                </div>
                                <div className="random-post__info">
                                    <div className="random-post__date">
                                        <h4>May 1, 2020</h4>
                                    </div>
                                    <div className="random-post__title">
                                        <h3>The way I see it, every life is a pile of good things</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="random-post">
                                <div className="random-post__img">
                                    <img src="https://placeimg.com/80/80/nature"/>
                                </div>
                                <div className="random-post__info">
                                    <div className="random-post__date">
                                        <h4>May 1, 2020</h4>
                                    </div>
                                    <div className="random-post__title">
                                        <h3>The way I see it, every life is a pile of good things</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="random-post">
                                <div className="random-post__img">
                                    <img src="https://placeimg.com/80/80/nature"/>
                                </div>
                                <div className="random-post__info">
                                    <div className="random-post__date">
                                        <h4>May 1, 2020</h4>
                                    </div>
                                    <div className="random-post__title">
                                        <h3>The way I see it, every life is a pile of good things</h3>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="widget">
                            <div className="widget__title">
                                <h4>Instagram</h4>
                            </div>
                            <div className="insta-pics">
                                <ul className="instafeed">
                                    <li className="instafeed__item"><img src="https://placeimg.com/110/120/nature"/>
                                    </li>
                                    <li className="instafeed__item"><img src="https://placeimg.com/121/120/nature"/>
                                    </li>
                                    <li className="instafeed__item"><img src="https://placeimg.com/119/118/nature"/>
                                    </li>
                                    <li className="instafeed__item"><img src="https://placeimg.com/120/122/nature"/>
                                    </li>
                                    <li className="instafeed__item"><img src="https://placeimg.com/120/121/nature"/>
                                    </li>
                                    <li className="instafeed__item"><img src="https://placeimg.com/123/117/nature"/>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="widget">
                            <div className="widget__title">
                                <h4>Subscribe</h4>
                            </div>
                            <div className="subscribe">
                                <h3 className="subscribe__title">Only Interesting News</h3>
                                <h4 className="subscribe__description">Subscribe to our newsletter and we’ll send you
                                    the
                                    emails of
                                    latest posts.
                                </h4>
                                <form onSubmit={e => e.preventDefault()}>
                                    <input className="subscribe__email" type="email" placeholder="Email address"/>
                                    <input type="submit" className="subscribe__submit" value="Subscribe"/>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    );
}

export default App;
