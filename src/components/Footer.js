import React from 'react';

const Footer = () => {
    return (
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
    );
};

export default Footer;