import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const mapContainer = {
  width: "500px",
  height: "300px",
};

const Map = ({ data }) => {
  return (
    <LoadScript googleMapsApiKey={process.env.GATSBY_MAPS_API}>
      <GoogleMap
        mapContainerStyle={mapContainer}
        zoom={11}
        center={{ lat: data.coord.lat, lng: data.coord.lon }}
        options={{ disableDefaultUI: true }}
      ></GoogleMap>
    </LoadScript>
  );
};

export default Map;
