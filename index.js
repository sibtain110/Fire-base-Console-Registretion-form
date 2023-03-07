// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getDatabase , update ,ref} from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";


const firebaseConfig = {
    apiKey: "AIzaSyCcvj6XBZaWOnPam2tAlcFLakOvPdcQ3Ls",
    authDomain: "pro1-92d22.firebaseapp.com",
    databaseURL: "https://pro1-92d22-default-rtdb.firebaseio.com",
    projectId: "pro1-92d22",
    storageBucket: "pro1-92d22.appspot.com",
    messagingSenderId: "577009301657",
    appId: "1:577009301657:web:374a5fdb2929158d462008",
    measurementId: "G-Q57HP964KT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase();

var btn = document.getElementById('logbtn');

btn.addEventListener('click', (e) => {
    e.preventDefault();

    var email = document.getElementById('mail').value;
    var password = document.getElementById('pass').value;

    signInWithEmailAndPassword(auth ,email ,password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;

            const date = new Date();

            update(ref(database, 'users/' + user.uid), {
            last_login: date,
        })
            // alert('User Logged in');
            window.location.assign('https://www.instagram.com/ig_handsome_op/');

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
            // ..
        });
})

