import React, { Component } from "react";
import { Cards, Chart, CountryPicker } from "./";
import styles from "./Covid.module.css";
import { fetchData } from "./api";

class Covid extends Component {
  state = {
    data: {},
    country: "",
  };
  async componentDidMount() {
    const fetchedData = await fetchData();
    // console.log("fetchedData: ", fetchedData.data[0]);
    this.setState({ data: fetchedData.data[0] });
  }
  handleCountryChange = async (country) => {
    console.log(country);
  };
  render() {
    const { data } = this.state;
    return (
      <div className={styles.container}>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart />
      </div>
    );
  }
}

export default Covid;
