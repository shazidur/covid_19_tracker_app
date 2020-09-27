import React from "react";
import numeral from "numeral";
import { Circle, Popup } from "react-leaflet";

const casesTypeColors = {
  cases: {
    hex: "#EF5B25",
    multiplier: 800,
  },
  recovered: {
    hex: "#178a15",
    multiplier: 1200,
  },
  deaths: {
    hex: "#000000",
    multiplier: 2000,
  },
};

export const sortData = (data) => {
  const sortData = [...data];
  return sortData.sort((a, b) => (a.cases > b.cases ? -1 : 1));
};

export const prettyPrintStat = (stat) =>
  stat ? `+${numeral(stat).format("0.0a")}` : "+0";

export const showDataForMap = (data, casesType = "cases") =>
  data.map((country) => (
    <Circle
      center={[country.countryInfo.lat, country.countryInfo.long]}
      fillOpacity={0.4}
      color={casesTypeColors[casesType].hex}
      fillColor={casesTypeColors[casesType].hex}
      radius={
        Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier
      }
    >
      <Popup>
        <div className="info-container">
          <div
            className="info-flag"
            style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
          />
          <div className="info-name">{country.country}</div>
          <div className="nfo-confirmed">
            Cases: {numeral(country.cases).format("0.0")}
          </div>
          <div className="info-recover">
            Recoverd: {numeral(country.recoverd).format("0.0")}
          </div>
          <div className="info-deaths">
            Deaths: {numeral(country.deaths).format("0.0")}
          </div>
        </div>
      </Popup>
    </Circle>
  ));
