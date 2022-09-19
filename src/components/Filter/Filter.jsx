import React from "react";
import "./Filter.css";
import {
  faDesktop,
  faLayerGroup,
  faBagShopping,
  faUserGroup,
  faFileLines,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Filter = () => {
  return (
    <div className="filter">
      <div className="item first">
        <div>
          <div className="icon">
            <FontAwesomeIcon icon={faDesktop} />
          </div>
          <span> Dashboard</span>
        </div>
      </div>
      <div className="item">
        <div>
          <div className="icon">
            <FontAwesomeIcon icon={faLayerGroup} />
          </div>
          <span> Inventory</span>
        </div>
      </div>
      <div className="item">
        <div>
          <div className="icon">
            <FontAwesomeIcon icon={faBagShopping} />
          </div>
          <span> Orders</span>
        </div>
      </div>
      <div className="item">
        <div>
          <div className="icon">
            <FontAwesomeIcon icon={faUserGroup} />
          </div>
          <span> Customers</span>
        </div>
      </div>
      <div className="item">
        <div>
          <div className="icon">
            <FontAwesomeIcon icon={faFileLines} />
          </div>
          <span> Reports</span>
        </div>
      </div>
      <div className="item">
        <div>
          <div className="icon">
            <FontAwesomeIcon icon={faGear} />
          </div>
          <span> Settings</span>
        </div>
      </div>
    </div>
  );
};
