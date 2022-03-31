import React from "react";
import { observer } from "mobx-react";

// style
import "./TripRecord.style.css";

const TripRecord: React.FC = observer(() => {
  return (
    <div id="tripRecord" className="tripRecord-container">
      <h1 style={{ margin: 0 }}>여행일지</h1>
    </div>
  );
});

export default TripRecord;
