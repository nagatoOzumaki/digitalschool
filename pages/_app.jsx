import { useEffect } from 'react';
import '../styles/globals.css';
import { hotjar } from 'react-hotjar'


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    hotjar.initialize(3189697,6)
  }, [])
  return (
    <>
  
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
