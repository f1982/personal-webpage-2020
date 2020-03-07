import { createGlobalStyle } from 'styled-components';

interface DefaultTheme {
    baseLine: 1.5;
    borderRadius: string;
    shadow: string;

    colors: {
        main: string;
        secondary: string;
    };
}
const myTheme: DefaultTheme = {
    baseLine: 1.5,
    borderRadius: '5px',
    shadow: '0 19px 38px rgba(0, 0, 0, 0.30),0 15px 12px rgba(0, 0, 0, 0.22);',
    colors: {
        main: 'cyan',
        secondary: 'magenta'
    }
};

const baseLine = 1.5;

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=OpenSans:400|Lora:400');
    @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');

*{
  box-sizing:border-box;
  padding:0;
  margin: 0;
}
  html {
    font-size: 16px;
  }
  
  body {
    background-color: white;
    font-family: 'Lora', sans-serif;
    font-weight: 400;
    line-height: ${myTheme.baseLine};
    color: #333;
  }

  a ,a:link ,a:active ,a:visited { 
    color: #333;
    text-decoration: none;
  }

  a:hover{
    color: #666;
    font-weight:bold;
    text-decoration: none;
  }
  p {
    line-height: ${myTheme.baseLine}rem;
    margin-top: ${myTheme.baseLine}rem;
    margin-bottom: ${myTheme.baseLine * 2}rem;
    color: #666;
  }
  

  h1, h2, h3, h4, h5 {
    margin: ${myTheme.baseLine}rem 0;
    font-family: 'Open Sans', sans-serif;
    font-weight: 700;
    line-height: ${myTheme.baseLine}rem;
  }

  h1 {
    font-size: 4.209rem;
  }

  h2 {
    font-size: 3.157rem;
    line-height: ${myTheme.baseLine * 2.5}rem;
  }

  h3 {
    font-size: 2.369rem;
    line-height: ${myTheme.baseLine * 2}rem;
  }

  h4 {font-size: 1.777rem;}

  h5 {
    font-size: 1.333rem;
  }

  small, 
    .text_small {font-size: 0.75rem;}
    .empty-line {line-height: 2rem;}

  .react-icons {
    vertical-align: middle;
  }
`;

export { myTheme, GlobalStyle };
