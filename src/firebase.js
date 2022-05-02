import React from "react";
import { initializeApp } from 'firebase/app';
import { collection, getDoc, getFirestore } from 'firebase/firestore';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCg2BpwgJha6T6TBkrinbwNjdYSZh2HbQ8",
  authDomain: "arzu-optical.firebaseapp.com",
  databaseURL: "https://arzu-optical-default-rtdb.firebaseio.com",
  projectId: "arzu-optical",
  storageBucket: "arzu-optical.appspot.com",
  messagingSenderId: "163643703465",
  appId: "1:163643703465:web:11fc209f68a5fff585e9b8",
  measurementId: "G-E7D61QEBXC"
};
const db = initializeApp(firebaseConfig)
export default getFirestore()