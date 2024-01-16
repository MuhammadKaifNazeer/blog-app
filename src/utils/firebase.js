// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.FIREBASE,
    authDomain: "blogvarse.firebaseapp.com",
    projectId: "blogvarse",
    storageBucket: "blogvarse.appspot.com",
    messagingSenderId: "508697880264",
    appId: "1:508697880264:web:dee04e8a46cae4b93c67fd"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);