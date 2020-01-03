import React from 'react'
import styled from 'styled-components'
import { LinkObject } from '../interfaces'
import { LinkItem } from './LinkItem'
import { IconContext } from "react-icons";
import {
    FaYoutube, FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaLinkedinIn, FaFlickr, FaWeibo, FaDochub, FaSoundcloud
} from 'react-icons/fa'


interface LinksProp {
    data: LinkObject[],
    category: string,
    introduce?: string
}

const LinkContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
`
const iconMap: { [key: string]: JSX.Element } = {};
iconMap["youtube"] = <FaYoutube />;
iconMap["twitter"] = <FaTwitter />;
iconMap["facebook"] = <FaFacebook />;
iconMap["linkedin"] = <FaLinkedin />;
iconMap["instagram"] = <FaInstagram />;
iconMap["flickr"] = <FaFlickr />;
iconMap["weibo"] = <FaWeibo />;
iconMap["soundcloud"] = <FaSoundcloud />;
iconMap["douban"] = <FaDochub />;

const Links = (props: LinksProp) => {

    return (
        <>
            {
                props.data.length < 1
                    ?
                    <div>no data</div>
                    :
                    <div>
                        <h5>{props.category}</h5>
                        <LinkContainer>
                            <IconContext.Provider
                                value={{ color: '#fff', size: '50', style: { verticalAlign: 'middle' } }}
                            >
                                {
                                    props.data.map((item: LinkObject, index: number) => {
                                        const { name, alt, link, icon } = item;
                                        console.log('icon', icon);
                                        const iconElement: JSX.Element = iconMap[icon.toLowerCase()];
                                        return (
                                            <LinkItem key={index} title={name} icon={iconElement} link={link} alt={alt}></LinkItem>
                                        )
                                    })
                                }
                            </IconContext.Provider>
                        </LinkContainer>

                    </div>

            }
        </>
    )
}

export {
    Links
}