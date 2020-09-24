import React, { useState, useEffect } from "react";
import { MenuItem, FormControl, Select, Card } from "@material-ui/core";

import InfoBox from "./InfoBox";
import Map from "./Map";
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
      <div className="app__left">
        <div className="app__header">
          <h1> Covid-19 Tracker </h1>
          <FormControl className="app__dropdown">
            <Select
              variant="outlined"
              value={country}
              onClick={onCountryChange}
            >
              <MenuItem value={"Worldwide"}> Worldwide </MenuItem>

              {countries.map((country) => (
                <MenuItem value={country.value}> {country.name} </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <div className="app__status">
          <InfoBox
            title="Coronavirus cases"
            cases={23333}
            total={200}
          ></InfoBox>
          <InfoBox title="Recoverd" cases={3323} total={400}></InfoBox>
          <InfoBox title="Deaths" cases={20} total={30}></InfoBox>
        </div>
        <Map />
      </div>
      <Card className="app__right">
        <h3> Live cases by country </h3>
        <h3> Worldwide new cases </h3>
      </Card>
    </div>
  );
}

export default App;
