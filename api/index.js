import React from "react";
import axios from "axios";

const urlMathDroid = "https://covid19.mathdro.id/api";
const urlCurrent = "https://api.covidtracking.com/v1/us/current.json";
const urlDaily = "https://api.covidtracking.com/v1/us/daily.json";

export const fetchData = async () => {
  try {
    let positive,
      recovered,
      lastModified,
      death = "";
    // const {
    //   data: { positive, recovered, lastModified, death },
    // } = await axios.get(urlCurrent);
    const response = await axios.get(urlCurrent);
    // console.log("response: ", response);
    return response;
    // return {
    //   positive,
    //   recovered,
    //   lastModified,
    //   death,
    // };
  } catch (error) {}
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${urlDaily}`);
    // console.log("fetchDailyData: ", data);
    // console.log("dailyData", data[0]);
    const modifiedData = data.map((dailyData) => ({
      positive: dailyData.positive,
      death: dailyData.death,
      date: dailyData.lastModified,
    }));
    return modifiedData;
  } catch (error) {
    console.log("fetchDailyData Error:", error);
  }
};

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${urlMathDroid}/countries`);
    return countries.map((country) => country.name);
  } catch (error) {
    console.log("countries fetch error:", error);
  }
};
