import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyA_HlO28q0In0rowj0tZsHuiTKnWu2GOHE',
  authDomain: 'todo-app-9e93a.firebaseapp.com',
  projectId: 'todo-app-9e93a',
  storageBucket: 'todo-app-9e93a.appspot.com',
  messagingSenderId: '575784870479',
  appId: '1:575784870479:web:b14ca15276e00f28e1c03a',
  measurementId: 'G-BX8S78MEQW',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
