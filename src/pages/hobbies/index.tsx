import React from 'react';
import TitleImage from '../../comps/TitleImage';
import Helmet from 'react-helmet';
// import '../../assets/styles/glitch.css';
import '../../assets/styles/glitch.scss';
import { Link, Switch, Route, useRouteMatch, useParams } from 'react-router-dom';

const imageURL = process.env.PUBLIC_URL + 'static/images/about_img_bar.jpg';

function Topic() {
    const params = useParams();

    let { topicId } = useParams();
    console.log('params', params);
    console.log('topicId', topicId);
    return <h3>Requested topic ID: {topicId}</h3>;
}

const Hobbies = () => {
    let match = useRouteMatch();
    console.log('match', match);

    return (
        <>
            <Helmet>
                <title>About</title>
            </Helmet>
            <TitleImage title='Hobbies' subtitle='Everybody needs hobby.' backgroundImageURL={imageURL}></TitleImage>

            <div style={{ backgroundColor: '#000' }}>
                <h1 className='glitch'>Still building...</h1>
            </div>

            <h2>Topics</h2>

            <ul>
                <li>
                    <Link to={`${match.url}/components`}>Components</Link>
                </li>
                <li>
                    <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
                </li>
            </ul>

            {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
            <Switch>
                <Route path={`${match.path}/:topicId`}>
                    <Topic />
                </Route>
                <Route path={match.path}>
                    <h3>Please select a topic.</h3>
                </Route>
            </Switch>
        </>
    );
};
export default Hobbies;
