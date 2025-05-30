import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar"; // Import Navbar
import "../styles/TariffDetails.css";

const TariffDetails = () => {
  return (
    <div className="tariff-container">
      {/* Include Navbar */}
      <Navbar />

      <h1>Tariff Details</h1>
      <p>Below are the latest TNEB tariff rates (Updated for 2025)</p>
      
      <div className="container2">
      <h2>🔹 If the Usage is Below 500 Units</h2>
      <table className="tariff-table">
        <thead>
          <tr>
            <th>Units (Bimonthly)</th>
            <th>Rate per Unit (₹)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1 - 100</td>
            <td>₹0.00 (Free)</td>
          </tr>
          <tr>
            <td>101 - 200</td>
            <td>₹2.35 per unit</td>
          </tr>
          <tr>
            <td>201 - 400</td>
            <td>₹4.80 per unit</td>
          </tr>
          <tr>
            <td>401 - 500</td>
            <td>₹6.45 per unit</td>
          </tr>
        </tbody>
      </table>

      <h2>🔹 If the Usage is Above 500 Units</h2>
      <table className="tariff-table">
        <thead>
          <tr>
            <th>Units (Bimonthly)</th>
            <th>Rate per Unit (₹)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1 - 400</td>
            <td>₹4.80 per unit</td>
          </tr>
          <tr>
            <td>401 - 500</td>
            <td>₹6.45 per unit</td>
          </tr>
          <tr>
            <td>501 - 600</td>
            <td>₹8.55 per unit</td>
          </tr>
          <tr>
            <td>601 - 800</td>
            <td>₹9.65 per unit</td>
          </tr>
          <tr>
            <td>801 - 1000</td>
            <td>₹10.70 per unit</td>
          </tr>
          <tr>
            <td>Above 1000</td>
            <td>₹11.80 per unit</td>
          </tr>
        </tbody>
      </table>

      <div className="back-home">
        <Link to="/">⬅ Back to Home</Link>
      </div>
    </div>
    </div>
  );
};

export default TariffDetails;
