import React from "react";
import "./PieChart.css";
import Chart from "react-google-charts";

const PieChart = ({ people }) => {
  const males = people.filter(
    (d) => d.gender === "M" || d.gender.toLowerCase() === "male"
  ).length;
  const females = people.filter(
    (d) => d.gender === "F" || d.gender.toString() === "female"
  ).length;
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
