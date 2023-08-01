import React from "react";
import "./Header.css";
import Logo1 from "../images/TrollFace.svg"
export default function Header() {
    return (
      <div className="header">
        <img src={Logo1} alt="Troll Face" />
        <h1>Meme Generator</h1>
        <p>React Course - Project 3</p>
      </div>
    )
}