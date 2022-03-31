import React from "react";
import { observer } from "mobx-react";

// styles
import "./Introduction.style.css";

const Introduction: React.FC = observer(() => {
  return (
    <div id="introduction" className="introduction-container">
      <span style={{ border: "solid" }}>소개</span>
    </div>
  );
});

export default Introduction;
