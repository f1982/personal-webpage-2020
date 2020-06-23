import React from 'react';
import styled from 'styled-components';
import GoogleMap, { Coords } from 'google-map-react';

const YOUR_GOOGLE_MAP_API_KEY = 'AIzaSyDRAHe23jG9GXgLKUTsayaxaLiEFWKg8-k';

const MapFlag = (props: any) => {
    return <span style={{ fontSize: `2rem` }}>{props.text}</span>;
};

interface MapPropType {
    center: Coords;
    zoom: Number;
    greatPlaceCoords: Coords;
}

let defaultCenter: Coords = { lat: -36.802647, lng: 174.735249 };
const CurrentMap = (props: any) => {
    return (
        <div style={{ height: '50vh', width: '100%', borderRadius: `20px` }}>
            <GoogleMap
                bootstrapURLKeys={{ key: YOUR_GOOGLE_MAP_API_KEY }} // set if you need stats etc ...
                center={defaultCenter}
                zoom={12}>
                <MapFlag lat={defaultCenter.lat} lng={defaultCenter.lng} text='📍' />
                {/* <MapFlag lat={59.824465} lng={30.180121} text='My Marker2' /> */}
            </GoogleMap>
        </div>
    );
};

export default CurrentMap;
