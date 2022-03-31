import React from "react";
import { observer } from "mobx-react";

import Introduction from "../../components/Content/Introduction";
import CoupleRule from "../../components/Content/CoupleRule";
import TripRecord from "../../components/Content/TripRecord";
import Anniversary from "../../components/Content/Anniversary";
import Pictures from "../../components/Content/Pictures";

const ContentScreen: React.FC = observer((props: any) => {
  return (
    <>
      <Introduction />
      <CoupleRule />
      <Anniversary />
      <TripRecord />
      <Pictures />
    </>
  );
});

export default ContentScreen;
