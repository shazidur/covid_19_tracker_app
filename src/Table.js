import React from "react";
import "./Table.css";

function Table({ countries }) {
  //   console.log("this is from table", countries);
  return (
    <div className="table">
      {countries.map(({ country, cases }) => (
        <tr>
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
