import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import Portal from '../utils/Portal';
import averageGeolocation from '../utils/average-geolocation';

const Map = ({ list, apiKey }) => {

  const center = list.length === 1
    ? { lat: list[0].latitude, lng: list[0].longitude }
    : averageGeolocation(list);
  return (
    <Portal id='map'>
      <LoadScript googleMapsApiKey={apiKey}>
        <GoogleMap
          id="circle-example"
          mapContainerStyle={{
            height: "400px",
            width: "100%"
          }}
          zoom={4}
          center={center}
        >
          {
            list.map((element) => (
              <Marker
                key={element.slug}
                position={{ lat: element.latitude, lng: element.longitude }}
              />
            ))
          }
        </GoogleMap>
      </LoadScript>
    </Portal>
  );
}

export default Map;
