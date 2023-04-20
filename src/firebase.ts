// import firebase from 'firebase/compat/app'
// import 'firebase/compat/database'

import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCfhh0-pmgH3lt8QO55PcU3s0zXOCFw1XM",
  authDomain: "rick-morty-app-3d42b.firebaseapp.com",
  databaseURL: "https://rick-morty-app-3d42b-default-rtdb.firebaseio.com",
  projectId: "rick-morty-app-3d42b",
  storageBucket: "rick-morty-app-3d42b.appspot.com",
  messagingSenderId: "736162056416",
  appId: "1:736162056416:web:0c09931f0bf7e25a3ae885"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// const db = firebase.initializeApp(firebaseConfig);

export default database;