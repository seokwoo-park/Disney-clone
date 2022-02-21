import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC5F9-hX_FZkBCMe_78rtpYCEev9QO0IOQ",
  authDomain: "disneyplus-clone-d58b7.firebaseapp.com",
  projectId: "disneyplus-clone-d58b7",
  storageBucket: "disneyplus-clone-d58b7.appspot.com",
  messagingSenderId: "283629049565",
  appId: "1:283629049565:web:83a7c315e9e55045292d34",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const storage = getStorage();

export { auth, provider, storage };
export default db;
