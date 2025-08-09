import type { AppProps } from 'next/app';
import Head from 'next/head';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import '../styles/globals.css';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#7c3aed' },
    background: { default: '#071023', paper: '#0b1220' },
    text: { primary: '#e6eef8' }
  },
  typography: {
    fontFamily: 'Inter, Arial, sans-serif'
  }
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Attractive MUI Portfolio</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
