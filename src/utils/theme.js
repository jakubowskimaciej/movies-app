const theme = {
  colors: {
    white: '#fff',
    lightGrey: '#c0c7d6',
    grey: '#737C8E',
    darkGrey: '#37474f',
    black: '#111',
    shadow: 'rgba(0, 0, 0, 0.3)',
  },

  fontSize: {
    xl: '2.4rem',
    l: '1.7rem',
    m: '1.3rem',
    s: '1.1rem',
  },

  mediaQueries: {
    smallest: `only screen and (max-width: 25em)`, //275px
    smaller: 'only screen and (max-width: 31.25em)', //500px
    small: 'only screen and (max-width: 37.5em)', //600px
    medium: 'only screen and (max-width: 56.25em)', //900px
    large: 'only screen and (max-width: 80em)', //1300px
    larger: 'only screen and (max-width: 90em)', //1300px
    largest: 'only screen and (max-width: 97em)', //1500px
  },
};

export default theme;
