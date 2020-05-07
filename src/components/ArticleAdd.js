import React from 'react';
import ArticleAddEditForm from "./ArticleAddEditForm";
import {addNewArticle} from "../api/api";


const ArticleAdd = () => {

    const addArticle = (post) => {
        addNewArticle(post);
    }

    return (
        <div className="container">
            <h1 className="add-article__title">Add article</h1>
            <ArticleAddEditForm handlePost={addArticle}/>
        </div>
    );
};

export default ArticleAdd;