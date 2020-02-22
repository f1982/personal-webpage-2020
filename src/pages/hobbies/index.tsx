import React from 'react';
import TitleImage from '../../comps/TitleImage';
import Helmet from 'react-helmet';
// import '../../assets/styles/glitch.css';
import '../../assets/styles/glitch.scss';

const imageURL = process.env.PUBLIC_URL + 'static/images/about_img_bar.jpg';

const Hobbies = () => {
    return (
        <>
            <Helmet>
                <title>About</title>
            </Helmet>
            <TitleImage title='Hobbies' subtitle='Everybody needs hobby.' backgroundImageURL={imageURL}></TitleImage>

            <div style={{ backgroundColor: '#000' }}>
                <h1 className='glitch'>Still building...</h1>
            </div>
        </>
    );
};
export default Hobbies;
