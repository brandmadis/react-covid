import React from "react";
import axios from "axios";

const urlMathDroid = "https://covid19.mathdro.id/api";
const urlCurrent = "https://api.covidtracking.com/v1/us/current.json";
const urlDaily = "https://api.covidtracking.com/v1/us/daily.json";
const urlStates = "https://api.covidtracking.com/v1/states/info.json";
const urlStateHistoric =
  "https://api.covidtracking.com/v1/states/ca/daily.json";

export const fetchData = async (state) => {
  console.log("fetchData state:", state);
  let changeableUrl = urlCurrent;
  if (state && state != "State") {
    console.log("fetchData select state");
    changeableUrl = `https://api.covidtracking.com/v1/states/${state}/current.json`;
    const response = await axios.get(changeableUrl);
    console.log("fetchData", response);
    return response.data;
  }
  if (state === "State") {
    changeableUrl = "https://api.covidtracking.com/v1/us/current.json";
    const response = await axios.get(changeableUrl);
    const dataMod = response.data[0];

    return dataMod;
  }
  try {
    let positive,
      recovered,
      lastModified,
      death = "";
    // const {
    //   data: { positive, recovered, lastModified, death },
    // } = await axios.get(urlCurrent);
    const response = await axios.get(changeableUrl);
    return response.data[0];
    // return {
    //   positive,
    //   recovered,
    //   lastModified,
    //   death,
    // };
  } catch (error) {
    console.log("error: ", error);
  }
};

export const fetchDailyData = async (state) => {
  // console.log("state:", state);
  if (state && state != "State") {
    // console.log("state == string");
    try {
      const { data } = await axios.get(
        `https://api.covidtracking.com/v1/states/${state}/daily.json`
      );
      data.reverse();
      const modifiedData = data.map((dailyData) => ({
        positive: dailyData.positive,
        death: dailyData.death,
        date: dailyData.dateModified,
      }));
      return modifiedData;
    } catch (error) {
      console.log("fetchDailyData Error:", error);
    }
  } else {
    // console.log("state != string");
    try {
      const { data } = await axios.get(`${urlDaily}`);
      data.reverse();
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
  }
};

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${urlMathDroid}/countries`);
    // console.log("api fetchCountries: ", countries);
    return countries.map((country) => country.name);
  } catch (error) {
    console.log("countries fetch error:", error);
  }
};

export const fetchStates = async (state) => {
  try {
    const allData = await axios.get(urlStates);
    const {
      data: { data },
    } = await axios.get(urlStates);
    // console.log("api fetchstates", allData.data);
    return allData.data.map((state) => state.state);
  } catch (error) {
    console.log("fetchStates Error:", error);
  }
};
