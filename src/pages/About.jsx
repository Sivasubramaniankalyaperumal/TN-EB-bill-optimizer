import React from "react";
import Navbar from "../components/Navbar"; // Import Navbar
import "../styles/About.css"; // Import CSS for styling

const About = () => {
  return (
    <div className="about-container">
      {/* Navbar */}
      <Navbar />

      <div className="about-content">
        <h1>About TN-ELECTRICITY Bill Optimizer</h1>
        <p>
          The <strong>TN-ELECTRICITY Bill Optimizer</strong> is a tool designed by <b>Mr Sivasubramanian</b> to help Tamil Nadu electricity consumers 
          calculate their **bimonthly or monthly electricity bill** based on the latest tariff rates.
        </p>

        <h2>🔹 Features</h2>
        <ul>
          <li>📊 **Accurate Bill Calculation** - Based on TNEB’s latest tariff.</li>
          <li>💡 **Smart Saver Suggestions** - Reduce electricity consumption & save money.</li>
          <li>📜 **Updated Tariff Details** - View the latest TNEB electricity rates.</li>
        </ul>

        <h2>🔹 Why Use This Tool?</h2>
        <p>
          This calculator helps Tamil Nadu residents easily <b>optimize & estimate</b> their **electricity bills** 
          without manually calculating the tariff slabs.
        </p>
      </div>
    </div>
  );
};

export default About;
