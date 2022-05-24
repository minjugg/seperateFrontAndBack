import React from "react";
import { loginWithGoogle } from "../config/firebase";

export default function Login({ setUserIsLoggedIn, setToken }) {
  return (
    <div>
      <button onClick={() => loginWithGoogle(setUserIsLoggedIn, setToken)}>
        Login with Google
      </button>
    </div>
  );
}
