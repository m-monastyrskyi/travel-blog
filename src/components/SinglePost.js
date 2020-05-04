import React, {useEffect} from 'react';
import {useRouteMatch} from "react-router-dom";
import {getSinglePostById} from "../api/api";

const SinglePost = ({ posts }) => { //, match: {params: {id} }
    const id = useRouteMatch("/post/:id").params.id;
//console.log(match);
    if (posts.length === 0) {
        return <h1 className="container">Loading...</h1>
    }
    const article = getSinglePostById(id, posts);

    if (!article) {
        return <h1 className="container">Loading article...</h1>
    } else {
        if (article === 404) {
            return <h1 className="container" style={{margin: "100px auto", textAlign: "center", fontSize: "30px", fontWeight: "900"}}>Article not found</h1>
        } else {
            return (
                <div className="container">
                    <div className="single-post">
                        <div className="single-post__image">
                            <img src={article.imageFull} alt="some alt text" />
                        </div>
                    </div>
                </div>
            )
        }
    }

};

export default SinglePost;