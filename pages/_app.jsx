import { useEffect } from 'react';
import '../styles/globals.css';
import { hotjar } from 'react-hotjar';
import { Head } from 'next/head';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    hotjar.initialize(3189697, 6);
  }, []);
  return (
    <>
      {/* <Head>
        {/* <script
          async
          src='https://www.googletagmanager.com/gtag/js?id=TRACKING-ID'
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
   window.dataLayer = window.dataLayer || [];
   function gtag(){dataLayer.push(arguments);}
   gtag('js', new Date());
   gtag('config', 'TRACKING-ID');`,
          }}
        ></script> */}
      {/* </Head> */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
