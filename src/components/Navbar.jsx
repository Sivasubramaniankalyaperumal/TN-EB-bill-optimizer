import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <h2 className="logo">
        <span className="red">TN-ELECTRICITY</span>
        <span className="blue">BillOptimizer</span>
      </h2>
      <ul className="nav-links">
        <li>
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/smartsaver" id="navss" className={location.pathname === "/smartsaver" ? "active" : ""}>
            Smart Saver
          </Link>
        </li>
        <li>
          <Link to="/tariff" className={location.pathname === "/tariff" ? "active" : ""}>
            Tariff Details
          </Link>
        </li>
        <li>
          <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
