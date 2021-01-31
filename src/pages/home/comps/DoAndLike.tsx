import React from 'react'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'

import RCTransmitter from './../../../assets/images/rc-transmiter.png'
import AndyAvatar from './../../../assets/images/avatar-pixel.jpg'

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-flow: column;
  @media screen and (max-width: 768px) {
    flex-flow: column;
    margin: 0rem;
  }
`

const UserAvatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
`

const HorizatalContainer = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  & p {
    /* text-align: justify; */
  }
  @media screen and (max-width: 768px) {
    flex-flow: column;
    padding: 0 0.5rem;
  }
`

const HorizatalItem = styled.div`
  flex: 1;
`

const AvatarImg = styled.img``

interface PropsType {
  whatIDo: string
  whatILike: string
}

const DoAndLike = (props: PropsType) => {
  return (
    <Wrapper>
      <div style={{ textAlign: `center`, marginBottom: `2rem` }}>
        <Typography variant='h2'>Love to explore and create</Typography>
      </div>
      <HorizatalContainer>
        <HorizatalItem style={{ textAlign: `right`, paddingRight: `2rem` }}>
          <UserAvatar src={AndyAvatar} />
        </HorizatalItem>
        <HorizatalItem>
          <Typography variant='body1'>{props.whatIDo}</Typography>
        </HorizatalItem>
      </HorizatalContainer>

      <HorizatalContainer>
        <HorizatalItem>
          <Typography variant='body1'>{props.whatILike}</Typography>
        </HorizatalItem>
        <HorizatalItem style={{ textAlign: `left`, paddingLeft: `2rem` }}>
          <AvatarImg src={RCTransmitter} />
        </HorizatalItem>
      </HorizatalContainer>
    </Wrapper>
  )
}

export default DoAndLike
