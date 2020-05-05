import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Switch, Route, Link, NavLink} from 'react-router-dom';
import './styles/App.scss';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

import {getPosts} from "./api/api";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import SinglePost from "./components/SinglePost";


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

        <Router>
            <>
                <Header/>
                <Switch>
                    <Route exact path="/">
                        {
                            isLoading ? <div className="loading"/> : <Main posts={posts}/>
                        }
                    </Route>
                    <Route exact path="/contact">
                        <Contact/>
                    </Route>

                    <Route path="/post/:id">
                        <SinglePost posts={posts}/>
                    </Route>


                    <Route path="*" component={NotFound}/>
                </Switch>
                {
                    !isLoading && <Footer posts={[posts[rnd1], posts[rnd2], posts[rnd3]]}/>
                }
            </>
        </Router>
    );
}

export default App;
