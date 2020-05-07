import React, {useState, useEffect} from 'react';
import ArticleAddEditForm from "./ArticleAddEditForm";
import {useRouteMatch} from "react-router-dom";
import {getSinglePostById, updateSingleArticle} from "../api/api";

const ArticleEdit = ({posts}) => {
    const id = useRouteMatch("/admin/edit/:id").params.id;
    const [article, setArticle] = useState(null);

    useEffect(() => {
        setArticle(getSinglePostById(id, posts));
    })

    const updateArticle = (post) => {
        console.log(post);
        updateSingleArticle(post);
    }

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
                    <h1 className={"add-article__title"}>Edit article {id}</h1>
                    <ArticleAddEditForm article={article} handlePost={updateArticle}/>
                </div>
            );
        }
    }
};

export default ArticleEdit;