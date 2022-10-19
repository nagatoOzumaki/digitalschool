import { useEffect } from 'react';
import '../styles/globals.css';
import { hotjar } from 'react-hotjar';
import { useRouter } from 'next/router';
import * as gtag from '../utils/gtag';
import Script from 'next/script';
import NextSeo from 'next-seo';

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
      <NextSeo
        title='digital school'
        description='Digital School Cloud | Plateforme pour les cours en ligne .'
        canonical='https://www.digitalschool-cloud.vercel.app'
        openGraph={{
          url: 'https://www.digitalschool-cloud.vercel.app',
          title: 'digital school',
          description: 'Open Graph Description',
          images: [
            {
              url: 'https://www.digitalschool-cloud.vercel.app',
              width: 800,
              height: 600,
              alt: 'https://www.digitalschool-cloud.vercel.app',
              type: 'image/jpeg',
            },
            {
              url: 'https://www.digitalschool-cloud.vercel.app',
              width: 900,
              height: 800,
              alt: 'digitalschool',
              type: 'image/jpeg',
            },
            { url: 'https://www.example.ie/og-image-03.jpg' },
            { url: 'https://www.example.ie/og-image-04.jpg' },
          ],
          site_name: 'https://www.digitalschool-cloud.vercel.app',
        }}
        twitter={{
          handle: 'https://www.digitalschool-cloud.vercel.app',
          site: 'https://www.digitalschool-cloud.vercel.app',
          cardType: 'summary_large_image',
        }}
        facebook={{
          appId: '100086524425996',
        }}
      />

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
