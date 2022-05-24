import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

export default function CreateDocument({ token }) {
  const [input, setInput] = useState("");
  const [submitStatus, setSubmitStatus] = useState(false);

  const createData = async (token) => {
    console.log("token", token);

    await axios.post(
      "http://localhost:1234/create",
      { input },
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
  };

  if (submitStatus) {
    createData(token);
  }

  function handleInput(e) {
    e.preventDefault();

    setInput(e.target.value);
  }

  return (
    <div>
      <WriteDocument>
        <label htmlFor="document">여기에 문서 내용을 입력하세요:</label>
        <form>
          <textarea
            type="text"
            id="document"
            onChange={(e) => handleInput(e)}
          />
        </form>
        <button onClick={() => setSubmitStatus(true)}>저장하기</button>
      </WriteDocument>
    </div>
  );
}

const WriteDocument = styled.div`
  textarea {
    width: 90%;
    height: 200px;
    padding: 10px;
    border: 1px solid grey;
  }
`;
