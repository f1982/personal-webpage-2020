import React from 'react';
import styled from 'styled-components';
//Images
import PicAndyBack from './../../../assets/about-andy-back.png';
import PicAndyComputer from './../../../assets/about-computer.png';
import PicAndyFamily from './../../../assets/about-andy-family.png';

const Content = styled.div`
    width: 100%;
    max-width: var(--content-max-width);
    margin: 0 auto;
    padding: 1rem;
    text-align: center;
    p {
        text-align: justify;
    }
    img {
        width: 100%;
    }
`;

const getAge = (birthYear: number) => {
    var d = new Date();
    var n = d.getFullYear();
    return n - birthYear;
};
// const getMyDays = () => {
//     return getAge(1982) * 365;
// };

interface SummaryProps {
    children?: string;
}
const Summary = (props: SummaryProps) => {
    return (
        <Content>
            <h3>Who's Andy</h3>
            <p>
                My name is Andy Cao and I come from China{' '}
                <span role='img' aria-label='china'>
                    🇨🇳
                </span>
                . I am a software developer
                <span role='img' aria-label='developer'>
                    👨‍💻
                </span>{' '}
                who focuses on building website and mobile apps{' '}
                <span role='img' aria-label='iphone'>
                    📱
                </span>
                . I have serval hobbies with me for many years. Like RC hobby, FPV(flying drone in first person view),
                video editing and DIY. Currently My family and I living in Auckland, New Zealand{' '}
                <span role='img' aria-label='nz'>
                    🇳🇿
                </span>
                .
            </p>
            <img src={PicAndyBack} alt='I was on the beach' />
            <div style={{ margin: `2rem auto` }}>
                {/* <SingleButton>My Hobbies</SingleButton>
                                        <div
                                            style={{
                                                display: `inline-block`,
                                                width: `1rem`,
                                                height: `1rem`
                                            }}
                                        />
                                        <SingleButton>Timeline</SingleButton> */}
            </div>
            <h3>What I do?</h3>
            <p>
                I am a software developer{' '}
                <span role='img' aria-label='developer'>
                    👨‍💻
                </span>{' '}
                and have worked in the software industry for more than 15 years. I have developed websites, made mobile
                📱apps, and also built and designed casual games{' '}
                <span role='img' aria-label='game dev'>
                    🕹
                </span>
                . The process of developing software always brings me happiness and satisfaction. Currently, I am
                learning{' '}
                <span role='img' aria-label='learning'>
                    📖
                </span>{' '}
                and using front-end development technology. The main focuses are on JavaScript, CSS, HTML, React related
                technology stack and React Native. Because I love Apple{' '}
                <span role='img' aria-label='macbook pro'>
                    💻
                </span>{' '}
                ecosystem, I also keep an eye on iOS development.
            </p>
            <img src={PicAndyComputer} alt='My Computer' />
            <div style={{ margin: `2rem auto` }}>
                {/* <InlineLink to={match.path + '/life'}>
                                            <SingleButton>LIFE EVENTS</SingleButton>
                                        </InlineLink> */}
            </div>
            <h3>Family</h3>
            <p>
                I was very lucky to have met my wife Fang very early. She helped me immensely in life and spirit. We
                have a {getAge(2016)} year old daughter who is very lively, healthy and cute. Our family currently lives
                in Auckland.
            </p>
            <img src={PicAndyFamily} alt='Introduce my family' />
            <div style={{ margin: `2rem auto` }}></div>
        </Content>
    );
};

export default Summary;
