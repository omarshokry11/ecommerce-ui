import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBQc6YtYvSg4GafNT7vnIhN8HVIyF5z9mI",
    authDomain: "ecommerce-api-6b1f1.firebaseapp.com",
    databaseURL: "https://ecommerce-api-6b1f1.firebaseio.com",
    projectId: "ecommerce-api-6b1f1",
    storageBucket: "ecommerce-api-6b1f1.appspot.com",
    messagingSenderId: "275666114536",
    appId: "1:275666114536:web:ea66b5331efb3b3197365d",
    measurementId: "G-71KT19LVGR"
};

export default firebase.initializeApp(firebaseConfig);