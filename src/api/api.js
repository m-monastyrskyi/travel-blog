import React from 'react';

const getPosts = (postsSetter, loadingSetter) => {
    fetch("https://api.jsonbin.io/v3/b/5ea9904e07d49135ba47ba43", {
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
}

export {
    getPosts
}