import React, { useState, useEffect } from "react";
import { MenuItem, FormControl, Select } from "@material-ui/core";

import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("Worldwide");

  useEffect(() => {
    console.log("use effect");
    const getCountryData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
          }));
          setCountries(countries);
        });
    };
    getCountryData();
  }, []);

  console.log("-----State", countries);

  const onCountryChange = async (event) => {
    const countryCode = event.target.value;
    console.log(countryCode);
    setCountry(countryCode);
  };

  return (
    <div className="app">
      <div className="app__header">
        <h1> Covid-19 Tracker </h1>
        <FormControl className="app__dropdown">
          <Select variant="outlined" value={country} onClick={onCountryChange}>
            <MenuItem value={"Worldwide"}> Worldwide </MenuItem>

            {countries.map((country) => (
              <MenuItem value={country.value}> {country.name} </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      {/* Header */}
      {/* Title - Select input dropdown field */}

      {/*  infobox1 */}
      {/*  infobox 2*/}
      {/*  infobox 3*/}

      {/* Table */}
      {/* Graph */}

      {/* Map */}
    </div>
  );
}

export default App;
