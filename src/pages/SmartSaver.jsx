import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/SmartSaver.css";


const applianceData = {
  "LED Bulb (40W Equivalent)": 10,
  "LED Bulb (60W Equivalent)": 13,
  "LED Bulb (75W Equivalent)": 18,
  "LED Bulb (100W Equivalent)": 23,
  "CFL Bulb (40W Equivalent)": 10,
  "CFL Bulb (60W Equivalent)": 13,
  "CFL Bulb (75W Equivalent)": 18,
  "CFL Bulb (100W Equivalent)": 23,
  "Freezer (Upright, 15 cu. ft.)": 45,
  "Freezer (Chest, 15 cu. ft.)": 45,
  "Fridge (20 cu. ft. AC)": 58,
  "Fridge (16 cu. ft. AC)": 50,
  "Central Air Conditioner (24,000 BTU)": 3800,
  "Central Air Conditioner (10,000 BTU)": 3250,
  "Water Pump":35,
  "Washing Machine":50,

  "Blender": 500,
  "Can Opener": 150,
  "Coffee Machine": 1000,
  "Dishwasher": 1350,
  "Espresso Machine": 800,
  "Garbage Disposal": 450,
  "Kettle (Electric)": 1200,
  "Microwave": 1000,
  "Oven (Electric)": 1200,
  "Toaster": 850,
  "Toaster Oven": 1200,
  "Stand Mixer": 300,
  "Box Fan": 200,
  "Ceiling Fan": 120,
  "Furnace Fan Blower": 800,
  "Space Heater": 1500,
  "Tankless Water Heater (Electric)": 18000,
  "Water Heater (Electric)": 4500,
  "Window AC (10,000 BTU)": 900,
  "Window AC (12,000 BTU)": 3250,
  "Clothes Dryer (Electric)": 3000,
  "Clothes Dryer (Gas)": 1800,
  "Clothes Washer": 800,
  "Iron": 1200,
  "Bluray Player": 15,
  "Cable Box": 35,
  "DVD Player": 18,
  "TV (LCD)": 150,
  "TV (Plasma)": 200,
  "Satellite Dish": 25,
  "Stereo Receiver": 450,
  "Video Game Console": 150,
  "Compact Fluorescent (20W)": 22,
  "Compact Fluorescent (25W)": 28,
  "Halogen (40W)": 40,
  "Incandescent (50W)": 50,
  "Incandescent (100W)": 100,

  "Desktop Computer (Standard)": 200,
  "Desktop Computer (Gaming)": 500,
  "Laptop": 100,
  "LCD Monitor": 100,
  "Printer": 100,
  "Router": 7,
  "Smartphone (Recharge)": 7,
  "Tablet (Recharge)": 8,
  "Band Saw (14\")": 1100,
  "Belt Sander (3\")": 1000,
  "Chain Saw (12\")": 1100,
  "Circular Saw (7 1/4\")": 900,
  "Disc Sander (9\")": 1200,
  "Drill (1/4\")": 250,
  "Drill (1/2\")": 750,
  "Drill (1\")": 1000,
  "Hedge Trimmer": 450,
  "Weed Eater": 500,
  "Clock Radio": 7,
  "Curling Iron": 150,
  "Dehumidifier": 280,
  "Electric Shaver": 15,
  "Electric Blanket": 200,
  "Hair Dryer": 1500,
  "Humidifier": 200,
  "Radiotelephone (Receive)": 5,
  "Radiotelephone (Transmit)": 75,
  "Sewing Machine": 100
};

const energySavingTips = [
  "Turn off lights when not needed.",
  "Use energy-efficient appliances.",
  "Reduce AC OR APPLIANCES usage by setting a higher temperature.",
  "Unplug devices when not in use.",
  "Use natural lighting during the day.",
  "Use power strips to control multiple devices.",
  "Limit the use of high-energy appliances.",
  "Reduce washing machine cycles.",
  "Opt for LED bulbs instead of incandescent bulbs.",
  "Use fans instead of air conditioning when possible."
];

const SmartSaver = () => {
  const [appliances, setAppliances] = useState([
    { name: "", quantity: "", watts: "", hours: "", wattHours: "" },
  ]);
  const [expectedUnit, setExpectedUnit] = useState("");
  const [showTips, setShowTips] = useState(false);

  const handleChange = (index, field, value) => {
    const updatedAppliances = [...appliances];
    updatedAppliances[index][field] = value;

    if (field === "name") {
      updatedAppliances[index].watts = applianceData[value] || "";
    }

    if (["quantity", "watts", "hours"].includes(field)) {
      const q = parseFloat(updatedAppliances[index].quantity) || 0;
      const w = parseFloat(updatedAppliances[index].watts) || 0;
      const h = parseFloat(updatedAppliances[index].hours) || 0;
      updatedAppliances[index].wattHours = q * w * h;
    }

    setAppliances(updatedAppliances);
  };

  const addAppliance = () => {
    setAppliances([
      ...appliances,
      { name: "", quantity: "", watts: "", hours: "", wattHours: "" },
    ]);
  };

  const removeAppliance = (index) => {
    const updatedAppliances = appliances.filter((_, i) => i !== index);
    setAppliances(updatedAppliances);
  };

  const clearFields = () => {
    setAppliances([{ name: "", quantity: "", watts: "", hours: "", wattHours: "" }]);
    setExpectedUnit("");
  };

  const totalPeakLoad = appliances.reduce((sum, a) => sum + (parseFloat(a.watts) || 0), 0);
  const totalWattHoursPerDay = appliances.reduce((sum, a) => sum + (parseFloat(a.wattHours) || 0), 0);
  const kWhPerMonth = (totalWattHoursPerDay * 30) / 1000;

  const generateTips = () => {
    const expected = parseFloat(expectedUnit);
    if (isNaN(expected)) return [];

    const difference = kWhPerMonth - expected;
    if (difference <= 0) return [];

    const numTips = Math.floor(difference / 15);
    return energySavingTips.slice(0, numTips);
  };

  return (
    <div className="sscontainer">
      <Navbar />
      <div className="smart-saver-container">
        <h1>Electricity Usage Calculator</h1>
        <h2>[ Your Home ]</h2>
        <p>Enter all the details of appliances using in your home </p>


        <div className="appliance-list">
        <table >
          <tr className="tittle"> 
            <td ><h5>Home Appliances </h5></td>
            <td ><h5>no.of.Appliances </h5></td>
            <td ><h5>Watts of appliances</h5></td>
            <td ><h5>Using hours per day</h5></td>
            <td ><h5>Total units per day</h5></td>                
          </tr>
       </table>
          {appliances.map((appliance, index) => (
            <div key={index} className="appliance-row">
              <select
                value={appliance.name}
                onChange={(e) => handleChange(index, "name", e.target.value)}
              >
                <option value="">Select an Appliance</option>
                {Object.keys(applianceData).map((item) => (
                  <option key={item} value={item}>
                    {item} - {applianceData[item]}W
                  </option>
                ))}
              </select>

              <input
                type="number"
                placeholder="Quantity"
                value={appliance.quantity}
                onChange={(e) => handleChange(index, "quantity", e.target.value)}
              />

              <input
                type="number"
                placeholder="Watts"
                value={appliance.watts}
                onChange={(e) => handleChange(index, "watts", e.target.value)}
              />

              <input
                type="number"
                placeholder="Hours per Day"
                value={appliance.hours}
                onChange={(e) => handleChange(index, "hours", e.target.value)}
              />

              <input type="text" value={appliance.wattHours} placeholder="Watt Hours per Day" disabled />

              <button className="remove-btn" onClick={() => removeAppliance(index)}>X</button>
            </div>
          ))}
        </div>

        <button className="add-btn" onClick={addAppliance}>+ Add Appliance</button>
        <button className="clear-btn" onClick={clearFields}>Clear All Fields</button>

        <div className="results">
          <div className="result-box">
            <label>Total Watts (Peak Load)</label>
            <div className="result-value">{totalPeakLoad}</div>
          </div>

          <div className="result-box">
            <label>Total Watt Hours per Day</label>
            <div className="result-value">{totalWattHoursPerDay}</div>
          </div>

          <div className="result-box1">
            <label>Kilowatt Hours Per Month</label>
            <div className="result-value">{kWhPerMonth.toFixed(2)} kWh/mo</div>
          </div>
        </div>


        <div className="smart-saver-container2">
        <div className="expected-unit-container">
         <h1>Expected Unit for Next Month</h1>
            <h4> Enter your expected kWh for next month & follow the given tips</h4>
                  <input
                    type="number"
                    placeholder="Enter Expected Unit"
                    value={expectedUnit}
                    onChange={(e) => {
                    setExpectedUnit(e.target.value);
                    setShowTips(false); // Hide tips when user changes input
                    }}
                  />
               <button onClick={() => setShowTips(true)}>Generate Tips</button>

                {showTips && expectedUnit.trim() !== "" && generateTips().length > 0 && (
             <div className="suggestions">
                <h2>Energy-Saving Tips</h2>
                <ul>
                {generateTips().map((tip, index) => (
                 <li key={index}>{tip}</li>
                 ))}
                 </ul>
             </div>
           )}
          </div>
        </div>

    </div>
    </div>
  );
};

export default SmartSaver;
