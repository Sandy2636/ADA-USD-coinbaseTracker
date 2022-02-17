import React from "react";
import "./navbar.scss";
function Navbar() {
  return (
    <div className="navbar">
      <div className="nav_body">
        <div className="navTrade">
          <h3 className="trade">Trade</h3>
        </div>
        <div className="navOptions">
          <h4>Institution? Coinbase Exchange</h4>
          <h4>Log in</h4>
          <button>GET STARTED</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
