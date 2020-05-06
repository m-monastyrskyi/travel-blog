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

const Admin = () => {
    const [posts, isLoading] = useGetPosts();
    const history = useHistory();

    useEffect(() => {

    }, [isLoading]);
    if (isLoading) {
        return <div className="loading"/>
    }

    const btnAddTestArticle = () => {
        const newArticle = {
            category: "Poland",
            content: "Hello from Poland and welcome",
            datePublished: "May 4, 2020",
            id: generateRandomId(),
            imageFull: "https://firebasestorage.googleapis.com/v0/b/testblog-dcad8.appspot.com/o/images%2F1200x600%2F01-min.jpg?alt=media&token=be7c3dfb-db3f-4877-affb-213b40a91c89",
            imageThumb: "https://firebasestorage.googleapis.com/v0/b/testblog-dcad8.appspot.com/o/images%2F400x300%2F01-min.jpg?alt=media&token=90e14050-dc96-4604-a934-e3cfce4ac6aa",
            subtitle: "some subtitle text from the future",
            title: "Hello, World!"
        }
        const ref = fire.database().ref('articles');
        ref.set([...posts, newArticle]);
        console.log("hello");
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
                                    <Link to={`/post/${el.id}`}>
                                        <FontAwesomeIcon className="table__icon" icon={faEye}/>
                                    </Link>
                                    <FontAwesomeIcon className="table__icon" icon={faEdit}/>
                                    <FontAwesomeIcon className="table__icon" icon={faTrashAlt}
                                                     onClick={() => deleteSinglePost(el.id)}/>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
            <span>Something went wrong? Restore articles from backup</span>
            <button style={{padding: "5px 20px", margin: "20px"}} onClick={btnRestore}>Restore from backup</button>
            <button style={{padding: "5px 20px", margin: "20px"}} onClick={btnAddTestArticle}>Test add article</button>
        </div>
    );


};

export default Admin;