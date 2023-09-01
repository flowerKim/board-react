import "./App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import MainLayout from "./views/MainLayout";

export default function App() {
  const [connection, setConnection] = useState("");
  const connectionTest = () => {
    axios
      .get("http://localhost:4000/")
      .then((response) => {
        setConnection(response.data);
      })
      .catch((error) => {
        setConnection(error.message);
      });
  };

  useEffect(() => {
    connectionTest();
    // starHandler();
  }, []);

  const starHandler = () => {
    let testhtml = "";
    let innerhtml = "";
    for (let i = 5; i > 0; i--) {
      innerhtml = innerhtml + "<div>";
      for (let j = 0; j < i; j++) {
        testhtml = testhtml + " ";
        innerhtml = innerhtml + "&nbsp;";
      }
      for (let j = 0; j <= 5 - i; j++) {
        testhtml = testhtml + "*";
        innerhtml = innerhtml + "*";
      }
      testhtml = testhtml + "\n";
      innerhtml = innerhtml + "</div>";
    }
    console.log(testhtml);
    // console.log(innerhtml);
    // document.write(innerhtml);
    return innerhtml;
  };

  return (
    <>
      <MainLayout />
      <div></div>
    </>
  );
}
