import { useEffect } from 'react';
import '../styles/globals.css';
import { hotjar } from 'react-hotjar';
import { Head } from 'next/head';
import { useRouter } from 'next/router';
import gtag from '../utils/gtag';
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    hotjar.initialize(3189697, 6);
  }, []);
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      {/* 
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-NRF00L70Z6"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-NRF00L70Z6');
</script>



*/}

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
      <Head>
        <script
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
        ></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
