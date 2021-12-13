import React from "react";
import "./BarChart.css";
import Chart from "react-google-charts";

const BarChart = ({ people }) => {
  const youngAdults = people.filter((d) => d.age <= 35).length;
  const adults = people.filter((d) => d.age > 35 && d.age <= 50).length;
  const seniors = people.filter((d) => d.age > 50).length;
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
