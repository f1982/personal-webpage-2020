import React from 'react';
import styled from 'styled-components';

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
        border-radius: 16px;
        width: 100%;
    }
`;

const getYears = (birthYear: number) => {
    var d = new Date();
    var n = d.getFullYear();
    return n - birthYear;
};
// const getMyDays = () => {
//     return getYears(1982) * 365;
// };

interface SummaryProps {
    data: any;
    children?: string;
}
const Summary = (props: SummaryProps) => {
    const { who_is_andy, what_i_do, family } = props.data;
    return (
        <Content>
            <h3>Who's Andy</h3>
            <p>{who_is_andy}</p>
            <img src={process.env.PUBLIC_URL + 'static/images/about-andy-back.jpg'} alt='I was on the beach' />
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
            <p>{what_i_do}</p>
            <img src={process.env.PUBLIC_URL + 'static/images/about-computer.jpg'} alt='My Computer' />
            <div style={{ margin: `2rem auto` }}>
                {/* <InlineLink to={match.path + '/life'}>
                                            <SingleButton>LIFE EVENTS</SingleButton>
                                        </InlineLink> */}
            </div>
            <h3>Family</h3>
            <p>{String(family).replace('${AGE_OF_ZOE}', getYears(2016).toString())}</p>
            <img src={process.env.PUBLIC_URL + 'static/images/about-andy-family.jpg'} alt='Introduce my family' />
            <div style={{ margin: `2rem auto` }}></div>
        </Content>
    );
};

export default Summary;
