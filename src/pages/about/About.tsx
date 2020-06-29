import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import ImageBanner from '../../comps/MediaBanner';
import { Experience } from '../../comps/TimelineWork';
import TimelineLife from '../../comps/TimelineLife';
import { useRouteMatch, Switch, Route, useHistory } from 'react-router-dom';
import Summary from './comps/Summary';

const About = (props: any) => {
    let history = useHistory();
    const { syncInfo } = props;
    const match = useRouteMatch();
    useEffect(() => {
        syncInfo();
    }, [syncInfo]);

    // const submenuItems = [
    //     { id: 'intro', url: `${match.url}/intro`, title: 'Introduction', active: true },
    //     { id: 'work', url: `${match.url}/work`, title: 'Work Experience' },
    //     { id: 'life', url: `${match.url}/life`, title: 'Life Experience' },
    //     { id: 'skill', url: `${match.url}/skill`, title: 'Skills' }
    // ];
    const imageURL = process.env.PUBLIC_URL + 'static/images/about_img_bar.jpg';
    const videoURL = process.env.PUBLIC_URL + 'static/videos/desk.mp4';

    return (
        <>
            <Helmet>
                <title>About</title>
            </Helmet>
            <ImageBanner imageURL={imageURL} videoURL={videoURL} />
            <div style={{ marginTop: `3rem` }} />
            <Switch>
                <Route path={`${match.path}/work`}>
                    <Experience data={props.timelines.works} />
                </Route>
                <Route path={`${match.path}/life`}>
                    <button
                        onClick={() => {
                            history.goBack();
                        }}>
                        close
                    </button>
                    <TimelineLife data={props.timelines.life} />
                </Route>
                <Route path={`${match.path}/skill`}>
                    <h1>Skills</h1>
                </Route>
                <Route path={`${match.path}/intro`}>intro</Route>
                <Route>
                    <Summary />
                </Route>
            </Switch>
            {props.loadedState === 'loaded' ? <></> : <p style={{ textAlign: 'center' }}>loading</p>}
        </>
    );
};

export default About;
