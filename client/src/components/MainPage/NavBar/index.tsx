import React from "react";
import { observer } from "mobx-react";
import { Link } from "react-scroll";

// styles
import "./NavBar.style.css";

// string
import string from "./string";

const NavBar: React.FC = observer(() => {
  return (
    <div className="header-bar">
      <button
        className="title-btn"
        onClick={() => {
          console.log("title 클릭");
        }}
      >
        <Link to="main" spy={true} smooth={true} offset={-76} duration={500}>
          <span className="title-text">{string.TITLE}</span>
        </Link>
      </button>
      <button className="custom-btn btn-6" onClick={() => {}}>
        <Link
          to="introduction"
          spy={true}
          smooth={true}
          offset={-76}
          duration={500}
        >
          <span>소개</span>
        </Link>
      </button>
      <button className="custom-btn btn-6">
        <Link
          to="coupleRule"
          spy={true}
          smooth={true}
          offset={-76}
          duration={500}
        >
          <span>규칙</span>
        </Link>
      </button>
      <button className="custom-btn btn-6">
        <Link
          to="tripRecord"
          spy={true}
          smooth={true}
          offset={-76}
          duration={500}
        >
          <span>여행일지</span>
        </Link>
      </button>
      <button className="custom-btn btn-6">
        <Link
          to="anniversary"
          spy={true}
          smooth={true}
          offset={-76}
          duration={500}
        >
          <span>기념일</span>
        </Link>
      </button>
      <button className="custom-btn btn-6">
        <Link
          to="pictures"
          spy={true}
          smooth={true}
          offset={-76}
          duration={500}
        >
          <span>사진모음집</span>
        </Link>
      </button>
    </div>
  );
});

export default NavBar;
