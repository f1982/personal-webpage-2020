import { createGlobalStyle } from 'styled-components'
import styledNormalize from 'styled-normalize'

const GlobalStyle = createGlobalStyle`

  ${styledNormalize}

  /* body {
    font-family: 'Montserrat', sans-serif;
  } */

  p a {
    background: linear-gradient(#efc854, #efc854) no-repeat;
    background-size: 100% 15%;
    background-position: 0 70%;
  }
  small,
    .text_small {font-size: 0.75rem;}
    .empty-line {line-height: 2rem;}

  .react-icons {
    vertical-align: middle;
  }
`
export default GlobalStyle
