import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD7xrQrjLpWJ8Pk-P1m0VdwfA_QujiCoME",
    authDomain: "delivery-pizza-epic.firebaseapp.com",
    projectId: "delivery-pizza-epic",
    storageBucket: "delivery-pizza-epic.appspot.com",
    messagingSenderId: "66856383750",
    appId: "1:66856383750:web:23ddf4c8c44d4fb24f9a87"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
