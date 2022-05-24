import React from "react";
import { logoutWithGoogle } from "../config/firebase";

export default function Logout({ setUserIsLoggedIn, setToken }) {
  return (
    <div>
      <h1>로그아웃 하시겠습니까?</h1>
      <button onClick={() => logoutWithGoogle(setUserIsLoggedIn, setToken)}>Logout</button>
    </div>
  );
}
