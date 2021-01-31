import React from 'react'
import Helmet from 'react-helmet'
import { Switch, Route } from 'react-router-dom'

import TitleImage from '../../comps/common/MediaBanner'
import VideoHobby from './comps/VideoHobby'
import RCHobby from './comps/RCHobby'
import DrawingHobby from './comps/DrawingHobby'

import '../../assets/styles/glitch.scss'
import BannerImage from '../../assets/images/banner-fpv.jpg'

const Hobbies = () => {
  return (
    <>
      <Helmet>
        <title>Hobbies</title>
        <meta
          name='description'
          content='I have some very interesting hobbies which make me happy and optimistic.'
        />
      </Helmet>
      <Switch>
        <Route>
          <TitleImage imageURL={BannerImage} />
          <RCHobby />
          <DrawingHobby />
          <VideoHobby />
        </Route>
      </Switch>
    </>
  )
}
export default Hobbies
