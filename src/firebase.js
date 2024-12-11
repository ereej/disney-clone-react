import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCGXQ-j3UzyfvTNiFAu22lW9fRIz-4ZN5Y",
  authDomain: "disney-e5c2b.firebaseapp.com",
  projectId: "disney-e5c2b",
  storageBucket: "disney-e5c2b.firebasestorage.app",
  messagingSenderId: "444521311710",
  appId: "1:444521311710:web:f1e17e37cd27ba1188414f"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export { auth, provider, storage };
export default db;