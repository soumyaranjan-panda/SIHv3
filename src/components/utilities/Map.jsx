import React from "react";
import { useState, useCallback } from "react";
import { GoogleMapsProvider } from "@ubilabs/google-maps-react-hooks";

const Map = ({ latitude, longitude }) => {
  const [mapContainer, setMapContainer] = useState(null);
  const mapRef = useCallback((node) => {
    node && setMapContainer(node);
  }, []);
  

  const mapOptions = {
    center: {
      lat: latitude,
      lng: longitude,
    },
    zoom: 16,
  };

  return (
    <GoogleMapsProvider
      googleMapsAPIKey="AIzaSyCQg3Zmve7VDhoJqGAm6xj9o0Wdq0hTytE"
      mapContainer={mapContainer}
      mapOptions={mapOptions}
    >
      <div className="h-[60vh] w-[20vw] rounded-md" ref={mapRef}>
        {" "}
      </div>
    </GoogleMapsProvider>
  );
};

export default Map;
