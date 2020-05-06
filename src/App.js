import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Switch, Route, Link, NavLink} from 'react-router-dom';
import './styles/App.scss';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import LoginForm from "./components/LoginForm";

import useGetPosts from "./hooks/useGetPosts"
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import SinglePost from "./components/SinglePost";

import {getRandomNumbersForFooter} from "./api/api";

function App() {
    const [posts, isLoading] = useGetPosts();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [modalLogin, setModalLogin] = useState(false);
    const [rnd, setRnd] = useState([])

    useEffect(() => {
       setRnd(getRandomNumbersForFooter(posts.length));
    }, [posts]);

    const modalLoginSwitch = () => {
        setModalLogin(prev => !prev);
    }
    return (

        <Router>
            <>
                <Header showModalLogin={modalLoginSwitch}/>
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
                    rnd.length > 1 && <Footer posts={[posts[rnd[0]], posts[rnd[1]], posts[rnd[2]]]}/>
                }
                {
                    modalLogin && <LoginForm closeModal={modalLoginSwitch}/>
                }

            </>

        </Router>

    );
}

export default App;
