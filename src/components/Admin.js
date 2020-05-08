import React, {useState, useEffect} from 'react';
import useGetPosts from "../hooks/useGetPosts";
import {Link, useHistory} from "react-router-dom";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEye} from '@fortawesome/free-solid-svg-icons'
import {faEdit} from '@fortawesome/free-solid-svg-icons'
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons'

import fire from "../data/firebseConfig";
import backup from "../data/articles"
import {generateRandomId} from "../api/api";
import NotFound from "./NotFound";

const Admin = ({isLoggedIn}) => {
    const [posts, isLoading] = useGetPosts();
    //const history = useHistory();
    document.title = 'Admin';

    if (isLoading) {
        return <div className="loading"/>
    }

    const btnAddTestArticle = () => {
        const newArticle = {
            category: "Poland",
            content: "Hello from Poland and welcome",
            datePublished: "May 4, 2020",
            id: generateRandomId(),
            imageFull: "https://firebasestorage.googleapis.com/v0/b/newblog-e4168.appspot.com/o/backup%2F1200x600%2Fimg-06.jpg?alt=media&token=0c935cb2-9981-4ada-99c6-3bbe956796ee",
            imageThumb: "https://firebasestorage.googleapis.com/v0/b/newblog-e4168.appspot.com/o/backup%2F400x300%2Fimg-03.jpg?alt=media&token=3bbb8ca0-e5cb-42a4-856c-6a657a4125df",
            subtitle: "some subtitle text from the future",
            title: "Hello, World!"
        }
        const ref = fire.database().ref('articles');
        ref.set([...posts, newArticle]);
    }

    const btnRestore = () => {
        const ref = fire.database().ref('articles');
        ref.set(backup.articles);
        console.log("hello from restore");
    }

    const deleteSinglePost = id => {
        const newTab = posts.filter(el => el.id !== id);
        const ref = fire.database().ref('articles');
        ref.set(newTab);
    }

    if (!isLoggedIn) {
        return <NotFound />
    }
    return (
        <div className="container">
            <table className="table">
                <tbody>
                {
                    posts.map((el, index) => {
                        return (
                            <tr key={index} className="table__row">
                                <td className="table__index">
                                    {index + 1}
                                </td>
                                <td className="table__title">
                                    {el.title}
                                </td>
                                <td className="table__actions">
                                    <Link to={`/post/${el.id}`} alt="View article">
                                        <FontAwesomeIcon className="table__icon" icon={faEye}/>
                                    </Link>
                                    <Link to={`/admin/edit/${el.id}`} alt="View article">
                                        <FontAwesomeIcon className="table__icon" icon={faEdit}/>
                                    </Link>
                                    <FontAwesomeIcon className="table__icon" icon={faTrashAlt}
                                                     onClick={() => deleteSinglePost(el.id)}/>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
            <Link className="add-article__btn" to="/admin/add">Add article</Link>
            <div className="went-wrong">
                <span>Something went wrong? Restore articles from backup</span>
                <button className="add-article__btn" onClick={btnRestore}>Restore from backup</button>
            </div>
            {/*<button style={{padding: "5px 20px", margin: "20px"}} onClick={btnAddTestArticle}>Test add article</button>*/}
        </div>
    );


};

export default Admin;