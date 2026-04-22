import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#eb3e32',
      dark: '#d1352a',
      contrastText: '#fff',
    },
    secondary: {
      main: '#111827', // Gray 900
    },
  },
  typography: {
    fontFamily: '"Inter", "sans-serif"',
    h1: { fontWeight: 900 },
    h2: { fontWeight: 900 },
    h3: { fontWeight: 900 },
    h4: { fontWeight: 900 },
    h5: { fontWeight: 900 },
    h6: { fontWeight: 900 },
    button: {
      fontWeight: 900,
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: '12px 24px',
          borderRadius: '9999px',
        },
      },
    },
  },
});

export default theme;
