import React from 'react';
import styled from 'styled-components';
import { SectionWide } from '../../layouts/default';
import TitleImage from '../../comps/common/MediaBanner';
import Map from './comps/LocationMap';
import Helmet from 'react-helmet';

const imageURL = process.env.PUBLIC_URL + 'static/images/contact-title-image.jpg';

const SectionContent = styled.section`
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

const Contact = (props: any) => {
    return (
        <>
            <Helmet>
                <title>Contact</title>
                <meta name="description" content="I am not always online, but if you want to find me, it's easy" />
            </Helmet>
            <SectionWide>
                <TitleImage imageURL={imageURL} />
            </SectionWide>
            <div style={{ marginTop: `3rem` }} />
            <SectionContent>
                <h3>Contact</h3>
                <p>
                    Currently, I am living in Auckland, New Zealand, If you want contact me, feel free to send a email to me.
                    My email address is{' '}
                    <a
                        target='_blank'
                        rel='noopener noreferrer'
                        href='https://drive.google.com/file/d/1X7czXZn03TirgH98BA5kN1f_ZYOlNha1/view?usp=sharing'>
                        here
                    </a>
                </p>
                <p>
                    If you want to hire a software energeer, you can get my CV{' '}
                    <a
                        target='_blank'
                        rel='noopener noreferrer'
                        href='https://drive.google.com/file/d/1pyrvwo3Hmu7qVeEFqTFCtTgNotbWhNK1/view?usp=sharing'>
                        here
                    </a>{' '}
                    and you can also can contact me via{' '}
                    <a target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/andyisme/'>
                        Linkin
                    </a>
                </p>
                <p>
                    If you would like to get more updates about me, you can follow me via social networks. Such as
                    <a target='_blank' rel='noopener noreferrer' href='https://twitter.com/iandycao'>
                        Twitter
                    </a>{' '}
                    or{' '}
                    <a target='_blank' rel='noopener noreferrer' href='https://www.weibo.com/enjoywound'>
                        Weibo
                    </a>
                    , I also update some information in my Telegram channel, I upload some videos about my life and
                    experience in Youtube regularly, welcome to{' '}
                    <a href='http://tiny.cc/9owsqz' target='_blank' rel='noopener noreferrer'>
                        subscribe
                    </a>
                    .
                </p>
            </SectionContent>

            <SectionContent>
                <Map />
            </SectionContent>
            {/* <SectionContent>
                    <ContactForm />
                </SectionContent> */}
        </>
    );
};

export default Contact;
