// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC9xvEY1D_UUv7DmPE54dLPnByqHH2siUU",
    authDomain: "fir-auth-3eddb.firebaseapp.com",
    projectId: "fir-auth-3eddb",
    storageBucket: "fir-auth-3eddb.firebasestorage.app",
    messagingSenderId: "985588780452",
    appId: "1:985588780452:web:6602349a91bcd904ca8531"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;