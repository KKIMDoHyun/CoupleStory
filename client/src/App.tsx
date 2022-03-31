import React, { useEffect } from "react";
import axios from "axios";

// 화면

import MainPageScreen from "./screens/MainPageScreen";
import ContentScreen from "./screens/ContentScreen";

function App() {
  const callApi = async () => {
    axios.get("/api").then((res) => console.log(res.data.test));
  };
  useEffect(() => {
    callApi();
  }, []);
  return (
    <div className="App">
      <MainPageScreen />
      <ContentScreen />
    </div>
  );
}

export default App;
