import React, { useEffect } from "react";
import axios from "axios";
import "./App.css";

import ExampleScreen from "./screens/ExampleScreen";

function App() {
  const callApi = async () => {
    axios.get("/api").then((res) => console.log(res.data.test));
  };
  useEffect(() => {
    callApi();
  }, []);
  return (
    <div className="App">
      <ExampleScreen />
    </div>
  );
}

export default App;
