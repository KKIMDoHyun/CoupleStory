import React, { useEffect } from "react";
import axios from "axios";
import "./App.css";

// 화면
import HeaderScreen from "./screens/Header";
import FooterScreen from "./screens/Footer";

import ContentScreen from "./screens/Content";

function App() {
  const callApi = async () => {
    axios.get("/api").then((res) => console.log(res.data.test));
  };
  useEffect(() => {
    callApi();
  }, []);
  return (
    <div className="App">
      <HeaderScreen />
      <ContentScreen />
      <FooterScreen />
    </div>
  );
}

export default App;
