import React from 'react';
import ArticleShort from "./ArticleShort";


const Main = ({posts}) => {


    return (
        <main className="main">
            <div className="container">
                <div className="article__wrapper">
                    {
                        posts.map(el => <ArticleShort
                            key={el.id}
                            title={el.title}
                            subtitle={el.subtitle}
                            category={el.category}
                            datePublished={el.datePublished}
                            imageThumb={el.imageThumb}
                            id={el.id}
                        />)
                    }
                </div>
            </div>
        </main>
    );
};

export default Main;