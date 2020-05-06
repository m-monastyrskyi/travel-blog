import React, {useEffect} from 'react';
import {Link} from "react-router-dom";

const ArticleShort = ({title, subtitle, category, datePublished, imageThumb, id}) => {

    return (
        <article className="article">
            <div className="article__thumb">
                <Link to={`/post/` + id}>
                    <img src={imageThumb} alt="thumb image"/>
                </Link>
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
                    <Link to={'/post/' + id}>
                        <h2>{title}</h2>
                    </Link>
                </div>
                <div className="article__subtitle">
                    <p>{subtitle}</p>
                </div>
            </div>
        </article>
    );
};

export default ArticleShort;