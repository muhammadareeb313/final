import { initializeApp } from "firebase/app";
import {getDocs, getFirestore,collection, addDoc,doc,setDoc,getDoc, query, orderBy, limit,onSnapshot  } from "firebase/firestore";
import { getAuth,updateProfile,signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
 import { getStorage,uploadString, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAY2q0Q_dbtcYHkvXMdDY6ubrwsR4zoYzg",
  authDomain: "native-abde9.firebaseapp.com",
  projectId: "native-abde9",
  storageBucket: "native-abde9.appspot.com",
  messagingSenderId: "837236021496",
  appId: "1:837236021496:web:3b05344867faeed581030d",
  measurementId: "G-6Z8L5JLM5D"
};
const app = initializeApp(firebaseConfig);
// const db = getFirestore();
const auth = getAuth(app);
const db = getFirestore();
const storage = getStorage(app);
export {db,app,auth,
  getDocs,onSnapshot,
  signOut,updateProfile,
  createUserWithEmailAndPassword,signInWithEmailAndPassword,
  onAuthStateChanged,
  setDoc,doc,collection,addDoc,getDoc,
 query,orderBy,limit,
storage,getStorage, ref, uploadBytesResumable, getDownloadURL,uploadString
};


