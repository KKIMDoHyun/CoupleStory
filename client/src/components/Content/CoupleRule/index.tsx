import React from "react";
import { observer } from "mobx-react";

// style
import "./CoupleRule.style.css";

const CoupleRule: React.FC = observer(() => {
  return (
    <div id="coupleRule" className="coupleRule-container">
      <h1 style={{ margin: 0 }}>룰</h1>
    </div>
  );
});

export default CoupleRule;
