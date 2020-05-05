import React, {useEffect, useState} from 'react';
import {useRouteMatch} from "react-router-dom";
import ReactHtmlParser from 'react-html-parser';

import {getSinglePostById} from "../api/api";

const SinglePost = ({posts}) => { //, match: {params: {id} }
    const [article, setArticle] = useState(null);
    const id = useRouteMatch("/post/:id").params.id;

    useEffect(() => {
//      const article = getSinglePostById(id, posts);
        setArticle(getSinglePostById(id, posts));
        window.scrollTo(0, 0);
    })

    if (posts.length === 0) {
        return <div className="loading"/>
    }

    if (!article) {
        return <div className="loading"/>
    } else {
        if (article === 404) {
            return <h1 className="container"
                       style={{
                           margin: "100px auto",
                           textAlign: "center",
                           fontSize: "30px",
                           fontWeight: "900"
                       }}>Article not found
            </h1>
        } else {
            return (
                <div className="container">
                    <div className="single-post">
                        <div className="single-post__meta">
                                    <span className="single-post__category">
                                      <p>{article.category}</p>
                                    </span>
                            <span className="single-post__date">
                                        <p>{article.datePublished}</p>
                                    </span>
                        </div>
                        <div className="single-post__title">
                            <h1>{article.title}</h1>
                        </div>
                        <div className="single-post__image">
                            <img src={article.imageFull} alt="some alt text"/>
                        </div>
                        <article className="single-post__content">
                            {
                                ReactHtmlParser(article.content)
                            }
                        </article>
                    </div>
                </div>
            )
        }
    }

};

export default SinglePost;