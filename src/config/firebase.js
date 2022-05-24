import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const loginWithGoogle = (setUserIsLoggedIn, setToken) => {
  signInWithPopup(auth, provider)
    .then((userCredential) => {
      if (userCredential) {
        setUserIsLoggedIn(true);

        auth.currentUser.getIdToken().then((token) => {
          setToken(token);
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export const logoutWithGoogle = (setUserIsLoggedIn, setToken) => {
  signOut(auth)
    .then(() => {
      setUserIsLoggedIn(false);
      setToken("");
    })
    .catch((error) => {
      console.log(error);
    });
};
