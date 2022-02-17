import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import "./body.scss";
import Chart from "./Chart";
function Body() {
  const SpreadInfo = () => {
    return (
      <div className="spreadInfo">
        <p>3200.82</p>
        <p className="green">
          1.<b>0703</b>
        </p>
        <p>-</p>
      </div>
    );
  };
  const OrderInfo = () => {
    return (
      <div className="orderInfo">
        <p>18.00</p>
        <p className="price">
          1.<b>0720</b>
        </p>
        <p>-</p>
      </div>
    );
  };
  return (
    <div className="body">
      <div className="orderBook">
        <div className="overlay">
          <button>GET STARTED</button>
          <p>Or</p>
          <p className="Login">Log In</p>
        </div>
        <div className="nav">
          <b>Order Book</b>
        </div>
        <div className="nav-desc">
          <p>Market Size</p>
          <p>Price(USD)</p>
          <p>My Size</p>
        </div>
        <OrderInfo />
        <OrderInfo />
        <OrderInfo />
        <OrderInfo />
        <OrderInfo />
        <OrderInfo />
        <OrderInfo />
        <OrderInfo />
        <OrderInfo />
        <OrderInfo />
        <OrderInfo />
        <OrderInfo />
        <OrderInfo />
        <OrderInfo />
        <OrderInfo />
        <div className="border" />
        <div className="nav-desc">
          <p>USD Spread</p>
          <p>0.0001</p>
          <p>⠀⠀⠀⠀</p>
        </div>
        <SpreadInfo />
        <SpreadInfo />
        <SpreadInfo />
        <SpreadInfo />
        <SpreadInfo />
        <SpreadInfo />
        <SpreadInfo />
        <SpreadInfo />
        <SpreadInfo />
        <SpreadInfo />
        <SpreadInfo />
        <SpreadInfo />
        <SpreadInfo />
        <SpreadInfo />
        <SpreadInfo />
        <SpreadInfo />
        <div className="border" />
        <div className="nav-desc">
          <p>Aggregation</p>
          <p>0.0001</p>
          <p>
            -<b className="plus">+</b>
          </p>
        </div>
      </div>
      <div className="priceChart">
        <div className="chart">
          <div className="nav">
            <div className="cont">
              <b>Price Chart</b>
              <div className="chart_navRight">
                <span className="focus">Price Chart</span>
                <span>Depth Chart</span>
              </div>
            </div>
          </div>
          <div className="nav-desc">
            <div className="cont">
              <div className="left">
                <div className="lcont">
                  <p>5m</p>
                  <KeyboardArrowDownIcon />
                </div>
                <div className="lcont">
                  <p>Line</p>
                  <KeyboardArrowDownIcon />
                </div>
                <div className="lcont">
                  <p>Overlay</p>
                  <KeyboardArrowDownIcon />
                </div>
              </div>
              <div className="right">
                <p>O:</p>
                <p>H:</p>
                <p>L:</p>
                <p>C:</p>
                <p>V:</p>
                <ArrowRightIcon className="icon" />
              </div>
            </div>
          </div>
          <div className="chartContainer">
            <Chart />
          </div>
        </div>
        <div className="openOrder">
          <div className="overlay">
            <button>GET STARTED</button>
            <p>Or</p>
            <p className="Login">Log In</p>
          </div>
          <div className="nav">
            <div className="cont">
              <b>Open Orders</b>
              <div className="chart_navRight">
                <span className="focus">Open</span>
                <span>Fills</span>
              </div>
            </div>
          </div>
          <div className="nav-desc">
            <p>Size</p>
            <p>Side</p>
            <p>Filled(ADA)</p>
            <p>Price(USD)</p>
            <p>Fee(USD)</p>
            <p>Status</p>
          </div>
          <p>No Orders to show</p>
        </div>
      </div>
      <div className="history">
        <div className="overlay">
          <button>GET STARTED</button>
          <p>Or</p>
          <p className="Login">Log In</p>
        </div>
        <div className="nav">
          <b>Trade History</b>
        </div>
        <div className="nav-desc">
          <p>Trade Size</p>
          <p>Price(USD)</p>
          <p>Time</p>
        </div>
        <p>No trades to show</p>
      </div>
    </div>
  );
}

export default Body;
