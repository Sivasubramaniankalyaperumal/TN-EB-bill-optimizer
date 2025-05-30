import { useState } from "react";
import "../styles/Home.css";
import Navbar from "../components/Navbar"; // Import Navbar

const Home = () => {
  const [units, setUnits] = useState("");
  const [billAmount, setBillAmount] = useState(null);
  const [breakdown, setBreakdown] = useState([]);

  // Handle number pad input
  const handleInput = (num) => {
    setUnits((prev) => prev + num);
  };

  // Clear the input
  const handleClear = () => {
    setUnits("");
    setBillAmount(null);
    setBreakdown([]);
  };

  // Tariff calculation logic
  const calculateBill = () => {
    let totalUnits = parseInt(units);
    let amount = 0;
    let breakdownDetails = [];

    if (totalUnits <= 500) {
      if (totalUnits > 400) {
        breakdownDetails.push(`401-500 units @ ₹6.45/unit = ₹${(totalUnits - 400) * 6.45}`);
        amount += (totalUnits - 400) * 6.45;
        totalUnits = 400;
      }
      if (totalUnits > 200) {
        breakdownDetails.push(`201-400 units @ ₹4.80/unit = ₹${(totalUnits - 200) * 4.80}`);
        amount += (totalUnits - 200) * 4.80;
        totalUnits = 200;
      }
      if (totalUnits > 100) {
        breakdownDetails.push(`101-200 units @ ₹2.35/unit = ₹${(totalUnits - 100) * 2.35}`);
        amount += (totalUnits - 100) * 2.35;
        totalUnits = 100;
      }
      breakdownDetails.push(`1-100 units @ ₹0.00/unit = ₹0`);
    } else {
      if (totalUnits > 1000) {
        breakdownDetails.push(`1001+ units @ ₹11.80/unit = ₹${(totalUnits - 1000) * 11.80}`);
        amount += (totalUnits - 1000) * 11.80;
        totalUnits = 1000;
      }
      if (totalUnits > 800) {
        breakdownDetails.push(`801-1000 units @ ₹10.70/unit = ₹${(totalUnits - 800) * 10.70}`);
        amount += (totalUnits - 800) * 10.70;
        totalUnits = 800;
      }
      if (totalUnits > 600) {
        breakdownDetails.push(`601-800 units @ ₹9.65/unit = ₹${(totalUnits - 600) * 9.65}`);
        amount += (totalUnits - 600) * 9.65;
        totalUnits = 600;
      }
      if (totalUnits > 500) {
        breakdownDetails.push(`501-600 units @ ₹8.55/unit = ₹${(totalUnits - 500) * 8.55}`);
        amount += (totalUnits - 500) * 8.55;
        totalUnits = 500;
      }
      breakdownDetails.push(`401-500 units @ ₹6.45/unit = ₹645`);
      breakdownDetails.push(`1-400 units @ ₹4.80/unit = ₹1920`);
      breakdownDetails.push(`1-100 units @ ₹0.00/unit = ₹0`);
      amount += 1920 + 645;
    }

    setBillAmount(amount);
    setBreakdown(breakdownDetails.reverse());
  };

  return (
    <div className="home-container">
      <Navbar /> {/* Add Navbar here */}

      <h1 className="title">TN-ELECTRICITY Bill Calculator - Calculate Your TNEB Electricity Bill</h1>
      <p className="subtitle">Works correctly for 2025</p>
      <p className="tariff-note">Based on the latest July 1, 2024 revised tariff</p>

      <div className="calculator">
        <h2>TN-Electricity Bill Calculator</h2>
        <input type="text" placeholder="Enter the Units" value={units} readOnly className="input-box" />

        <div className="number-pad">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
            <button key={num} onClick={() => handleInput(num)}>
              {num}
            </button>
          ))}
          <button className="clear-btn" onClick={handleClear}>Clear</button>
        </div>

        <button className="submit-btn" onClick={calculateBill}>Submit</button>

        {billAmount !== null && (
          <div className="result">
            <h3>Total Units Consumed: {units}</h3>
            <h4>Bill Breakdown:</h4>
            <ul>
              {breakdown.map((line, index) => (
                <li key={index}>{line}</li>
              ))}
            </ul>
            <h2 className="total-bill">Total Bill Amount for {units} units: ₹{billAmount.toFixed(2)}</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
