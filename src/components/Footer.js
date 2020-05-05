import React from 'react';
import {Link} from "react-router-dom";

const Footer = ({posts}) => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="wrapper">
                    <div className="widget">
                        <div className="widget__title">
                            <h4>Random posts</h4>
                        </div>

                        {
                            posts.map((el, index) => {
                                return (
                                    <div className="random-post" key={index}>
                                        <div className="random-post__img">
                                            <Link to={'/post/' + el.id}>
                                                <img src={el.imageThumb}  alt="some random stuff"/>
                                            </Link>
                                        </div>
                                        <div className="random-post__info">
                                            <div className="random-post__date">
                                                <h4>{el.datePublished}</h4>
                                            </div>
                                            <div className="random-post__title">
                                                <Link to={'/post/' + el.id}>
                                                    <h3>
                                                        {el.title}
                                                    </h3>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>

                    <div className="widget">
                        <div className="widget__title">
                            <h4>Instagram</h4>
                        </div>
                        <div className="insta-pics">
                            <ul className="instafeed">
                                <li className="instafeed__item"><img src="https://placeimg.com/110/120/nature" alt="some alt text"/>
                                </li>
                                <li className="instafeed__item"><img src="https://placeimg.com/121/120/nature" alt="some alt text"/>
                                </li>
                                <li className="instafeed__item"><img src="https://placeimg.com/119/118/nature" alt="some alt text"/>
                                </li>
                                <li className="instafeed__item"><img src="https://placeimg.com/120/122/nature" alt="some alt text"/>
                                </li>
                                <li className="instafeed__item"><img src="https://placeimg.com/120/121/nature" alt="some alt text"/>
                                </li>
                                <li className="instafeed__item"><img src="https://placeimg.com/123/117/nature" alt="some alt text"/>
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
                                <input type="submit" className="btn__submit" value="Subscribe"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;