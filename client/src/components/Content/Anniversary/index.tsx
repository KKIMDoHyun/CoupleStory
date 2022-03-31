import React from "react";
import { observer } from "mobx-react";

// style
import "./Anniversary.style.css";

const Anniversary: React.FC = observer(() => {
  return (
    <div id="anniversary" className="anniversary-container">
      <h1 style={{ margin: 0 }}>기념일</h1>
    </div>
  );
});

export default Anniversary;
