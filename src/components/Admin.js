import React, {useState, useEffect} from 'react';
import useGetPosts from "../hooks/useGetPosts";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEye} from '@fortawesome/free-solid-svg-icons'
import {faEdit} from '@fortawesome/free-solid-svg-icons'
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons'


const Admin = () => {
    const [posts, isLoading] = useGetPosts();

    useEffect(() => {

    }, [isLoading]);
    if (isLoading) {
        return <div className="loading"/>
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
                                    <FontAwesomeIcon className="table__icon" icon={faEye}/>
                                    <FontAwesomeIcon className="table__icon" icon={faEdit}/>
                                    <FontAwesomeIcon className="table__icon" icon={faTrashAlt}/>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    );


};

export default Admin;