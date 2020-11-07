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

//Load this font at html template
const PrimaryFonts = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto'

const GlobalStyle = createGlobalStyle`
  :root{
    --content-max-width: 900px;
    --mobile-screen-width: 768px;
  }
  * {
    box-sizing:border-box;
    padding:0;
    margin: 0;
  }
  html {
    font-size: 16px;
  }
  body {
    background-color: white;
    font-family: ${PrimaryFonts};
    line-height: ${myTheme.baseLine}rem;
    color: #4A4A4A;
  }
  h1, h2, h3, h4, h5 {
    margin: ${myTheme.baseLine}rem 0;
    font-weight: 700;
  }
  h1 {
    font-size: 4.209rem;
    font-style:italic;
  }
  h2 {
    font-size: 3.157rem;
    font-style:italic;
    line-height: ${myTheme.baseLine * 2.5}rem;
  }
  h3 {
    letter-spacing: -2px;
    font-style:italic;
    font-size: 2.369rem;
    display: inline-block;
    line-height: ${myTheme.baseLine * 2}rem;
    padding: 0 1rem 0 0.75rem;
    margin: 0;
    font-size: 3rem;
    background: linear-gradient(#efc854, #efc854) no-repeat;
    background-size: 100% 25%;
    background-position: 0 85%;
  }
  h4 {font-size: 1.777rem;}
  h5 {
    font-size: 1.333rem;
  }
  a ,a:link ,a:active ,a:visited { 
    color: #333;
    text-decoration: none;
  }
  a:hover{
    color: #666;
    /* font-weight:bold; */
    text-decoration: none;
  }
  p {
    line-height: ${myTheme.baseLine}rem;
    margin-top: ${myTheme.baseLine}rem;
    margin-bottom: ${myTheme.baseLine}rem;
    color: #666;
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
`;

export { myTheme, GlobalStyle };
