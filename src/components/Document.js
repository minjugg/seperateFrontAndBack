import React, { useState, useEffect } from "react";
import axios from "axios";
import MyDocument from "./MyDocument";
import { Link } from "react-router-dom";

export default function Document({ token }) {
  const [docs, setDocs] = useState([]);

  const fetchData = async () => {
    const docs = await axios.get("http://localhost:1234/home");
    const allDocs = docs.data;

    setDocs(allDocs);
  };

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div>
      <h1>활동 중 문서 목록</h1>
      <ul>
        {docs && docs.map((item, i) => {
          return (
            <li key={i}>
              <Link to={`/documents/${item._id}`}>
                {item.context}
              </Link>
            </li>
          );
        })}
      </ul>
      {token && <MyDocument token={token} />}
    </div>
  );
}
