import React, {useState, useEffect} from 'react';

const SinglePost = (props) => {
    return (
        <div className="container">
            <h1>Here will be post by id: {props.match.params.id}</h1>
        </div>
    );
};

export default SinglePost;