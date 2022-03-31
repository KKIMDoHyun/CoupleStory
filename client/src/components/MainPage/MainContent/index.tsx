import React from "react";
import { observer } from "mobx-react";

// store
import DateStore from "../../../stores/DateStore";

// style
import "./MainContent.style.css";

const MainContent: React.FC = observer(() => {
  return (
    <div className="main-container">
      <h1
        style={{
          margin: 0,
          border: "solid",
          marginBottom: "8vh",
        }}
      >
        {DateStore.getLovingDay()}일
      </h1>
    </div>
  );
});

export default MainContent;
