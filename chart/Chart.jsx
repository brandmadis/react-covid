import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../api";
import { Line, Bar } from "react-chartjs-2";
import styles from "./Chart.module.css";

const Chart = ({ state, dailyDataFeed }) => {
  // console.log("dailyDataFeed", dailyDataFeed);
  let lineChart;
  var labels = [];
  var labels = dailyDataFeed.map(function (item) {
    return new Date(item.date).toDateString();
  });
  var positive = [];
  var positive = dailyDataFeed.map(function (item) {
    return item.positive;
  });
  var deaths = [];
  var deaths = dailyDataFeed.map((item) => {
    return item.death;
  });
  lineChart = (
    <Line
      data={{
        labels: labels,
        datasets: [
          {
            data: positive,
            label: "Positive",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: deaths,
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(255, 0, 0, 0.5)",
            fill: true,
          },
        ],
      }}
    />
  );

  return <div className={styles.container}>{lineChart}</div>;
};

export default Chart;
