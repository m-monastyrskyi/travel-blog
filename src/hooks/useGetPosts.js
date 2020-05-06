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








// const apiUrl = "https://api.npoint.io/cdd0269b539d42ba06db";
// fetch(apiUrl)
//           .then(resp => resp.json())
//           .then(resp => {
//               console.log(resp);
//               setPosts(resp.articles);
//               setLoading(false);
//               console.log("hello from fetch");
//           }).catch(err => console.log(`Error from UseGetPosts: ${err.message}`));


//  const apiUrl = "https://api.jsonbin.io/v3/b/5eb01316a47fdd6af15d535d/2";
//   fetch(apiUrl, {
//       method: 'GET',
//       headers: {
//           'X-Master-Key': '$2b$10$fHqFEmM9UHUWnkXZ8JMGqeWItrVIWaPf.tI9/zIvYT9s1wy246UBu'
//       },
//   })
//       .then(resp => resp.json())
//       .then(resp => {
//           console.log(resp);
//           setPosts(resp.record.articles);
//           setLoading(false);
//           console.log("hello from fetch");
//       }).catch(err => console.log(`Error from UseGetPosts: ${err.message}`));