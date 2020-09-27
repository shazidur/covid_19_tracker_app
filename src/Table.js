import React from "react";
import "./Table.css";

function Table(props) {
  return (
    <div className="table">
      {props.countries.map(({ country, cases, countryInfo }) => (
        <tr onClick={() => props.onCountry(countryInfo.iso2)}>
          <td> {<img className={"table__img"} src={countryInfo.flag} />} </td>
          <td> {country} </td>
          <td>
            <strong>{cases} </strong>
          </td>
        </tr>
      ))}
    </div>
  );
}

export default Table;
