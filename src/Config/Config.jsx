import { initializeApp } from 'firebase/app';
import 'firebase/auth';
import { getAuth } from 'firebase/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
import 'firebase/storage';
import { getStorage } from 'firebase/storage';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtJ6MYUG5u5FTmjB9NkGAARX9h8YFuAhI",
  authDomain: "wedease-fd6a2.firebaseapp.com",
  projectId: "wedease-fd6a2",
  storageBucket: "wedease-fd6a2.appspot.com",
  messagingSenderId: "94559366740",
  appId: "1:94559366740:web:dbcc89ea892af53096c7c1",
  measurementId: "G-G5190TVNJ2"
};
  const app = initializeApp(firebaseConfig);
   const auth = getAuth(app);

   export const storage = getStorage(app);


 export const db = getFirestore(app);
  
 export default auth;