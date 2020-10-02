import React, { useState, useEffect } from "react";
import {
  NativeSelect,
  FormControl,
  Select,
  withStyles,
  MenuItem,
  InputLabel,
} from "@material-ui/core";
// import styles from "./CountryPicker.module.css";
import { fetchCountries } from "../api";
import { fetchStates } from "../api";
import classes from "./CountryPicker.module.css";

const CountryPicker = ({ handleCountryChange, handleStateChange }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);
  const [fetchedStates, setFetchedStates] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchCountries());
    };
    fetchAPI();
  }, [setFetchedCountries]);

  useEffect(() => {
    const fetchStatesAPI = async () => {
      setFetchedStates(await fetchStates());
    };
    fetchStatesAPI();
  }, []);
  // console.log("fetchedStates: ", fetchedStates);
  // console.log("fetchedCountries:", fetchedCountries);
  return (
    <div>
      <FormControl>
        <label>Select State:</label>
        <select onChange={(e) => handleStateChange(e.target.value)}>
          <option value="State">All States</option>
          {fetchedStates.map((state, i) => (
            <option value={state} key={i}>
              {state}
            </option>
          ))}
        </select>
      </FormControl>
    </div>
  );
};

export default CountryPicker;
