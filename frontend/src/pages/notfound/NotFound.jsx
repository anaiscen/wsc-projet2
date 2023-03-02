import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <div>
      <p className="main-titre">
        This page does not exist !!! Click{" "}
        <Link to="/">
          <span className="title-click">here</span>
        </Link>{" "}
        to return to the main page
      </p>
    </div>
  );
}

export default NotFound;
