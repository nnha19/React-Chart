import React, { useEffect, useState } from "react";
import Chart from "react-google-charts";

const PieChart = ({ genders }) => {
  const males = genders.filter(
    (d) => d === "M" || d.toLowerCase() === "male"
  ).length;
  const females = genders.filter(
    (d) => d === "F" || d.toString() === "female"
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
