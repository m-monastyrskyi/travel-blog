import React, {useEffect, useState} from 'react';
//import { BrowserRouter as Router, Switch, Route,Link, NavLink } from 'react-router-dom';
import './styles/App.scss';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

import {getPosts} from "./api/api";


function App() {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const rnd1 = Math.floor(Math.random() * (posts.length));
    const rnd2 = Math.floor(Math.random() * (posts.length));
    const rnd3 = Math.floor(Math.random() * (posts.length));

    useEffect(() => {
        getPosts(setPosts, setIsLoading);

    }, []);

    return (
        <>
            <Header/>
            {
                isLoading ? <h1 className="container">Loading...</h1> : <>
                    <Main posts={posts}/>
                    <Footer posts={[posts[rnd1], posts[rnd2], posts[rnd3]]}/>
                </>
            }

        </>
    );
}

export default App;
