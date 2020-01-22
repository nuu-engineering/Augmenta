import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
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
          // center={center}
          onLoad={map => {
            const bounds = new window.google.maps.LatLngBounds();
            list.forEach(element => {
              bounds.extend(new window.google.maps.LatLng(element.latitude, element.longitude));
            })
            map.fitBounds(bounds);
          }}
          onUnmount={map => {
            // do your stuff before map is unmounted
          }}
        >
          {
            list.map((element) => (
              <Marker
                icon='https://nuu-group.sfo2.digitaloceanspaces.com/clients/augmenta/circle2.png'
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
