import React from 'react';

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

const getRandomNumbersForFooter = postsCount => {
    const result = [];
    if (postsCount > 0) {
        do {
            const rnd = Math.floor(Math.random() * (postsCount));
            result.indexOf(rnd) < 0 && result.push(rnd);
        } while (result.length < 3);
    }
    console.log(result);
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
    getRandomNumbersForFooter,
    generateRandomId,
    getSinglePostById
}