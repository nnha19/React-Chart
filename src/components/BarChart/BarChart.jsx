import React from "react";
import "./BarChart.css";
import { datas } from "../../FAKE_DATA";
import Chart from "react-google-charts";

const BarChart = () => {
  const youngAdults = datas.filter((d) => d.age <= 35).length;
  const adults = datas.filter((d) => d.age > 35 && d.age <= 50).length;
  const seniors = datas.filter((d) => d.age > 50).length;
  return (
    <div>
      <Chart
        width={"500px"}
        height={"300px"}
        chartType="Bar"
        loader={<div>Loading Chart</div>}
        data={[
          ["Age", "Count"],
          ["Young-Adults", youngAdults],
          ["Adults", adults],
          ["Seniors", seniors],
        ]}
        options={{
          // Material design options
          chart: {
            title: "Age",
          },
        }}
        // For tests
        rootProps={{ "data-testid": "2" }}
      />
    </div>
  );
};

export default BarChart;
