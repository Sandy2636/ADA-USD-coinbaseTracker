import React from "react";
import "./tabbar.scss";
function Tabbar() {
  return (
    <div className="tabbar">
      <div className="tabbar_right">
        <div className="item">
          <h4>1.0673 USD</h4>
          <p>Last trade price</p>
        </div>
        <div className="item">
          <h4 className="color">+3.22%</h4>
          <p>24h price</p>
        </div>
        <div className="item">
          <h4>71,149,438 ADA</h4>
          <p>24h volume</p>
        </div>
      </div>
    </div>
  );
}

export default Tabbar;
