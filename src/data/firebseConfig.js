import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAaq7gDkumXWGLPegx0QIwxU-ApQYO2uq4",
    authDomain: "newblog-e4168.firebaseapp.com",
    databaseURL: "https://newblog-e4168.firebaseio.com",
    projectId: "newblog-e4168",
    storageBucket: "newblog-e4168.appspot.com",
    messagingSenderId: "903312689568",
    appId: "1:903312689568:web:97442ee32afc11a43afcc5"
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