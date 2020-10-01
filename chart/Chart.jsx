import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../api";
import { Line, Bar } from "react-chartjs-2";
import styles from "./Chart.module.css";

const Chart = () => {
  const [dailyData, setDailyData] = useState([]);
  useEffect(() => {
    const fetchMyAPI = async () => {
      const initialDailyData = await fetchDailyData();

      setDailyData(initialDailyData);
    };
    fetchMyAPI();
  }, [setDailyData]);

  const test = [1, 2, 3, 4, 5];

  let lineChart;
  if (dailyData) {
    var labels = [];
    var labels = dailyData.map(function (item) {
      return item.date;
    });
    var positive = [];
    var positive = dailyData.map(function (item) {
      return item.positive;
    });
    var deaths = [];
    var deaths = dailyData.map((item) => {
      return item.death;
    });
    // console.log("labels", labels, deaths);
    // lineChart = dailyData ? dailyData(({ date }) => date) : null;
    // var result = dailyData.map((item) => ({
    //   value: item.positive,
    //   text: item.death,
    // }));
    // console.log(result);
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
  }
  return <div className={styles.container}>Line Chart {lineChart}</div>;
};

export default Chart;
