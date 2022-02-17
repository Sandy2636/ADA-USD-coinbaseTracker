export const formatData = (data) => {
  let finalData = {
    labels: [],
    datasets: [
      {
        label: "Price",
        data: [],
        backgroundColor: "rgb(14, 125, 255,0.8)",
        borderColor: "rgb(14, 125, 255,0.2)",
        fill: false,
      },
    ],
  };

  let dates = data.map((val) => {
    const ts = val[0];
    let date = new Date(ts * 1000);
    let month = date.getMonth() + 1;

    let final = `${month}`;
    return final;
  });

  let priceArr = data.map((val) => {
    return val[4];
  });

  priceArr.reverse();
  dates.reverse();
  finalData.labels = dates;
  finalData.datasets[0].data = priceArr;

  return finalData;
};
