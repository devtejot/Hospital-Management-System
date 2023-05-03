import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Year", "Patients", "Appointments", "Doctors"],
  ["2019", 59, 65, 20],
  ["2020", 121, 111, 30],
  ["2021", 150, 160, 42],
  ["2022", 200, 226, 53],
];

export const options = {
  chart: {
    title: "Hospital Growth",
    subtitle: "Patients, Appointments, and Doctors: 2014-2017",
  },
};

export default function LineChart() {
  return (
    <Chart
      chartType="Line"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
