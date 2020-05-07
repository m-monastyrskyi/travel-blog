import React, {useState, useEffect} from 'react';
import ArticleAddEditForm from "./ArticleAddEditForm";

const ArticleEdit = (props) => {

    const updateArticle = (post) => {
        console.log(post);
    }

    return (
        <div className="container">
            <h1>Edit article {props.match.params.id}</h1>
            <ArticleAddEditForm id={props.match.params.id} handlePost={updateArticle}/>
        </div>
    );
};

export default ArticleEdit;