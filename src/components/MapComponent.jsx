import React, { useCallback, useRef } from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const defaultCenter = {
  lat: 18.5204,
  lng: 73.8567,
};

const MapComponent = ({ markers = [], centerOn }) => {
  const mapRef = useRef(null);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyBngvGT3hm8ha0xkc8a1PFwoqoqc53raUU',
  });

  const onLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const onUnmount = useCallback(() => {
    mapRef.current = null;
  }, []);

  // Recenter map when centerOn changes
  React.useEffect(() => {
    if (centerOn && mapRef.current) {
      mapRef.current.panTo(centerOn);
      mapRef.current.setZoom(14);
    }
  }, [centerOn]);

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={centerOn || defaultCenter}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {markers.map((profile, index) => (
        <Marker
          key={index}
          position={{ lat: profile.lat, lng: profile.lng }}
          title={profile.name}
        />
      ))}
    </GoogleMap>
  );
};

export default MapComponent;







