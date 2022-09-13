import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  LayerGroup,
} from "react-leaflet";
import React, { useRef } from "react";
import { useLocation } from "react-router-dom";
import LeafletSearch from "./leafletSearch";

export const Map = () => {
  const location = useLocation();
  const position = [
    location.state.values.latitude,
    location.state.values.longitude,
  ];

  const citiesLayerRef = useRef(null);

  return (
    <MapContainer center={position} zoom={10} scrollWheelZoom={false}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <LayerGroup ref={citiesLayerRef}>
        <Marker position={position}>
          <Popup>
            <p>Location: {location.state.values.location}</p>
            <p>Description: {location.state.values.description}</p>
          </Popup>
        </Marker>
      </LayerGroup>
      <LeafletSearch searchLayer={citiesLayerRef.current} />
    </MapContainer>
  );
};
