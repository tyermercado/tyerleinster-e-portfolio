import React from "react";
import { useState } from "react";
import "./nav.css";
import { BiHome, BiUser, BiCodeAlt, BiMessageSquareDetail } from "react-icons/bi";
import { AiOutlineFolderOpen } from "react-icons/ai";



const Nav = () => {
  const [activeNav, setActiveNav] = useState("#home");

  return (
    <nav id="nav">
      <a
        href="#home"
        className={activeNav === "#home" ? "active" : ""}
        onClick={() => setActiveNav("#home")}
      >
        <BiHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <BiUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <BiCodeAlt  />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        <AiOutlineFolderOpen />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
