import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css"; // Add this for styling

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/tariff-details">Tariff Details</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/smart-saver">Smart Saver</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
