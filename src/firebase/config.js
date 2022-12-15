import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDv58zXZwI8d0EkMs8rkTkqh-jzdCnPD0U",
    authDomain: "miniblog-fa688.firebaseapp.com",
    projectId: "miniblog-fa688",
    storageBucket: "miniblog-fa688.appspot.com",
    messagingSenderId: "53137630548",
    appId: "1:53137630548:web:23c3c87a4bfbdfa62a54c1"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };