import React from 'react'
import styled from 'styled-components'
import { LinkObject } from '../../types/interfaces'
import { IconContext } from 'react-icons'
import LinkItemSimple from './LinkItemSimple'
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
} from 'react-icons/fa'

interface LinksProp {
  linkData: any[]
  iconSize?: number
  iconColor?: string
  category: string
  padding?: string
  introduce?: string
}

const LinkContainer = styled.div`
  display: flex;
  margin: 1.5rem auto;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
`
const iconMap: { [key: string]: JSX.Element } = {}
iconMap.youtube = <FaYoutube />
iconMap.twitter = <FaTwitter />
iconMap.facebook = <FaFacebook />
iconMap.linkedin = <FaLinkedin />
iconMap.instagram = <FaInstagram />
iconMap.flickr = <FaFlickr />
iconMap.weibo = <FaWeibo />
iconMap.soundcloud = <FaSoundcloud />
iconMap.douban = <FaDochub />

const Links = ({
  linkData = [],
  iconColor = '#EFC854',
  iconSize = 40,
  category = '',
  padding = '0.5rem'
}: LinksProp) => {
  return (
    <LinkContainer>
      <IconContext.Provider
        value={{
          color: iconColor,
          size: String(iconSize),
          style: { verticalAlign: 'middle' }
        }}>
        {linkData.map((item: LinkObject, index: number) => {
          const { name, alt, link, icon, hidden } = item
          const iconElement: JSX.Element = iconMap[icon.toLowerCase()]
          if (!hidden) {
            return (
              <LinkItemSimple
                key={index}
                title={name}
                icon={iconElement}
                link={link}
                alt={alt}></LinkItemSimple>
            )
          } else {
            return null
          }
        })}
      </IconContext.Provider>
    </LinkContainer>
  )
}

export { Links }
