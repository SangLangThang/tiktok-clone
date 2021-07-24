import firebase from "firebase"
import "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyDDu63LDz4mX-1IWt7GLwFC_IY3BkdjsqM",
    authDomain: "tiktok-clone-9dac7.firebaseapp.com",
    databaseURL: "https://tiktok-clone-9dac7-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "tiktok-clone-9dac7",
    storageBucket: "tiktok-clone-9dac7.appspot.com",
    messagingSenderId: "195388693586",
    appId: "1:195388693586:web:92565255a220e77fd2138b",
    measurementId: "G-J7VKDWYBG2"
};
// Initialize Firebase


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore()
const storage = firebaseApp.storage();
const auth = firebaseApp.auth();
export { db, storage, auth }