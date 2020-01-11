import React, { useEffect } from 'react';
import { connect } from 'react-redux';
// import Helmet from 'react-helmet'
import { loadAbout } from '../../actions/about.action';
import { Header } from './comps/Header';
import { Summary } from './comps/Summary';

const About = (props: any) => {
    useEffect(() => {
        props.dispatch(loadAbout);
    }, []);
    return (
        <>
            {/* <Helmet>
                <title>Home</title>
            </Helmet> */}
            <div>about</div>
            <div id='header'>
                <Header name='Andy123' position='Developer'></Header>
            </div>
            <h3>Summary</h3>
            <Summary></Summary>
            <div>{JSON.stringify(props.aboutData)}</div>
        </>
    );
};

const mapStatesToProps = (rootReducer: any) => {
    const data = rootReducer.aboutReducer;
    return {
        aboutData: data
    };
};
export default connect(mapStatesToProps)(About);
