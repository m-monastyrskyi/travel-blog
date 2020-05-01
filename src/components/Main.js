import React from 'react';
import ArticleShort from "./ArticleShort";
import tmp from "../data/articles";
console.log(tmp.articles[0].content);

const Main = () => {
    return (
        <main className="main">
            <div className="container">
                <div className="article__wrapper">
                    <ArticleShort/>
                    <ArticleShort/>
                    <ArticleShort/>
                    <ArticleShort/>
                    <ArticleShort/>
                    <ArticleShort/>
                    <ArticleShort/>
                </div>
            </div>
        </main>
    );
};

export default Main;