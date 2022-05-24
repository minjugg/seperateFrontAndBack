import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Navbar({ userIsLoggedIn }) {
  return (
    <Main>
      <span className="logo">
        <Link to="/">APP LOGO</Link>
      </span>
      {userIsLoggedIn ? (
        <ul className="list">
          <li className="list-item">Minjoo Kim</li>
          <li className="list-item">
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </Main>
  );
}

const Main = styled.main`
  border: 3px solid grey;
  height: 50px;
  background-color: beige;
  display: flex;
  align-items: center;
  justify-content: space-around;

  .list {
    display: flex;
    align-items: center;
    list-style: none;
  }

  .list-item {
    margin-right: 20px;
    font-weight: 500;
    cursor: pointer;
  }
`;
