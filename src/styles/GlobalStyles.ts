import { createGlobalStyle } from 'styled-components'
import styledNormalize from 'styled-normalize'

const GlobalStyle = createGlobalStyle`

  ${styledNormalize}
  @import url('https://fonts.googleapis.com/css2?family=Titillium+Web:ital@0;1&display=swap');
  body {
    font-family: 'Titillium Web', sans-serif;
    color: #666
  }

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
