import React from "react";
import { observer } from "mobx-react";

import Introduction from "../../components/Content/Introduction";
import CoupleRule from "../../components/Content/CoupleRule";
import TripRecord from "../../components/Content/TripRecord";
import Anniversary from "../../components/Content/Anniversary";
import Pictures from "../../components/Content/Pictures";

import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";

const ContentScreen: React.FC = observer((props: any) => {
  const onLeave = (origin: any, destination: any, direction: any) => {
    console.log("Leaving section " + origin.index);
  };
  const afterLoad = (origin: any, destination: any, direction: any) => {
    console.log("After load: " + destination.index);
  };
  return (
    <ReactFullpage
      scrollOverflow={true}
      navigation={true}
      navigationPosition={"right"}
      sectionsColor={["orange", "green", "green"]}
      onLeave={onLeave.bind(this)}
      afterLoad={afterLoad.bind(this)}
      render={({ state, fullpageApi }) => {
        return (
          <div id="fullpage-wrapper">
            {/* <div className="section section1"></div> */}
            <div className="section section1">
              <Introduction />
            </div>
            <div className="section">
              <CoupleRule />
            </div>
          </div>
        );
      }}
    />
    // <>
    //   <Introduction />
    //   <CoupleRule />
    //   <Anniversary />
    //   <TripRecord />
    //   <Pictures />
    // </>
  );
});

export default ContentScreen;
