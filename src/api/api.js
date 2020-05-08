import React, {useEffect, useState} from 'react';
import fire from "../data/firebseConfig";


const generateRandomId = () => {
    return Math.random().toString(36).substr(2, 9);
}

const getSinglePostById = (id, posts) => {

    let result = 404;
    posts.map(el => {
        if (el.id === id) {
            result = el;
        }
    })
    return result;
}

const getRandomNumbersForFooter = postsCount => {
    const result = [];
    if (postsCount > 0) {
        do {
            const rnd = Math.floor(Math.random() * (postsCount));
            result.indexOf(rnd) < 0 && result.push(rnd);
        } while (result.length < 3);
    }
    return result;
}

const addNewArticle = (article) => {
    let tmp = [];
        const ref = fire.database().ref('articles');

        ref.on("value", function (snapshot) {
            tmp = [article,...snapshot.val()];
        }, function (error) {
            console.log("Error: " + error.code);
        });
        ref.set(tmp);
}

const updateSingleArticle = (article) => {

    let tmp = [];
    const ref = fire.database().ref('articles');

    ref.on("value", function (snapshot) {
        tmp = [...snapshot.val()];
    }, function (error) {
        console.log("Error: " + error.code);
    });
    tmp.map(el => {
        if (el.id === article.id){
            el.title = article.title;
            el.subtitle = article.subtitle;
            el.content = article.content;
            el.category = article.category;
            el.datePublished = article.datePublished;
            el.imageThumb = article.imageThumb;
            el.imageFull = article.imageFull;
        }
    })
    ref.set(tmp);

}

const checkLogin = (login, password) => {
    document.cookie = `admin=${login.toLowerCase() === "admin" && password === "admin"}`;
    return login.toLowerCase() === "admin" && password === "admin";
}


export {
    getRandomNumbersForFooter,
    generateRandomId,
    getSinglePostById,
    addNewArticle,
    updateSingleArticle,
    checkLogin
}