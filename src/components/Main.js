import React, {useState, useEffect} from 'react';
import ArticleShort from "./ArticleShort";
//import tmp from "../data/articles";
import {getPosts} from "../api/api";

const Main = () => {
//    const posts = getPosts();
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch("https://api.jsonbin.io/v3/b/5ea9904e07d49135ba47ba43", {
            method: 'GET',
            headers: {
                'X-Master-Key': '$2b$10$fHqFEmM9UHUWnkXZ8JMGqeWItrVIWaPf.tI9/zIvYT9s1wy246UBu'
            },
        })
            .then(resp => resp.json())
            .then(resp => {
                setPosts(resp.record.articles);
                setIsLoading(false);
            });
    }, []);

    return (
        <main className="main">
            <div className="container">
                <div className="article__wrapper">
                    {
                        isLoading ? <h1>Loading</h1> : posts.map(el => <ArticleShort
                            key={el.id}
                        title={el.title}
                            subtitle={el.subtitle}
                            category={el.category}
                            datePublished={el.datePublished}
                            imageThumb={el.imageThumb}
                        />)
                    }

                </div>
            </div>
        </main>
    );
};

export default Main;