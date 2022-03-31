import React from "react";
import { observer } from "mobx-react";

// style
import "./Pictures.style.css";

const Pictures: React.FC = observer(() => {
  return (
    <div id="pictures" className="pictures-container">
      <span>사진모음집</span>
    </div>
  );
});

export default Pictures;
