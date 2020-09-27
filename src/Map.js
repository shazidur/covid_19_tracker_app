import React from "react";
import "./Map.css";
import { Map as LeafLetMap, TileLayer } from "react-leaflet";
import { showDataForMap } from "./util";

function Map({ countries, casesType, center, zoom }) {
  return (
    <div className="map">
      <LeafLetMap center={center} zoom={zoom}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* make a loop for map point */}

        {showDataForMap(countries, casesType)}
      </LeafLetMap>
    </div>
  );
}

export default Map;
