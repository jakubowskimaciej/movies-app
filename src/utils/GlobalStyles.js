import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
    }
    button {
      outline: none;
      cursor: pointer;
    }
    *,
    *::before,
    *::after {
      box-sizing: inherit;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    html {
      font-size: 62.50%; //1rem = 10px
      box-sizing: border-box;
      --color-white: ${({ theme }) => theme.colors.white};
      --color-lightGrey: ${({ theme }) => theme.colors.lightGrey};
      --color-grey: ${({ theme }) => theme.colors.grey};
      --color-darkGrey: ${({ theme }) => theme.colors.darkGrey};
      --color-black: ${({ theme }) => theme.colors.black};
      --shadow: ${({ theme }) => theme.colors.shadow};
      
      @media ${(props) => props.theme.mediaQueries.largest} {
          font-size: 57.5%;
      }
      @media ${(props) => props.theme.mediaQueries.large} {
          font-size: 55%;
      }
    }
    body {
      font-family: 'Montserrat', sans-serif;
      font-weight: 400;
      line-height: 1.6;
    }
    form,
    input,
    textarea,
    button,
    select,
    a {
      -webkit-tap-highlight-color: rgba(0,0,0,0);
    }
`;
