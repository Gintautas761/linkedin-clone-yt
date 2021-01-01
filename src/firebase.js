import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD8pLjOEDOqAsEgzX8JeIUFRuTewBJbRHQ",
  authDomain: "linkedin-clone-yt-e4cb9.firebaseapp.com",
  projectId: "linkedin-clone-yt-e4cb9",
  storageBucket: "linkedin-clone-yt-e4cb9.appspot.com",
  messagingSenderId: "211177767747",
  appId: "1:211177767747:web:2db2f77e88c2b2ad9765f6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
