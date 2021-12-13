import React from "react";
import "./PieChart.css";
import { datas } from "../../FAKE_DATA";
import Chart from "react-google-charts";

const PieChart = () => {
  const males = datas.filter((d) => d.gender === "M").length;
  const females = datas.filter((d) => d.gender === "F").length;
  return (
    <div>
      <Chart
        width={"500px"}
        height={"300px"}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={[
          ["Gender", "Count"],
          ["Male", males],
          ["Female", females],
        ]}
        options={{
          title: "Gender Comparison",
        }}
        rootProps={{ "data-testid": "1" }}
      />
    </div>
  );
};

export default PieChart;
