import React from "react";
import "./InfoBox.css";

import { Card, CardContent, Typography } from "@material-ui/core";
function InfoBox({
  title,
  cases,
  active,
  isRed,
  isGreen,
  isDark,
  total,
  ...props
}) {
  return (
    <Card
      onClick={props.onClick}
      className={`infoBox 
        ${active && "infoBox--selected"} 
        ${isRed && "infoBox--red"} 
        ${isDark && "infoBox--dark"}
        `}
    >
      <CardContent>
        {/*  Title */}
        <Typography className="infoBox__title" color="textSecondary">
          {title}
        </Typography>
        {/*   cases number  */}
        <h2
          className={`${isRed && "infoBox__cases"}  ${
            isGreen && "infoBox__cases--green"
          } ${isDark && "infoBox__cases--dark"}`}
        >
          {cases}
        </h2>

        {/*   total  */}
        <Typography className="infoBox__total" color="textSecondary">
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
