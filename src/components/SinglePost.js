import React from 'react';
import { Route , useRouteMatch} from "react-router-dom";


const SinglePost = ({posts}) => {

    const id = useRouteMatch("/post/:id").params.id;
    console.log(id);
    console.log(posts);

    return (
        <div className="container">
            <h1>Post id: {id}</h1>
            {
                posts.length > 0 && <h2>{posts[id].title}</h2>
            }
        </div>
    );
};

export default SinglePost;