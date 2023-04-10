import { initializeApp } from 'firebase/app';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import FIREBASE_CONFIG from '../../firebase.json';

const app = initializeApp(FIREBASE_CONFIG);

const auth = getAuth(app);

export async function signUp(email: string, password: string) {
  return createUserWithEmailAndPassword(auth, email, password)
  .then(userCred => {
    const user = userCred.user;
    return user;
  })
}

export async function signIn(email: string, password: string) {
  return signInWithEmailAndPassword(auth, email, password)
  .then(userCred => {
    const user = userCred.user;
    return user;
  })
}

export const signInEffect = () => new Promise ((res, rej) => {
  onAuthStateChanged(auth, (user) => user ? res(user) : rej(user))
});

// TODO signing in anonymously to allow people to use the extension without signing up
