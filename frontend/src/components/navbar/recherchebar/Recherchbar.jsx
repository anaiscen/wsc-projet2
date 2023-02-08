import React from "react";
import "./Recherchbar.css";

function Recherchbar() {
  return (
    <div>
      <input
        type="text"
        placeholder="Chercher sur Nacom"
        className="search-input"
      />
    </div>
  );
}

export default Recherchbar;
