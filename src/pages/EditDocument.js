import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function EditDocument() {
  const [context, setContext] = useState("");
  const { id } = useParams();

  const fetchData = async () => {
    const selectedDoc = await axios.post(
      "http://localhost:1234/selectedDocument",
      {
        id,
      }
    );

    setContext(selectedDoc.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <textarea value={`${context?.context}`}></textarea>
    </div>
  );
}
