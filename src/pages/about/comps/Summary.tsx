import React from 'react'
import styled from 'styled-components'
import Typegraphy from '@material-ui/core/Typography'

import ImgAndyBack from '../../../assets/images/about-andy-back.jpg'
import ImgAndyMBP from '../../../assets/images/about-computer.jpg'
import ImgAndyFamily from '../../../assets/images/about-andy-family.jpg'

const Content = styled.div`
  width: 100%;
  max-width: 970px;
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
`

const Spacer = styled.div`
  margin: 2rem auto;
`

const getYears = (birthYear: number) => {
  var d = new Date()
  var n = d.getFullYear()
  return n - birthYear
}

interface SummaryProps {
  data: any
  children?: string
}
const Summary = (props: SummaryProps) => {
  const { who_is_andy, what_i_do, family } = props.data

  return (
    <Content>
      <Typegraphy variant='h3'>Who's Andy</Typegraphy>
      <Typegraphy>{who_is_andy}</Typegraphy>
      <img src={ImgAndyBack} alt='I was on the beach' />
      <Spacer />
      <Typegraphy variant='h3'>What I do?</Typegraphy>
      <Typegraphy>{what_i_do}</Typegraphy>
      <img src={ImgAndyMBP} alt='My Computer' />
      <Spacer />
      <Typegraphy variant='h3'>Family</Typegraphy>
      <Typegraphy>
        {String(family).replace('$AGE_OF_ZOE$', getYears(2016).toString())}
      </Typegraphy>
      <img src={ImgAndyFamily} alt='Introduce my family' />
      <div style={{ margin: `2rem auto` }}></div>
    </Content>
  )
}

export default Summary
