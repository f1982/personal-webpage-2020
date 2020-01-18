import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import SingleButton from '../../comps/SingleButton';
import HighlightProject from './comps/HighlightProject';
import { Link } from 'react-router-dom';

import HiThere from '../../../src/assets/hi.png';
import { loadHomeData } from '../../actions/home.action';
import { Helmet } from 'react-helmet';
import { RootState } from '../../reducers';
import { Links } from '../../comps/Links';
const SectionRow = styled.div`
    display: flex;
    flex-flow: row nowrap;
    margin: 3.8rem 2rem;
`;

const IntroLeft = styled.div`
    display: flex;
    flex-flow: column;
    width: 300px;
`;

const HiImage = styled.image`
    width: 300px;
`;

const IntroRight = styled.div`
    flex: 1;
    flex-shrink: 0;
    background-size: auto 100%;
    background-repeat: no-repeat;
    background-position: right;
    text-align: center;
`;

const RightImageFrame = styled.div`
    display: inline-block;
    margin: 1rem auto;
    background-color: #ccc;
    width: 760px;
    height: 460px;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    box-shadow: 0px 12px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;
    &:hover {
        box-shadow: 0px 36px 20px rgba(0, 0, 0, 0.1);
        transform: translateY(10px);
    }
`;

const MyImage = styled.div`
    /* border: 1px solid #ff0000; */
    display: block;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position: left;
`;

const VerticalContainer = styled.div`
    display: flex;
    flex-flow: column;
    flex: 1;
    padding: 1rem;
`;

const Home = (props: any) => {
    const buttonHandler = () => {};

    const hiImageURL = process.env.PUBLIC_URL + 'static/images/hi.png';
    const bgImageURL = process.env.PUBLIC_URL + 'static/images/intro_pic_bg.png';
    const mainImageURL = process.env.PUBLIC_URL + 'static/images/intro_main_pic.png';

    useEffect(() => {
        props.dispatch(loadHomeData);
    }, []);

    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            {/* <div>settings: {JSON.stringify(props.sns)}</div> */}
            <SectionRow>
                <IntroLeft>
                    <div>
                        <h4>Hi there,</h4>
                    </div>
                    <div>
                        <img style={{ width: `300px` }} src={hiImageURL} />
                    </div>
                    <div>
                        <h5>Software Developer</h5>
                    </div>
                    <div>
                        <Link to='about'>
                            <SingleButton>Say Hi!</SingleButton>
                        </Link>
                    </div>
                </IntroLeft>
                <IntroRight
                    style={{
                        backgroundImage: `url(${bgImageURL})`
                    }}>
                    <RightImageFrame>
                        <MyImage style={{ backgroundImage: `url(${mainImageURL})` }}></MyImage>
                    </RightImageFrame>
                </IntroRight>
            </SectionRow>

            <SectionRow>
                <VerticalContainer>
                    <div>
                        <h5>What I Do?</h5>
                    </div>
                    <div><p>{props.whatIDo}</p></div>
                </VerticalContainer>
                <VerticalContainer>
                    <div>
                        <h5>Who I Like?</h5>
                    </div>
                    <div><p>{props.whatILike}</p></div>
                </VerticalContainer>
            </SectionRow>
            <HighlightProject
                projects={props.highlightProjects}
                moreProjectCallback={() => {
                    console.log('more project callback');
                }}
            />
            
            <Links data={props.sns} category='all'></Links>
        </>
    );
};

/**
 *  从 RootState 里提取出来这个 Component 需要用的变量
 *  这里的 State 就是数据（状态）的意思，不要混淆
 *
 * @param rootState
 */
const mapStatesToProps = (rootState: RootState) => {
    const { highlightProjects, whatIDo, whatILike, sns } = rootState.homeReducer;
    //这里是可以跨越 reducer 取数据的， 同样可以集成到 props 里
    const { settings } = rootState.appReducer;
    return {
        highlightProjects,
        whatIDo,
        whatILike,
        settings,
        sns
    };
};

export default connect(mapStatesToProps)(Home);
