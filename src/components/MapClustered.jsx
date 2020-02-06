import React from 'react';
import { GoogleMap, LoadScript, MarkerClusterer, Marker } from '@react-google-maps/api';
import Portal from '../utils/Portal';
import averageGeolocation from '../utils/average-geolocation';
import { mapStyle } from './map-options';

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
          options={{
            styles: mapStyle
          }}
          zoom={4}
          center={center}
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
          <MarkerClusterer
            averageCenter
            options={{
              imagePath: "https://nuu-group.sfo2.digitaloceanspaces.com/clients/augmenta/cluster",
              textColor: 'white'
            }}
          >
            {
              (clusterer) => list.map((element) => (
                <Marker
                  key={element.slug}
                  position={{ lat: element.latitude, lng: element.longitude }}
                  icon={{
                    url: 'https://nuu-group.sfo2.digitaloceanspaces.com/clients/augmenta/marker.png',
                    labelOrigin: { x: 12, y: -10},
                  }}
                  clusterer={clusterer}
                  title={element.name}
                  label={{
                    background: '#fff',
                    text: element.name,
                    color: '#000',
                    fontSize:'12px',
                    fontWeight: "500",
                    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;"
                  }}
                />
              ))
            }
          </MarkerClusterer>
        </GoogleMap>
      </LoadScript>
    </Portal>
  );
}

export default Map;
