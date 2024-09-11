import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
        main: '#873EF2',
        dark: '#7a32e4',
    },
    secondary: {
        main: '#83879b',
    },
  },
  typography: {
    fontFamily: '"Open Sans", sans-serif',
    h1: {
      fontFamily: '"Open Sans", sans-serif',
    },
    h2: {
      fontFamily: '"Open Sans", sans-serif',
    },
    h3: {
      fontFamily: '"Open Sans", sans-serif',
    },
    h4: {
      fontFamily: '"Open Sans", sans-serif',
    },
    h5: {
      fontFamily: '"Open Sans", sans-serif',
      fontWeight: 'bold', 
    },
    h6: {
      fontFamily: '"Open Sans", sans-serif',
    },
    body1: {
      fontFamily: '"Open Sans", sans-serif',
    },
    body2: {
      fontFamily: '"Open Sans", sans-serif',
    },
    title: {
      fontFamily: '"Open Sans", sans-serif',
      fontSize: '1.2rem', 
      fontWeight: 500, 
      color: 'white',
      lineHeight: 1.2, 
    },
    title2: {
      fontFamily: '"Open Sans", sans-serif',
      fontSize: '1.1rem', 
      fontWeight: 400, 
      color: 'black',
      lineHeight: 1.2, 
    },
    subtitle1: {
      fontFamily: '"Open Sans", sans-serif',
      fontSize: '1.2rem', 
      fontWeight: 'bold', 
      lineHeight: 1.2, 
      color: 'white',
    }
  }
});

export default theme;
