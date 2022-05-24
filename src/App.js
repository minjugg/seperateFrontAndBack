import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import CreateDocument from "./pages/CreateDocument";
import EditDocument from "./pages/EditDocument";
import { auth } from "./config/firebase";

function App() {
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);
  const [token, setToken] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((userCred) => {
      if (userCred) {
        setUserIsLoggedIn(true);
      }
    })
  }, []);

  return (
    <div>
      <Navbar userIsLoggedIn={userIsLoggedIn} />
      <Routes>
        <Route path="/" element={<Home token={token} setUserIsLoggedIn={setUserIsLoggedIn} />} />
        <Route
          path="/login"
          element={
            userIsLoggedIn ? (
              <Navigate to="/" />
            ) : (
              <Login
                setUserIsLoggedIn={setUserIsLoggedIn}
                setToken={setToken}
              />
            )
          }
        />
        <Route
          path="/logout"
          element={
            userIsLoggedIn ? (
              <Logout
                setUserIsLoggedIn={setUserIsLoggedIn}
                setToken={setToken}
              />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route path="/create" element={<CreateDocument token={token} />} />
        <Route path="/documents/:id" element={<EditDocument />} />
        <Route path="/*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
