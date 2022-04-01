import React, { useEffect } from "react";
import axios from "axios";

// style
import "./App.css";

// 화면
import MainPageScreen from "./screens/MainPageScreen";
import ContentScreen from "./screens/ContentScreen";
import TopScroll from "./components/global/TopScroll";

function App() {
  const callApi = async () => {
    axios.get("/api").then((res) => console.log(res.data.test));
  };
  useEffect(() => {
    callApi();
  }, []);
  return (
    <div className="outer">
      <TopScroll />
      <MainPageScreen />
      <ContentScreen />
    </div>
  );
}

export default App;
