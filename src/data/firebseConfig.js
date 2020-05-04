import firebase from "firebase";

const firebaseConfig = {
   // take it from google
};
const fire = firebase.initializeApp(firebaseConfig);

export default fire;




// const database = fire.database().ref('posts').orderByKey().limitToLast(100).then(console.log(database))
// fire.database().ref('posts').push(posts);
// posts.map(el => fire.database().ref('posts').push(el))
//
// const ref = firebase.database().ref('posts');
//
// ref.on("value", function(snapshot) {
//     console.log(snapshot.val());
//     for (let el in snapshot.val()) {
//         console.log(`${el} : ${snapshot.val()[el].title}`);
//     }
// }, function (error) {
//     console.log("Error: " + error.code);
// });