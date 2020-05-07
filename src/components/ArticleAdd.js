import React, {useState, useEffect} from 'react';
import ArticleAddEditForm from "./ArticleAddEditForm";
import {addNewArticle} from "../api/api";


const ArticleAdd = () => {

    const addArticle = (post) => {
        addNewArticle(post);
    }

    return (
        <div className="container">
            <h1>Add article</h1>
            <ArticleAddEditForm handlePost={addArticle}/>
        </div>
    );
};

export default ArticleAdd;