import React, { useState } from "react";
import { Link } from "react-router-dom";

// Router wrapper pisemo u manje file-ove, da bi izgledalo naprednije
//import Videos from "./Videos";
//import "./App.css";
export default function App() {
  return (
    // <div>
    // //   <Videos/>

    // </div>

    <nav>
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/LOGIN">LOGIN</Link>
        </li>
        <li>
          <Link to="/ABOUT">ABOUT</Link>
        </li>
        <li>
          <Link to="/car">Car</Link>
        </li>
        <li>
          <Link to="/person">Person</Link>
        </li>
      </ul>
    </nav>
  );
}
