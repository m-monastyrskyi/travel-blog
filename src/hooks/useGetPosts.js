import {useState, useEffect} from 'react';
import fire from "../data/firebseConfig";

const UseGetPosts = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const ref = fire.database().ref('articles');

        ref.on("value", function (snapshot) {
            setPosts(snapshot.val());
            setLoading(false);
        }, function (error) {
            console.log("Error: " + error.code);
        });

    }, []);

    return [posts, loading];
};

export default UseGetPosts;