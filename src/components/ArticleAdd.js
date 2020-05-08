import React from 'react';
import ArticleAddEditForm from "./ArticleAddEditForm";
import {addNewArticle} from "../api/api";
import NotFound from "./NotFound";


const ArticleAdd = ({isLoggedIn}) => {
    document.title = 'Add article';
    const addArticle = (post) => {
        addNewArticle(post);
    }
    if (!isLoggedIn) {
        return <NotFound />
    }
    return (
        <div className="container">
            <h1 className="add-article__title">Add article</h1>
            <ArticleAddEditForm handlePost={addArticle}/>
        </div>
    );
};

export default ArticleAdd;