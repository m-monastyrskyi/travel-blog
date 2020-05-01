import React from 'react';

const ArticleShort = () => {
    return (
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
    );
};

export default ArticleShort;