import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged, User } from 'firebase/auth';
import { firebaseApp } from './firebase-init';

const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

function login(): void {
  signInWithPopup(auth, provider).catch((/* error */) => {
    // console.error('Login error:', error);
  });
}

function logoutUser(): void {
  signOut(auth).catch((/* error */) => {
    // console.error('Logout error:', error);
  });
}

function onUserChange(callback: (user: User | null) => void): void {
  onAuthStateChanged(auth, callback);
}

export { login, logoutUser, onUserChange, auth };
