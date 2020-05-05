import React from 'react';

const getPosts = (postsSetter, loadingSetter) => {
    //const apiUrl = "https://api.jsonbin.io/v3/b/5ea9904e07d49135ba47ba43"; //OLD
    const apiUrl = "https://api.jsonbin.io/v3/b/5eb01316a47fdd6af15d535d/2";
    fetch(apiUrl, {
        method: 'GET',
        headers: {
            'X-Master-Key': '$2b$10$fHqFEmM9UHUWnkXZ8JMGqeWItrVIWaPf.tI9/zIvYT9s1wy246UBu'
        },
    })
        .then(resp => resp.json())
        .then(resp => {
            postsSetter && postsSetter(resp.record.articles);
            loadingSetter && loadingSetter(false);
        });
}

const generateRandomId = () => {
    return Math.random().toString(36).substr(2, 9);
}

const getSinglePostById = (id, posts) => {

    let result = 404;
    posts.map((el, index) => {
        if (el.id === id) {
            result = el;
        }
    })
    return result;
}

// let posts = [];
//
// fetch("https://api.jsonbin.io/v3/b/5ea9904e07d49135ba47ba43",{
//     method: 'GET',
//     headers: {
//         'X-Master-Key': '$2b$10$fHqFEmM9UHUWnkXZ8JMGqeWItrVIWaPf.tI9/zIvYT9s1wy246UBu'
//     },
// })
//     .then(resp => resp.json())
//     .then(resp => resp.record.articles.map(el=>posts.push(el)));
// return posts;


export {
    getPosts,
    generateRandomId,
    getSinglePostById
}