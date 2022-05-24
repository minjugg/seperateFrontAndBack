import React, { useState, useEffect } from "react";
import axios from "axios";

export default function MyDocument({ token }) {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    if (token) {
      fetchData(token);
    }
  }, [token]);

  const fetchData = async (token) => {
    const docs = await axios.get("http://localhost:1234/mydocument", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    console.log("DOCS", docs);

    setDocs(docs.data);
  };

  return (
    <div>
      <h1>내 문서 목록</h1>
      <ul>
      {docs.map((item, i) => {
        return (
          <li key={i}>{item.context}</li>
        );
      })}
      </ul>
    </div>
  );
}
