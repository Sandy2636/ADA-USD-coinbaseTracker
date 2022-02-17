import React, { useState, useEffect, useRef } from "react";
import { formatData } from "./utils";
import { Line } from "react-chartjs-2";

function Chart() {
  const [pastData, setpastData] = useState({});
  const ws = useRef(null);
  const url = "https://api.pro.coinbase.com";
  ws.current = new WebSocket("wss://ws-feed.pro.coinbase.com");

  useEffect(() => {
    let historicalDataURL = `${url}/products/ADA-USD/candles?granularity=86400`;
    const fetchHistoricalData = async () => {
      let dataArr = [];
      await fetch(historicalDataURL)
        .then((res) => res.json())
        .then((data) => (dataArr = data));

      let formattedData = formatData(dataArr);
      setpastData(formattedData);
    };

    fetchHistoricalData();
  }, []);

  const opts = {
    tooltips: {
      intersect: false,
      mode: "index",
    },
    responsive: true,
    maintainAspectRatio: true,
  };

  return (
    <div className="container">
      <div className="dashboard">
        <div className="chart-container">
          <Line data={pastData} options={opts} />
        </div>
      </div>
    </div>
  );
}

export default Chart;
