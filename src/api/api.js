import React from 'react';

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

export {
    getRandomNumbersForFooter,
    generateRandomId,
    getSinglePostById
}