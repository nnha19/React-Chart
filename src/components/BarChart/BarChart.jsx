import React from "react";
import Chart from "react-google-charts";

const BarChart = ({ age }) => {
  const youngAdults = age.filter((d) => d <= 35).length;
  const adults = age.filter((d) => d > 35 && d <= 50).length;
  const seniors = age.filter((d) => d > 50).length;

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
          chart: {
            title: "Age",
          },
        }}
        rootProps={{ "data-testid": "2" }}
      />
    </div>
  );
};

export default BarChart;
