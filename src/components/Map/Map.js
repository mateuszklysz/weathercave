import React from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";

const Map = ({ data }) => {
  const mapContainer = {
    width: "500px",
    height: "300px",
  };
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.GATSBY_MAPS_API,
  });
  if (!isLoaded) return "Loading maps";

  return (
    <GoogleMap
      mapContainerStyle={mapContainer}
      zoom={12}
      center={{ lat: data.coord.lat, lng: data.coord.lon }}
      options={{ disableDefaultUI: true }}
    ></GoogleMap>
  );
};

export default Map;
