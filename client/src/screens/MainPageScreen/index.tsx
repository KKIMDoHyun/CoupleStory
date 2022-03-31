import React from "react";
import { observer } from "mobx-react";

// components
import NavBar from "../../components/MainPage/NavBar";
import MainContent from "../../components/MainPage/MainContent";

const MainPageScreen: React.FC = observer(() => {
  return (
    <>
      <NavBar />
      <MainContent />
    </>
  );
});

export default MainPageScreen;
