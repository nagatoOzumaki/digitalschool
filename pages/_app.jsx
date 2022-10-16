import { useEffect } from 'react';
import '../styles/globals.css';
import { hotjar } from 'react-hotjar';
import { Head } from 'next/head';
import { useRouter } from 'next/router';
import * as gtag from '../utils/gtag';
import Script from 'next/script';
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    hotjar.initialize(3189697, 6);
  }, []);
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <head>
        {/* <!-- ManyChat --> */}
        <script
          src='//widget.manychat.com/111723925049819.js'
          defer='defer'
        ></script>
        <script
          src='https://mccdn.me/assets/js/widget.js'
          defer='defer'
        ></script>
      </head>
      <Script
        strategy='afterInteractive'
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.TRACKING_ID}`}
      ></Script>
      <Script
        id='google-analytics'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', ${gtag.TRACKING_ID}, {
            page_path: window.location.pathname,
          });
        `,
        }}
      />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
