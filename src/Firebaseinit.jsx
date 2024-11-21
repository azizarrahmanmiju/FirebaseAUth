// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBzvq6HVmZHErr-bWyxssA-6SOhRPCuhD4",
    authDomain: "fir-auth-11210.firebaseapp.com",
    projectId: "fir-auth-11210",
    storageBucket: "fir-auth-11210.firebasestorage.app",
    messagingSenderId: "440972466929",
    appId: "1:440972466929:web:962e037a5b2a8ddf44a750"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;