import React from 'react';
import TitleImage from '../../comps/TitleImage';
import Helmet from 'react-helmet';

const imageURL = process.env.PUBLIC_URL + 'static/images/about_img_bar.jpg';

const Hobbies = () => {
    return (
        <>
            <Helmet>
                <title>About</title>
            </Helmet>
            <TitleImage title='Hobbies' subtitle='Everybody needs hobby.' backgroundImageURL={imageURL}></TitleImage>
            <p>Still building...</p>
        </>
    );
};
export default Hobbies;
