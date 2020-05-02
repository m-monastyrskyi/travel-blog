import React from 'react';

const ArticleShort = ({title,subtitle,category,datePublished, imageThumb}) => {
    return (
        <article className="article">
            <div className="article__thumb">
                <img src={imageThumb} alt="thumb image"/>
            </div>
            <div className="article__info">
                <div className="article__meta">
                                    <span className="article__category">
                                      <p>{category}</p>
                                    </span>
                    <span className="article__date">
                                        <p>{datePublished}</p>
                                    </span>
                </div>
                <div className="article__title">
                    <h2>{title}</h2>
                </div>
                <div className="article__subtitle">
                    <p>{subtitle}</p>
                </div>
            </div>
        </article>
    );
};

export default ArticleShort;