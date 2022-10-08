import '../styles/globals.css';
// import type { AppProps } from 'next/app';
// function MyApp({ Component, pageProps }: AppProps) {

function MyApp({ Component, pageProps }) {
  if(typeof(window)===undefined )
  {

      (function(h,o,t,j,a,r){
          h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
          h._hjSettings={hjid:3192874,hjsv:6};
          a=o.getElementsByTagName('head')[0];
          r=o.createElement('script');r.async=1;
          r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
          a.appendChild(r);
      })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
  }
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
