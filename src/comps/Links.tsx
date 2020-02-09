import React from 'react';
import styled from 'styled-components';
import { LinkObject } from '../types/interfaces';
import { IconContext } from 'react-icons';
import LinkItemSimple from './LinkItemSimple';
import {
    FaYoutube,
    FaTwitter,
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaFlickr,
    FaWeibo,
    FaDochub,
    FaSoundcloud
} from 'react-icons/fa';

interface LinksProp {
    data: LinkObject[];
    category: string;
    introduce?: string;
}

const LinkContainer = styled.div`
    display: flex;
    margin: 4rem auto;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center; /* 水平居中 */
    align-items: center; /* 垂直居中 */
`;
const iconMap: { [key: string]: JSX.Element } = {};
iconMap['youtube'] = <FaYoutube />;
iconMap['twitter'] = <FaTwitter />;
iconMap['facebook'] = <FaFacebook />;
iconMap['linkedin'] = <FaLinkedin />;
iconMap['instagram'] = <FaInstagram />;
iconMap['flickr'] = <FaFlickr />;
iconMap['weibo'] = <FaWeibo />;
iconMap['soundcloud'] = <FaSoundcloud />;
iconMap['douban'] = <FaDochub />;

const Links = (props: LinksProp) => {
    const { data } = props;
    return (
        <LinkContainer>
            <IconContext.Provider
                value={{
                    color: '#666',
                    size: '50',
                    style: { verticalAlign: 'middle' }
                }}>
                {data.map((item: LinkObject, index: number) => {
                    const { name, alt, link, icon } = item;
                    const iconElement: JSX.Element = iconMap[icon.toLowerCase()];
                    return (
                        <LinkItemSimple
                            key={index}
                            title={name}
                            icon={iconElement}
                            link={link}
                            alt={alt}></LinkItemSimple>
                    );
                })}
            </IconContext.Provider>
        </LinkContainer>
    );
};

export { Links };
