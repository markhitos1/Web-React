import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBzJzewg6xDLrLcnacty8gto7JfrALwpIk",
    authDomain: "chat-react-b02af.firebaseapp.com",
    projectId: "chat-react-b02af",
    storageBucket: "chat-react-b02af.appspot.com",
    messagingSenderId: "92453433004",
    appId: "1:92453433004:web:16bc42b9b11a48b8ce3909"
  };

  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);
  export const db = getFirestore(app);


