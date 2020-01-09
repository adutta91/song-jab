import React from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

function MapContainer(props) {
  if (!props.coordinates) return null;
  console.log("props.coordinates *****---->>>", props.coordinates);
  const [lng, lat] = props.coordinates;

  return (
    <Map google={props.google} zoom={14} center={{ lat, lng }}>
      <Marker title="hi" name={props.name} position={{ lat, lng }} />
    </Map>
  );
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyC4XiUeo-plFI4iVTt54VVe2-j4iaokvPQ"
})(MapContainer);
