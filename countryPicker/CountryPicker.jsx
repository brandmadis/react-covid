import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./CountryPicker.module.css";
import { fetchCountries } from "../api";

const CountryPicker = ({ handleCountryChange }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchCountries());
    };
    fetchAPI();
  }, [setFetchedCountries]);
  // console.log("fetchedCountries:", fetchedCountries);
  return (
    <FormControl className={styles.formControl}>
      <NativeSelect
        defaultValue=""
        onChange={(e) => {
          handleCountryChange(e.target.options[e.target.value].text);
        }}
      >
        <option value="global">Global</option>
        {fetchedCountries.map((country, i) => (
          <option value={(country, i)}>{country}</option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
