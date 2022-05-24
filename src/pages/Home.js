import React from "react"
import { Link } from "react-router-dom";
import Document from "../components/Document";
import styled from "styled-components";

export default function Home({ token }) {
  return (
    <Main>
      <button><Link to="/create">새 문서 작성하기</Link></button>
      <div className="my-document-list">
        <Document token={token} />
      </div>
    </Main>
  );
}

const Main = styled.div`
  .my-document-list {
    display: flex;
    flex-direction: column;
    padding: 50px 100px;
  }
`
