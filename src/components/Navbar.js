import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";
import logo from "../assets/logo3.png"

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <ReorderIcon />
        </button>
      </div>
     <div className="logo">
     <img src={logo} alt="logo"></img>
     </div>
      <div className="links">
        
        <Link to="/"> Home </Link>
        <Link to="/projects"> About You </Link>
        <Link to="/experience"> About Us </Link>
        <Link to="/thankyou"> Thank You! </Link>
        <Link to="/qa"> Q&A </Link>
      </div>
    </div>
  );
}

export default Navbar;
