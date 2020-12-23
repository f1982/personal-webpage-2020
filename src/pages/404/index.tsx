import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import { SingleButton } from '../../comps/Button'
import { Link } from 'react-router-dom'

const Frame = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const PageNotFound = () => {
  return (
    <Frame>
      <Helmet titleTemplate='%s - 404, Page not found.'>
        <meta name='description' content='404, Page not found.' />
      </Helmet>
      <h1>:(</h1>
      <h3>Oops! Page not found.</h3>
      <div style={{ height: `1.5rem` }}></div>
      <Link to='/'>
        <SingleButton id='enter-button'>Home</SingleButton>
      </Link>
    </Frame>
  )
}

export default PageNotFound
