import React from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

function MapContainer(props) {
  if (!props.coordinates) return null;
  const [lng, lat] = props.coordinates;

  return (
    <Map google={props.google} zoom={14} center={{ lat, lng }}>
      <Marker title="hi" name={props.name} position={{ lat, lng }} />
    </Map>
  );
}

let keypart1 = "AIzaSyAZefetANsVrE";
let keypart2 = "j78sGHWFuyTEH0Y6uY7qo";

let apiKey = [keypart1, keypart2].join("");

export default GoogleApiWrapper({
  apiKey
})(MapContainer);
