import { Outlet, Link } from "react-router-dom";
import "./collectionstyle/Layout.css";
import { FaAlignJustify } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
import { useState } from "react";

export default function Layout() {
  const [isOpen, setIsopen] = useState(false);

  function handleClick(isOpen) {
    const nav = document.querySelector(".side-navbar");
    nav.style.left = isOpen ? "0" : "-60%";
  }

  return (
    <div className="body">
      <nav className="navbar">
        <h1>
          FLY{" "}
          <span className="HEADER">
            <span style={{ fontSize: "40px", color: "red" }}>W</span>ALK
          </span>
        </h1>
        <div className="nav-links">
          <p className="navbar-link">
            <a href="/">Home</a>
          </p>
          <p className="navbar-link">
            <a href="collection">Collection</a>
          </p>
          <p className="navbar-link">
            <a href="contact">Contact</a>
          </p>
        </div>

        {/* navbar */}
        <div className="navbar-menu-toggle" onClick={handleClick}>
          <i>
            <FaAlignJustify />
          </i>
        </div>
      </nav>

      {/* side navbar */}
      <div className="side-navbar" style={{ left: isOpen ? "0" : "-60%" }}>
        <p className="xmark">
          <i onClick={() => setIsopen(!isOpen)}>
            <FaXmark />
          </i>
        </p>
        <div className="side-nav-links">
          <p className="side-navbar-link">
            <a href="/">Home</a>
          </p>
          <p className="side-navbar-link">
            <a href="collection">Collection</a>
          </p>
          <p className="side-navbar-link">
            <a href="contact">Contact</a>
          </p>
        </div>
      </div>

      <Outlet />
    </div>
  );
}
