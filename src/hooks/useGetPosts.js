import {useState, useEffect} from 'react';

const UseGetPosts = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const apiUrl = "https://api.jsonbin.io/v3/b/5eb01316a47fdd6af15d535d/2";
        fetch(apiUrl, {
            method: 'GET',
            headers: {
                'X-Master-Key': '$2b$10$fHqFEmM9UHUWnkXZ8JMGqeWItrVIWaPf.tI9/zIvYT9s1wy246UBu'
            },
        })
            .then(resp => resp.json())
            .then(resp => {
                setPosts(resp.record.articles);
                setLoading(false);
                console.log("hello from fetch");
            }).catch(err => console.log(err.message));
    }, []);


    return [posts, loading];
};

export default UseGetPosts;