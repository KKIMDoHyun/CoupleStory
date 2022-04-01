import React from "react";
import { observer } from "mobx-react";

// store
import DateStore from "../../../stores/DateStore";

// style
import "./MainContent.style.css";

const MainContent: React.FC = observer(() => {
  return (
    <div className="main-container" id="main">
      {DateStore.getLovingDay().map((v, i) => {
        return (
          <span key={i} className="date-text">
            {v}
          </span>
        );
      })}
      {/* {DateStore.getLovingDay()}일 */}
    </div>
  );
});

export default MainContent;
