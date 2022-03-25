import React from "react";
import { observer } from "mobx-react";

import ScrollButton from "../../components/global/ScrollTopButton";

import Introduction from "./introduction";
const ContentScreen: React.FC = observer((props: any) => {
  return (
    <div style={{ zIndex: 1 }}>
      <Introduction />
      <ScrollButton />
    </div>
  );
});

export default ContentScreen;
