import React from 'react';
import styled from 'styled-components';
import * as log from 'loglevel';
import GoogleMap, { Coords } from 'google-map-react';
import ContactForm from '../contact/comps/ContactForm';

const YOUR_GOOGLE_MAP_API_KEY = 'AIzaSyDRAHe23jG9GXgLKUTsayaxaLiEFWKg8-k';

const MapFlag = (props: any) => {
    return <h3>{props.text}</h3>;
};

interface MapPropType {
    center: Coords;
    zoom: Number;
    greatPlaceCoords: Coords;
}

let defaultCenter: Coords = { lat: -36.802647, lng: 174.735249 };
const CurrentMap = (props: any) => {
    return (
        <div style={{ height: '50vh', width: '100%' }}>
            <GoogleMap
                bootstrapURLKeys={{ key: YOUR_GOOGLE_MAP_API_KEY }} // set if you need stats etc ...
                center={defaultCenter}
                zoom={12}>
                <MapFlag lat={defaultCenter.lat} lng={defaultCenter.lng} text='Here' />
                <MapFlag lat={59.824465} lng={30.180121} text='My Marker2' />
            </GoogleMap>
        </div>
    );
};

const Wrapper = styled.div`
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-flow: column;
    margin: 1.5rem auto;
    padding: 1.5rem 0;
    @media screen and (max-width: 768px) {
        flex-flow: column;
        padding: 0.5rem 0.5rem;
    }
`;

const Contact = (props: any) => {
    return (
        <Wrapper>
            <section>
                <h3>Hey,I am Andy!</h3>
                <p>
                    Current, I live in Auckland, New Zealand, If you want contact me, feel free to send a email to me.
                </p>
                <p>
                    If you want to hire a software energeer, you can get my CV here, and you can also can contact me via
                    Linkin
                </p>
                <p>If you want to get more updates about me, you can follow me via social network.</p>
            </section>

            <section>
                <CurrentMap />
            </section>
            <section>
                <ContactForm />
            </section>
        </Wrapper>
    );
};

export default Contact;
