import React from "react";
import "./Navbar.css";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import {
  faMagnifyingGlass,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="logo-container">
          <h1 className="logo">CORKOWL</h1>
        </div>
        <div id="searchbar">
          <button id="btn">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
          <input
            id="movie"
            type="text"
            placeholder="Search wines, customers here..."
          />
        </div>
        <div className="menu-container">
          <div className="menu-list">
            <div className="menu-list-item active">
              <FontAwesomeIcon icon={faBell} />
            </div>

            <div className="menu-list-item profile">
              <div>
                <h6>Nicholas D.</h6>
              </div>
              <div>
                <img src="../profile.jpeg" alt="" />
              </div>
              <div className="down">
                <FontAwesomeIcon icon={faAngleDown} />
              </div>
            </div>
            <div className="menu-list-item"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
