import React from "react";
import { observer } from "mobx-react";

// styles
import "./Introduction.style.css";

const Introduction: React.FC = observer(() => {
  return (
    <div id="introduction" className="introduction-container">
      <div className="male-introduction">
        <img width="50%" alt="female" src="img/다운로드.jpg" />
        <span>김도현</span>
        <span>1998.12.13</span>
        <span>AB형</span>
        <span>010-9249-5992</span>
        <div style={{ marginBottom: "30%" }}></div>
      </div>
      <div>
        <span style={{ fontSize: 50 }}>❤️</span>
      </div>
      <div className="female-introduction">
        <img width="50%" alt="male" src="img/준희.png" />
        <span>김준희</span>
        <span>1999.02.18</span>
        <span>O형</span>
        <span>010-4918-6625</span>
        <div style={{ marginBottom: "30%" }}></div>
      </div>
    </div>
  );
});

export default Introduction;
