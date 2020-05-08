import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route, Link, NavLink} from 'react-router-dom';
import './styles/App.scss';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import LoginForm from "./components/LoginForm";

import useGetPosts from "./hooks/useGetPosts";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import SinglePost from "./components/SinglePost";
import Admin from "./components/Admin";
import ArticleAdd from "./components/ArticleAdd";
import ArticleEdit from "./components/ArticleEdit";


function App() {
    const [posts, isLoading] = useGetPosts();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [modalLogin, setModalLogin] = useState(false);

    const modalLoginSwitch = () => {
        setModalLogin(prev => !prev);
    }
    const userLoggedInSetter = (loginStatus) => {
        setIsLoggedIn(loginStatus);
    }
    return (

        <Router>
            <>
                <Header showModalLogin={modalLoginSwitch} isLoggedIn={isLoggedIn}/>
                <Switch>
                    <Route exact path="/">
                        {
                            isLoading ? <div className="loading"/> : <Main posts={posts}/>
                        }
                    </Route>
                    <Route exact path="/contact" component={Contact}/>

                    <Route path="/post/:id">
                        <SinglePost posts={posts}/>
                    </Route>

                    <Route exact path="/admin"><Admin isLoggedIn={isLoggedIn}/></Route>
                    <Route exact path="/admin/add"><ArticleAdd isLoggedIn={isLoggedIn}/></Route>

                    <Route path="/admin/edit/:id">
                        <ArticleEdit posts={posts} isLoggedIn={isLoggedIn}/>
                    </Route>

                    <Route path="*" component={NotFound}/>
                </Switch>
                {
                    !isLoading && <Footer posts={posts}/>
                }
                {
                    modalLogin && <LoginForm closeModal={modalLoginSwitch} setUserLogIn={userLoggedInSetter}/>
                }

            </>

        </Router>

    );
}

export default App;
