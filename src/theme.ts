import { DefaultTheme, createGlobalStyle } from 'styled-components'

const myTheme: DefaultTheme = {
    borderRadius: '5px',
    shadow: '0 19px 38px rgba(0, 0, 0, 0.30),0 15px 12px rgba(0, 0, 0, 0.22);',
    colors: {
        main: 'cyan',
        secondary: 'magenta',
    },
}


const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Padauk:400|Poppins:400');
    @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');

  html {
    font-size: 16px;
  }
  body {
    margin: 0;
    background-color: white;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    line-height: 1.45;
    color: #333;
  }

  p {margin-bottom: 1.25em;}
    h1, h2, h3, h4, h5 {
    margin: 2.75rem 0 1rem;
    font-family: 'Padauk', sans-serif;
    font-weight: 400;
    line-height: 1.15;
    }

    h1 {
    margin-top: 0;
    font-size: 4.209em;
    }

    h2 {font-size: 3.157em;}

    h3 {font-size: 2.369em;}

    h4 {font-size: 1.777em;}

    h5 {font-size: 1.333em;}

    small, .text_small {font-size: 0.75em;}
    .empty-line {
      line-height: 2rem;
    }
`


export {
    myTheme,
    GlobalStyle
}