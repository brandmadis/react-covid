import React, { Component } from "react";
import { Cards, Chart, CountryPicker } from "./";
import styles from "./Covid.module.css";
import { fetchDailyData, fetchData } from "./api";

class Covid extends Component {
  state = {
    data: {},
    dailyData: [],
    country: "",
  };
  async componentDidMount() {
    const fetchedData = await fetchData();
    const fetchedDailyData = await fetchDailyData();
    // console.log("fetchedData: ", fetchedData.data[0]);
    this.setState({ data: fetchedData, dailyData: fetchedDailyData });
    console.log("fetchedData-covid", fetchedData);
  }

  handleStateChange = async (state) => {
    const fetchedData = await fetchData(state);
    const fetchedDailyData = await fetchDailyData(state);
    // console.log("fetchedDailyData", fetchedDailyData);
    this.setState({
      data: fetchedData,
      state: state,
      dailyData: fetchedDailyData,
    });
  };
  render() {
    const { data, state, dailyData } = this.state;
    const test = "testing 123";
    return (
      <div className={styles.container}>
        <h1>COVID-19 Tracker App</h1>

        <div>
          <CountryPicker
            handleCountryChange={this.handleCountryChange}
            handleStateChange={this.handleStateChange}
          />
        </div>
        <hr />
        <Cards data={data} />
        <hr />
        <Chart state={state} dailyDataFeed={dailyData} />
        <hr />
        <table>
          <tbody>
            <tr>
              <td>Full Code: </td>
              <td>
                <a href="https://github.com/brandmadis/react-covid">
                  https://github.com/brandmadis/react-covid
                </a>
              </td>
            </tr>
            <tr>
              <td>API</td>
              <td>https://covidtracking.com/data/api</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Covid;
