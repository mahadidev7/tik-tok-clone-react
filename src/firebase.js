
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAZP4Z7fdRTYE4Oif4nH3MxPdioB1ig5hk",
    authDomain: "tik-tok-app-6fae3.firebaseapp.com",
    projectId: "tik-tok-app-6fae3",
    storageBucket: "tik-tok-app-6fae3.appspot.com",
    messagingSenderId: "1067976134601",
    appId: "1:1067976134601:web:5302895cb5c2a914cca218",
    measurementId: "G-Q3TCSL1SYP"
  };

  initializeApp(firebaseConfig);
  const db = getFirestore()

  export default db;
